<template>
    <div class="left_main_playwarp">
        <div ref="playpage_bofanqi" class="playpage_bofanqi"></div>

        <div class="bottom">
            <div class="videoinfo">
                <div class="line">
                    <span style="color: #0aaee0;">{{ mock({ 'num|100000-450006': 456 }).num }}&nbsp;</span>
                    <span>用户正在观看</span>
                </div>
                <span>&nbsp;,&nbsp;</span>
                <div class="danmucount">
                    <span>已装填<span style="color: #0aaee0;">{{ mock({ 'num|10000-134552': 34552 }).num }}</span>条弹幕</span>
                </div>
            </div>

            <div class="root">
                <div class="setting">
                    <i class="colourless shezhi"></i>
                </div>
                <div class="send">
                    <span class="zi">A</span>
                    <div class="input">
                        <input v-model="danmutext" :disabled="!userStore.isLogin" type="text"
                            :placeholder="userStore.isLogin ? '发个友善的弹幕见证当下' : '需要登录才能发送弹幕'">
                        <div class="liyi">
                            <a href="https://www.bilibili.com/blackboard/help.html#/?qid=f80ff5461cc94a53a24fd1a42ce90fe0"
                                target="_blank">
                                弹幕礼仪
                            </a>
                            <i class="colourless gengduo"></i>
                        </div>
                    </div>
                    <button :disabled="!userStore.isLogin" class="submit" @click.prevent="sendDanmu">
                        {{ userStore.isLogin ? '发送' : '请登录' }}
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由 xgplayer视频播放器
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useUserStore } from '@/pinia/userStore.js'
import { useRoute, useRouter } from 'vue-router'
import Player, { Events } from 'xgplayer';
import Danmu from 'xgplayer/es/plugins/danmu'
const pageconfigStore = usepageconfigStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
import { GetVideoListvideos, createVideoRedis, GetDanmuBymoment } from '@/api/danmu'
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'


const mock = (str) => { return Mock.mock(str) }
//#endregion

//#region 视频列表分集
const videolist = reactive([])
//#endregion
//#region  数据
//请求弹幕的定时器 不用vue管理
let danmuIn = null
//上次请求时刻 毫秒
const moment = ref(0)
//弹幕开关
const danmuswitch = ref(true)
//websocket实时获取弹幕
let socket = null
//#endregion
//#region 监听开始播放
const Ajaxdanmu = () => {
    clearInterval(danmuIn)
    if (!danmuswitch.value) return
    const fu = () => {
        const currentTime = player.currentTime
        const abs = Math.abs(currentTime * 1000 - moment.value)
        //如果间隔大于5s
        if (abs >= 5000 || moment.value == 0) {
            const video = videolist.find(v => v.index == (route.query.index ?? 1))
            if (moment.value >= video.duration * 1000 && parseInt(currentTime - video.duration) < 1) {
                clearInterval(danmuIn)
                return
            }
            moment.value = parseInt(currentTime * 1000)
            GetDanmuBymoment(video.id, moment.value < 1000 ? 0 : moment.value, (moment.value + 10000) > video.duration ? (moment.value + 10000) : video.duration)
                .then(list => {
                    // console.log(list)
                    // player.plugins.danmu.updateComments(list.map((li) => {
                    //     li.id = mock('@id()')

                    //     toComment(li)
                    //     return li
                    // }))

                    //批量导入弹幕 颜色会消失 所以要循环导入
                    list.forEach(li => {
                        li.id = mock('@id()')
                        player.plugins.danmu.sendComment(toComment(li))
                    })
                })
        }
        return fu
    }
    fu()
    danmuIn = setInterval(() => {
        fu()
    }, 1000);
}
//#endregion
//#region 监听视频暂停
const pause = () => {

    clearInterval(danmuIn)
}
//#endregion
//#region 播放器  不用交给vue管理
let player = null
const playpage_bofanqi = ref()
//#endregion
//#region 页面初始化
onMounted(async () => {
    //#region 从后台获取视频列表 并初始化播放器
    const exsits = await GetVideoListvideos(route.params.id)
        .then(list => {
            player = new Player({
                el: playpage_bofanqi.value,
                url: list.find(v => v.index == (route.query.index ?? 1)).path,
                height: '100%',
                width: '100%',
                plugins: [Danmu],
                pip: true,
                playnext: {
                    urlList: true
                },
                mini: true,
            })
            list.forEach(video => {
                videolist.push(video)
            });
            return true
        }).catch(e => {
            alert('视频不存在')
            router.push('/')
            return false
        })
    //#endregion
    if (exsits) await initother()

})
//#region 其他初始化工作
const initother = async () => {
    //
    //#region 监听播放下一个按钮
    player.on(Events.PLAYNEXT, () => {
        const index = route.query.index ?? 1
        if (!videolist.find(v => v.index > index)) {
            router.push(`/play/${route.params.id}?index=1`)
            return
        }
        router.push(`/play/${route.params.id}?index=${parseInt(index) + 1}`)
    })
    //#endregion
    // 监听开始播放 弹幕请求
    player.on(Events.PLAY, Ajaxdanmu)
    //监听暂停播放
    player.on(Events.PAUSE, pause)
    //监听视频结束

    //监听弹幕开关
    player.on(Events.USER_ACTION, (data) => {
        if (data.action === "switch_danmu" && data.pluginName === "danmu") {
            danmuswitch.value = data.to
            if (!data.to) {
                clearInterval(danmuIn)
            } else if (data.to) {

                Ajaxdanmu()
            }
        }
    })
    //把视频弹幕全部加载到redis中
    createVideoRedis(videolist.find(v => v.index == (route.query.index ?? 1))?.id)

    //#region 建立websocket
    initwebsocket()
    //#endregion
}
//#endregion

