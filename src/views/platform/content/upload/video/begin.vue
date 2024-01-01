<template>
    <form>

        <div class="header">
            <h3>{{ videos.length }} 个视频 共 {{ parseInt(videos.reduce((p, c) => {
                return p + c.size
            }, 0) / (1024 * 1024)) }} MB
                <span>
                    剩余{{ config.video.count - videos.length }}集 且容量{{
                        parseInt(
                            (config.video.total
                                - (videos.length == 0 ? 0 : (

                                    parseInt(videos.reduce((p, c) => {
                                        return p + c.size
                                    }, 0) / (1024 * 1024))
                                ))
                            )
                        )
                    }}MB</span>
            </h3>
            <label class="add" for="add">添加视频</label>
            <input id="add" multiple @change="addvideos" type="file" :accept="config.video.types.join()"
                style="display: none;">
        </div>

        <div class="form">
            <ul class="videos">
                <li v-for="(video, index) in videos">

                    <div class="icon">
                        <i class="colourless bofangshu"></i>
                    </div>
                    <div class="desc">
                        <div class="title">
                            <div style="display: flex;align-items: flex-end;">
                                <h4 :title="video.name.substring(0, video.name.lastIndexOf('.'))">
                                    <!-- {{ file.name }} -->
                                    {{ video.name.length <= 30 ? video.name.substring(0, video.name.lastIndexOf('.')) :
                                        video.name.substring(0, 30) + '...' }} </h4>
                                        <span style="font-size: 13px; color: #99a299;flex-shrink: 0;margin-left: 10px;">类型:
                                            {{ video.name.substring(video.name.lastIndexOf('.') + 1) }}</span>
                            </div>
                            <div class="setting">
                                <span style="margin-right: 20px;color: #99a299;font-size: 14px;">{{
                                    parseInt(video.size / (1024 * 1024)) + 'MB' }}</span>
                                <!-- <i class="colourless bofangqi-zanting" title="暂停上传"></i> -->
                                <!-- <i class="colourless shuayishua" title="重新上传"></i> -->
                                <el-button type="danger" @click.prevent="delvideo(video.name)">取消上传</el-button>

                            </div>
                        </div>
                        <!-- <div class="jindu"></div> -->
                    </div>
                </li>
            </ul>
            <ul class="text">
                <li>
                    <div class="title">封面</div>
                    <div class="content img">

                        <img class="videoupload_img" alt="">
                        <input @change="changeCover" :accept="config.cover.types.join()" type="file" id="videoupload_img"
                            style="display: none;">
                        <label for="videoupload_img">点击更换封面</label>
                    </div>
                </li>
                <li>

                    <label class="title" for="title">标题</label>
                    <div class="content c1">
                        <input v-model="form.title" id="title" type="text" :maxlength="config.form.titlelength"
                            placeholder="请输入标题">
                        <span>{{ `${form.title.length}/${config.form.titlelength}` }}</span>
                    </div>
                </li>
                <li>
                    <div class="title">类型</div>
                    <div class="content c2">
                        <div>
                            <input v-model="form.type" type="radio" value="zizhi" name="type"><span>自制</span>
                        </div>
                        <div class="zz">
                            <input v-model="form.type" type="radio" value="zhuanzai" name="type"><span
                                style="margin-right: 10px;">转载</span>
                            <input v-if="form.type == 'zhuanzai'" v-model="form.zhuanzai" type="text" placeholder="转载请注明出处">
                        </div>

                    </div>
                </li>
                <li>
                    <div class="title">分区</div>
                    <div class="content c3">
                        <span class="now" @click="isshowcs = !isshowcs">
                            {{
                                cs[form.cid]?.cname
                            }} · {{
    cs[form.cid] ?
    cs[form.cid]?.children?.filter(s => s.sid == form.sid)[0]?.sname
    : undefined }}
                        </span>
                        <div class="list" v-if="isshowcs">
                            <ul class="category">

                                <li @click.prevent="clickca(cid)" :class="`${form.cid == cid ? 'active' : undefined}`"
                                    v-for="(cid, index) in Object.keys(cs)">{{ cs[cid]?.cname }}</li>
                            </ul>
                            <ul class="content">
                                <li @click.prevent="clicksu(su.sid)" :class="`${form.sid == su.sid ? 'active' : undefined}`"
                                    v-for="su in cs[form.cid].children">
                                    <h3>{{ su.sname }}</h3>
                                    <p>{{ '暂无简介' }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <label class="title" for="tags" style="align-self: flex-start;">标签</label>
                    <div class="content c4">
                        <div class="input">
                            <ul class="tags">
                                <span title="点击删除" @click.prevent="form.tags = form.tags.filter(t => t != tag)"
                                    v-for="tag in form.tags" class="tag">{{ tag
                                    }}</span>
                            </ul>
                            <input type="text" id="tags" ref="videoupload_tags"
                                v-if="config.form.tagscount > form.tags.length" :maxlength="config.form.taglength"
                                @keyup.enter.prevent="addtag($event, $event.target.value)" placeholder="按下enter键添加,点击标签删除">
                            <span class="sys">还可以添加{{ config.form.tagscount - form.tags.length }}个标签</span>
                        </div>
                    </div>
                </li>
                <li>
                    <label for="deatils" class="title" style="align-self: flex-start;">简介</label>
                    <div class="content c5">
                        <textarea id="deatils" v-model="form.synopsis" :maxlength="config.form.synopsis" cols="30" rows="10"
                            placeholder="输入视频简介"></textarea>
                    </div>
                </li>
                <div class="submit">
                    <input type="button" :disabled="isdis" @click.prevent="submit" value="立即投稿">
                </div>
            </ul>
        </div>
    </form>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { filetypename } from 'magic-bytes.js'
import { GetCategoryAndSubarea, uploadFrom, uploadCover, uploadVideos, WirteSql } from '@/api/uploadvideo'
import { ElMessage, ElMessageBox } from 'element-plus'



const route = useRoute()
const router = useRouter()
// #endregion
// #region  模拟数据 mockjs

import Mock from 'mockjs'


const mock = (str) => { return Mock.mock(str) }

//#endregion
//#region  接收父组件传过来的数据 只读
const { config,
    upfile } = defineProps({
        config: Object,
        upfile: Object,
    })
const videos = computed(() => {
    return upfile.videos
})

//#endregion
//#region 子组件给父组件传值
const emit = defineEmits(['addvideos', 'delvideo', 'changeCover', 'clearupfile', 'changestatus'])
const addvideos = (el) => {

    emit('addvideos', el)
}
const delvideo = (name) => {
    emit('delvideo', name)
}

//#endregion
//#region 上传或更换封面

const changeCover = async (e) => {
    let files = e.target.files
    if (!files?.length) return
    await new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.onloadend = (f) => {
            const bytes = new Uint8Array(f.target.result);

            const ar = filetypename(bytes)
            if (ar == null || ar.length == 0 || !config.cover.types.includes('.' + ar[0])) {
                rej()
            } else {
                let fr = new FileReader();
                fr.readAsDataURL(files[0])
                fr.onload = (e) => {
                    document.querySelector('.videoupload_img').src = e.target.result
                    res()
                    // console.log(form.cover)
                }
            }
        }
        fileReader.readAsArrayBuffer(files[0])

    }).then(() => { emit('changeCover', files[0]) }, () => { emit('changeCover', null) })


}
//#endregion
//#region 上传表单
const form = reactive({
    title: mock("@cword(3,100)"), //标题
    type: 'zhuanzai', //是否未自制
    zhuanzai: mock('@url()'),//转自
    cid: 0, //类别
    sid: 0, //分区
    tags: ['csharp', 'efcore', 'sqlserver', 'netcore', 'vue', 'axios'],
    synopsis: mock('@cword(20,1000)'),//简介
})
//#endregion

