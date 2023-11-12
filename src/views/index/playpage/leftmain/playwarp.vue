<template>
    <div class="left_main_playwarp">
        <div id="playpage_bofanqi" class="playpage_bofanqi"></div>

        <div class="bottom">
            <div class="videoinfo">
                <div class="line">
                    <span style="color: #0aaee0;">{{ '???' }}&nbsp;</span>
                    <span>用户正在观看</span>
                </div>
                <span>&nbsp;,&nbsp;</span>
                <div class="danmucount">
                    <span>已装填<span style="color: #0aaee0;">{{ "???" }}</span>条弹幕</span>
                </div>
            </div>

            <div class="root">
                <div class="setting">
                    <i class="colourless shezhi"></i>
                </div>
                <div class="send">
                    <span class="zi">A</span>
                    <div class="input">
                        <input v-model="danmutxt" :disabled="!userStore.isLogin" type="text"
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
import { ElNotification } from 'element-plus'
import dataUtils from '@/utils/dataUtils'
import { GetVideoListvideos, CreateVideoDanmuRedis, GetVideoDanmuAll, GetVideoDanmuByMoment } from '@/api/danmu'
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'



const mock = (str) => { return Mock.mock(str) }
//#endregion

//#region 配置参数 
const playerconfig = {
    height: '100%',
    width: '100%',
    plugins: [Danmu],
    pip: true,
    playnext: {
        urlList: true
    },
    mini: true,

}
const danmuconfig = {

    duration: 5500,         //弹幕持续显示时间,毫秒(最低为5000毫秒)
    //   id: String,               //弹幕id，需唯一
    //   start?: Number,           //弹幕出现时间, 单位：ms 毫秒
    prior: true,          //该条弹幕优先显示，默认false
    color: true,          //该条弹幕为彩色弹幕，默认false
    //   txt: String,              //弹幕文字内容
    style: {                 //弹幕自定义样式
        color: '#0aaee0',         //例：'#ff9500',
        fontSize: '30px',      // 例：'20px',
        // padding: '2px 11px'        //例： 2px 11px',
    }

}
//#endregion
//#region 被管理的数据
// 视频列表分集
const videolist = reactive([])
//弹幕文本
const danmutxt = ref('')


//uuid 每次刷新都会生一个唯一uuid websocket使用
const uuid = ref('')
//#endregion
//#region  播放器 websocket
let player = null
let socket = null
//#endregion
//#region 初始化
onMounted(async () => {
    uuid.value = dataUtils.uuid()

    const index = route.query.index ?? 1
    await GetVideoListvideos(route.params.id)
        .then(list => {
            list.forEach(video => {
                videolist.push(video)
            });
            player = new Player({
                ...playerconfig,
                el: document.getElementById('playpage_bofanqi'),
                url: videolist.find(v => v.index == (route.query.index ?? 1)).path
            })
            initon()
        })
    await CreateVideoDanmuRedis(videolist.find(v => v.index == (route.query.index ?? 1)).id);
    await GetDanmuAll()

    CreateWebsocket();
})


const initon = () => {
    player.on(Events.PLAY, () => {
        //播放
    })
    player.on(Events.PAUSE, () => {
        //暂停

    })
    //播放下一个
    player.on(Events.PLAYNEXT, () => {

        const index = route.query.index ?? 1
        if (!videolist.find(v => v.index > index)) {
            router.push(`/play/${route.params.id}?index=1`)
            return
        }
        router.push(`/play/${route.params.id}?index=${parseInt(index) + 1}`)
    })

    player.on(Events.USER_ACTION, (data) => {

        if ((data.action == 'click' && data.event == 'click') || (data.action == 'seek')) {


            const currentTime = parseInt(player.currentTime * 1000)
            //  console.log(route.query.index)
            //  console.log(videolist)
            GetVideoDanmuByMoment(videolist.find(v => v.index == (route.query.index ?? 1))?.id, currentTime, uuid.value)
                .then(list => {
                    // console.log(list)
                    player.plugins.danmu.updateComments(list, true)
                })
        }
    })
}
//#endregion
//#region 获取全部弹幕
const GetDanmuAll = async () => {
    const index = route.query.index ?? 1
    const video = videolist.find(v => v.index == index)
    await GetVideoDanmuAll(video.id)
        .then(list => {
            // console.log(list)
            // player.plugins.danmu.
            player.plugins.danmu.updateComments(list, true)
        })
}
//#endregion
//#region  监听分集改变
watch(() => route.query.index, () => {
    const index = route.query.index ?? 1
    const video = videolist.find(v => v.index == index)
    // console.log(video)


    //切换视频源
    player.replay()
    player.switchURL(video.path)
    //

})
//更改弹幕相关
watch(() => route.query.index, async () => {

    const index = route.query.index ?? 1
    const video = videolist.find(v => v.index == index)

    //清除弹幕池
    player.plugins.danmu.clear()

    await CreateVideoDanmuRedis(video.id);
    await GetDanmuAll();

    danmutxt.value = ''
})
//更换websocket
watch(() => route.query.index, () => {
    socket.close()
    CreateWebsocket()
})
//#endregion

//#region websocket相关
const CreateWebsocket = () => {
    uuid.value = dataUtils.uuid();
    const ws = `ws://localhost:8081/danmu/ws/${videolist.find(v => v.index == (route.query.index ?? 1)).id
        }/${uuid.value}`
    socket = new WebSocket(ws)
    socket.onopen = () => {
        // console.log('打开连接' + uuid.value)
    }
    socket.onmessage = (event) => {

        // console.log(JSON.parse(event.data))
        // if ((event?.data??'')=='') return
        if (!event || !event.data || event.data == '') return
        const comment = dataUtils.toCommentWebsocket(JSON.parse(event.data))
        console.log('消息过来了' + comment.txt)
        // console.log(player.plugins.danmu.danmujs)
        // console.log(comment)
        // console.log(typeof comment.start)
        player.plugins.danmu.sendComment(comment)
        // console.log(player.plugins.danmu.danmujs)
    }
    socket.onclose = () => {
        // console.log('连接销毁')
    }
}
const sendDanmu = () => {
    //发送弹幕
    //  console.log(danmutxt.value)
    const txt = danmutxt.value.trim()
    if (txt == '') {
        ElNotification({
            title: '不能发送空弹幕',
            // message: 'This is an info message',
            type: 'info',
            zIndex: 10087,
        })
        return
    }
    // console.log('发送弹幕')
    const currentTime = parseInt(player.currentTime * 1000)
    const comment = {
        ...danmuconfig,
        txt: txt,
        // txt: mock('@word(10)'),
        id: dataUtils.uuid()
    }
    player.plugins.danmu.sendComment(comment)
    danmutxt.value = ''
    // console.log(currentTime)
    const danmu = dataUtils.toDanmuEntity(comment)
    danmu.start = currentTime
    // console.log(socket)
    //  console.log(JSON.stringify(danmu.start))
    if (socket.readyState == 1) {

        socket.send(JSON.stringify(danmu))
        // console.log(danmu.start + '#' + danmu.txt)
    } else {
        ElNotification({
            title: '警告',
            message: '弹幕无法发送到后台',
            zIndex: 10087,
            type: 'warning',
        })
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