//#endregion



//#region 监听index变化 播放指定分集
watch(() => route.query.index, () => {
    const index = route.query.index ?? 1
    const video = videolist.find(v => v.index == index)
    // console.log(video)

    //清除弹幕池
    player.plugins.danmu.clear()
    //把视频弹幕全部加载到redis中
    createVideoRedis(videolist.find(v => v.index == (route.query.index ?? 1))?.id)

    //重置定时器
    moment.value = 0
    clearInterval(danmuIn)

    //更换websocket
    // initwebsocket()

    //切换视频源
    player.replay()
    player.switchURL(video.path)


})
//#endregion
//#region 发送弹幕
const danmutext = ref('')
const sendDanmu = () => {
    // console.log('发送弹幕')
    // if (danmutext.value != '') console.log(danmutext.value)
    let comment = {
        duration: parseInt(mock({ 'num|2000-10000': 2000 }).num),         //弹幕持续显示时间,毫秒(最低为5000毫秒)
        id: mock('@id()'),               //弹幕id，需唯一
        // start: parseInt(player.currentTime*1000),           //弹幕出现时间, 单位：ms 毫秒
        prior: true,          //该条弹幕优先显示，默认false
        color: true,          //该条弹幕为彩色弹幕，默认false
        txt: danmutext.value != '' ? danmutext.value : mock('@cword(10)'),              //弹幕文字内容
        style: {                 //弹幕自定义样式
            color: mock('@color()'),         //例：'#ff9500',
            fontSize: '30px',      // 例：'20px',
            padding: '2px 11px'        //例： 2px 11px',
        }
        // mode: 'top',           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
    }
    player.plugins.danmu.sendComment(comment)

    // console.log(JSON.stringify(comment))
    const currentTime = parseInt(player.currentTime * 1000)

    const danmu = toDanmuEntity(comment)
    
    danmu.start = currentTime
    //  console.log(JSON.stringify(danmu.start))
    socket.send(JSON.stringify(danmu))
}
//#endregion
//#region 前后端弹幕格式转换
//前端向后端发送弹幕 弹幕进行格式化
const toDanmuEntity = (comment) => {
   
    const danmu = {}
    for (let key of Object.keys(comment)) {
        const type = typeof comment[key]
        if (type != 'object') {
            danmu[key] = comment[key]
        } else {
            const f = comment[key]
            for (let kk of Object.keys(f)) {
                danmu[key + '_' + kk] = f[kk]
            }
        }
    }
delete danmu.id
    return danmu
}
// 后端向前端发送弹幕 弹幕格式化
const toComment = (danmuEntity) => {
    const comment = {
        duration: null,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
        id: null,               //弹幕id，需唯一
        // start: parseInt(player.currentTime*1000),           //弹幕出现时间, 单位：ms 毫秒
        prior: true,          //该条弹幕优先显示，默认false
        color: true,          //该条弹幕为彩色弹幕，默认false
        txt: null,              //弹幕文字内容
        style: {                 //弹幕自定义样式
            color: null,         //例：'#ff9500',
            fontSize: null,      // 例：'20px',
            padding: null      //例： 2px 11px',
        },
        mode: 'top',           // 例：'top', 显示模式，top顶部居中，bottom底部居中，scroll滚动，默认为scroll
    }
    const keyscomment = Object.keys(comment)
    //    console.log(keyscomment)
    for (let key of Object.keys(danmuEntity)) {
        //    console.log(key)
        if (!key.includes('_')) {
            const kk = keyscomment.find(k => k.toLocaleUpperCase() == key.toLocaleUpperCase())
            if (kk) comment[kk] = danmuEntity[key]
        } else {
            const kk = key.substring(0, key.indexOf("_"))
            const val = key.substring(key.indexOf("_") + 1)
            // console.log(Object.keys(comment[kk]))
            // console.log(val)
            const kv = Object.keys(comment[kk]).find(k => k.toLocaleUpperCase() == val.toLocaleUpperCase())
            // console.log(kv)
            if (kv) comment[kk][kv] = danmuEntity[key]
        }
    }

    switch (comment.mode) {
        case 0:
            comment.mode = 'scroll'
            break;
        case 1:
            comment.mode = 'bottom'
            break;
        case 2:
            comment.mode = 'center'
            break;
        case 3:
            comment.mode = 'top'
            break;
        default:
            comment.mode = 'scroll'
            break;
    }
    // console.log(JSON.stringify(comment))


    return comment
}
//#endregion