//#region 添加标签
const addtag = (e, val) => {
    val = val.trim()
    if (val == '' || form.tags.includes(val)) return
    form.tags.push(val)
    e.target.value = ''
}
//#endregion
//#region  向后台请求分区和修改分区
const isshowcs = ref(false)
const cs = reactive({})
onMounted(() => {
    // return
    GetCategoryAndSubarea()
        .then(list => {
            for (let ca of list) {
                const key = ca[0]

                cs[key.cid] = { cid: key.cid, cname: key.cname, children: [] }

                for (let su of ca) {
                    cs[key.cid].children.push(su)
                }

            }
            if (list.length > 0) {
                form.cid = list[0][0].cid
                form.sid = list[0][0].sid
            }
            // console.log(cs)
        })

})
const clickca = (cid) => {
    if (cid == form.cid) return
    form.cid = cid
    form.sid = cs[cid].children[0].sid
}
const clicksu = (sid) => {
    isshowcs.value = false
    form.sid = sid
}
//#endregion

//#region  上传表单 封面 视频文件

//禁用按钮
const isdis = ref(false)
const submit = async () => {
    //    upfile.videos.forEach(video => {
    //     console.log(video.name)
    //    });
    // return
    isdis.value = true
    if (upfile.videos.length == 0 || upfile.cover == null) {
        errormsg()
        isdis.value = false
        return
    }
    if (form.type != 'zhuanzai') { delete form.zhuanzai }
    // console.log(form)
    const pro = uploadFrom(form).then(
        () => {
            uploadCover(upfile.cover, form).then(
                () => {
                    emit('changestatus', 'ing')
                    isdis.value = false
                    uploadVideos(upfile.videos)
                        .then(() => {
                            WirteSql().then(() => {
                                window.uploadover('succeed')
                            })
                            //已经销毁 所以不能使用
                            // emit('changestatus','succeed')
                        })
                })

        }
    ).catch(e => {
        // console.log(e)
        const code = e.response.status

        sessionStorage.setItem('errorcode', code)

        //改变状态
        window.uploadover('fail')
    })

    // emit('changestatus', 'ing')
    // uploadVideos(upfile.videos)
}

const errormsg = () => {
    ElMessageBox.confirm(
        '视频和封面都需要上传!是否清除文件重新上传?',
        '上传失败',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error',
        }
    )
        .then(() => {
            emit('clearupfile')
            document.querySelector('.videoupload_img').removeAttribute('src')
            ElMessage({
                type: 'success',
                message: '清除成功',
            })
        })
        .catch(() => {

            ElMessage({
                type: 'error',
                message: '请上传文件',
            })
        })
}
//#endregion

//#region 页面跳转提示
onBeforeUnmount((to, from, next) => {
    console.log('用户卸载')
})
//#endregion
</script>
<style scoped lang="less">
form {
    /* background-color: bisque; */
    /* height: 100%; */
    width: 100%;
}

form .header {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #e6e7e8;
}

form .header h3 {
    font-weight: normal;
    margin-right: 20px;
    font-size: 20px;

    span {

        color: #99a299;
        font-size: 13px;
        // margin-left: 20px;
    }
}

form .header .add {
    color: #fff;
    cursor: pointer;
    background-color: #0aaee0;
    padding: 5px 10px;
    border-radius: 6px;
}

.form {
    height: 100%;
    width: 100%;
    padding-left: 50px;
    /* background-color: cadetblue; */
}

.form :has(>input[type='text']:focus) {
    border-color: #0aaee0;
}

.form .c5 textarea:focus {
    border: 2px solid #0aaee0;
}

.videos {
    max-height: calc(60px * 5);
    overflow: auto;
}

.videos li {
    border-bottom: 2px solid #e6e7e8;
    display: flex;
    width: 100%;
    /* background-color: darkgoldenrod; */
    height: 60px;
    align-items: center;
    justify-content: flex-start;
}

.videos li .icon {
    margin-right: 20px;
}

.videos li .icon i {
    color: #0aaee0;
    font-size: 50px;
}