//#region websocket相关
const initwebsocket = async () => {

    const ws = `ws://localhost:8081/danmu/ws/${!userStore.isLogin ? 0 : userStore.user.id}/${videolist.find(v => v.index == (route.query.index ?? 1)).id
        }`
    console.log(ws)
    socket = new WebSocket(ws)

    // socket.binaryType='arraybuffer'
    socket.onmessage = (event) => {
        console.log('消息过来了')
        console.log(event.data)
    }
    socket.onopen = () => {
        console.log('连接打开')
    }
    socket.onclose = () => {
        console.log('连接关闭')
    }

}

//#endregion
</script>
<style scoped>
@import 'xgplayer/dist/index.min.css';
@import 'xgplayer/es/plugins/danmu/index.css';

.left_main_playwarp {
    width: 100%;

    display: flex;
    flex-direction: column;
    /* 
:style="pageconfigStore.dynamicWH(undefined, { normal: 422, max: 1009, min: 422 })"
*/
    max-height: 1009px;
    min-height: 422px;
    height: 55vh;
}

.playpage_bofanqi {
    background-color: black;
    width: 100%;
    height: 100%;
    flex-shrink: 1;

}

.left_main_playwarp .bottom {
    /* padding: 5px 0; */
    height: 50px;
    border: 1px solid #99a299;
    border-top: none;
    box-sizing: border-box;
    width: 100%;
    background-color: #ffffff;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bottom .videoinfo {
    margin-left: 5px;
    flex-shrink: 0;
    font-size: 13px;
    /* background-color: palevioletred; */
    display: flex;
    color: #61666d;
}

.bottom .root {
    flex-shrink: 1;
    /* background-color: aquamarine; */
    height: 90%;
    flex-grow: 1;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.root .send {

    height: 90%;
    border-radius: var(--border-radius-min);
    overflow: hidden;
    width: 90%;
    padding-left: 5px;
    background-color: rgb(241, 242, 243);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.send .zi {
    cursor: pointer;
    border-bottom: 2px solid rgb(97, 102, 109);
    font-size: 20px;
    color: rgb(97, 102, 109);
}

.send .zi:hover {
    color: #00aeec;
    border-bottom: 2px solid #00aeec;
}

.send .input {

    height: 100%;
    /* background-color: cadetblue; */
    width: 70%;
    display: flex;

}

.send .input input {

    background: none;
    height: 100%;
    border: none;
    /* width: 60%; */
    flex-grow: 1;
    flex-shrink: 1;
}

.send .input input[disabled],
.submit[disabled] {

    cursor: not-allowed;
}

.input .liyi {
    font-size: 13px;
    color: #9499a0;
    cursor: pointer;
    background: none;
    /* / flex-grow: 0; */
    display: flex;
    align-items: center;
    justify-content: center;

}

.input .liyi:hover> {
    color: #00aeec;
}

.submit {
    border: none;
    width: 20%;
    color: #ffffff;
    background-color: #00aeec;
    height: 100%;
}

.submit[disabled] {
    background-color: #61666d;
}

.root .setting i {
    font-size: 35px;

}

.root .setting {
    margin-right: 12px;
    transition: all 0.5s;
}

.root .setting:hover {
    color: #00aeec;
    transform: rotate(90deg);
}
</style>