.videos li .desc {
    // padding-top: 5px;
    // padding-bottom: 10px;
    // padding-right: 20px;
    padding: 5px 20px 10px 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

.videos li .desc .title {
    display: flex;
    align-items: center;

    justify-content: space-between;
}

.videos li .desc .title h4 {

    font-weight: normal;
    font-size: 20px;
}

.setting i {
    margin-left: 10px;
    font-size: 20px;
    background-color: #e6e7e8;
    cursor: pointer;
    padding: 4px;
    border-radius: 8px;
}

.jindu {
    width: 100%;
    border: 2px solid #e6e7e8;

}

.text {
    margin-top: 20px;
    width: 100%;
    /* height: 6000px; */
    height: 600px;
    /* background-color: blueviolet; */
}

.text>li {
    margin-bottom: 30px;
    display: grid;
    width: 100%;
    grid-template-columns: 200px 1fr;
    justify-content: flex-start;
    align-items: center;
}

.text li .title {
    position: relative;
    font-size: 20px;
    font-weight: normal;
}

.text li .c1 {
    border: 2px solid #e6e7e8;
    border-radius: 6px;
    min-height: 40px;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}

.c1 input {
    height: 80%;
    width: 90%;
    /* background: none; */
}

.c2 {
    display: flex;
    align-items: center;
    // background-color: aquamarine;
    height: 40px;
}

.c2>div {

    margin-right: 20px;
    font-size: 20px;
    color: #61666d;
}

.c2 .zz {
    height: 100%;
    align-items: center;
    display: flex;

}

.c2 .zz input[type='text'] {
    height: 80%;
    flex-shrink: 0;
    background-color: #fcfae0;
    border: 1px solid #e6e7e8;
    padding-left: 5px;
}

.c2 .zz input[type='text']:focus {

    border: #0aaee0 2px solid;
}

.c2 .zz input[type='text'][disabled] {
    background-color: #99a299;
}

.c3 {
    position: relative;

    .now {
        transition: all 0.5s;
        border: #61666d 1px solid;
        padding: 3px 10px;
        border-radius: 6px;
        cursor: pointer;

        &:hover {
            color: #0aaee0;
            border-color: #0aaee0;
        }

    }

    .list {
        border-radius: 8px;
        background-color: #fff;
        top: 30px;
        border: 2px solid #61666d;
        max-width: 500px;
        max-height: 200px;
        position: absolute;
        // background-color: aquamarine;

        display: flex;

        .category {
            flex-grow: 1;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            overflow: auto;

            li {
                padding: 10px 50px;
                padding-left: 10px;
                cursor: pointer;
                text-overflow: ellipsis;

                &:where(:hover, .active) {
                    color: #0aaee0;
                }
            }
        }

        .content {
            overflow: auto;
            display: flex;
            flex-direction: column;
            // background-color: orange;
            padding-left: 10px;
            padding-right: 100px;

            li {
                &:where(:hover, .active) {
                    color: #0aaee0;
                }

                cursor: pointer;
                padding: 8px 0;
                display: flex;
                align-items: center;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                white-space: nowrap;

                h3 {
                    font-weight: normal;
                    font-size: 20px;
                    margin-right: 20px;
                }

                p {

                    color: #99a299;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    word-break: break-all;
                    white-space: nowrap;
                }
            }
        }
    }
}



.c4 .input {
    height: 40px;
    width: 100%;
    border: 2px solid #e6e7e8;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.c4 .input .tags {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.c4 .input .tag {
    cursor: pointer;
    margin: 0;
    display: inline;
    flex-shrink: 0;
    color: #fff;
    background-color: #0aaee0;
    font-size: 13px;
    padding: 2px;
    border-radius: 4px;
    margin-right: 3px;
}

.c4 .input input {
    // padding-left: 5px;
    width: 80%;
    height: 90%;
}

.c4 .input span.sys {
    flex-shrink: 0;
    color: #99a299;
}

.c4 .tag {
    /* background-color: aqua; */
    margin-top: 20px;
}

.c4 .tag .t,
.c4 .tag .hua {

    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 100px auto;
}

.c4 .tag .t .list {
    display: flex;
    justify-content: flex-start;
    /* background-color: blueviolet; */
    flex-wrap: wrap;
}

.c4 .tag li {
    background-color: #0aaee0;
    color: #fff;
    margin-bottom: 20px;
}

.c4 .tag .t .list li {

    cursor: pointer;
    width: auto;
    display: inline-block;
    margin-right: 10px;
    padding: 3px 5px;
    border-radius: 4px;
}

.c4 .tag .hua .hualist {
    display: flex;
    justify-content: flex-start;
    /* background-color: greenyellow; */
    flex-wrap: wrap;
}

.c4 .tag .hua .hualist li {
    cursor: pointer;
    /* background-color: burlywood; */

    width: auto;
    display: inline-block;
    margin-right: 10px;
    padding: 3px 5px;
    border-radius: 4px;
}

.c5 textarea,
.c5 textarea:focus {
    outline: none;
    width: 80%;
    border: 1px solid #99a299;
}

.submit input {
    padding: 10px;
    background-color: #0aaee0;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
    }
}

.text .img {

    aspect-ratio: 16/9;
    height: 100px;
    /* background-color: gold; */
    position: relative;
}

.text .img label {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    padding: 5px 0;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 13px;

    &:hover {
        background: rgba(0, 0, 0, 0.6);
    }
}
</style>
