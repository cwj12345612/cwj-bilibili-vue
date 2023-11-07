<template>
    <uploadvideo_no :config="config" @addvideos="addvideos" v-if="status == 'no'"></uploadvideo_no>
   
    <uploadvideo_begin :config="config" :upfile="upfile" @addvideos="addvideos" @delvideo="delvideo"
        @changeCover="changeCover" @clearupfile="clearupfile" @changestatus="changestatus" v-if="status == 'begin'">
    </uploadvideo_begin>
    <uploadvideo_ing :schedule="schedule" v-if="status == 'ing'"></uploadvideo_ing>
    <uploadvideo_succeed v-if="status == 'succeed'"></uploadvideo_succeed>
    <uploadvideo_fail v-if="status == 'fail'"></uploadvideo_fail>
</template>
<script setup >
// #region  引入组件
import uploadvideo_no from './no.vue'
import uploadvideo_begin from './begin.vue'
import uploadvideo_ing from './ing.vue'
import uploadvideo_succeed from './succeed.vue'
import uploadvideo_fail from './fail.vue'
//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElLoading } from 'element-plus'
import { filetypeinfo, filetypeextension, filetypename } from 'magic-bytes.js'
const route = useRoute()
const router = useRouter()
import md5 from "js-md5";
// #endregion
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion
//#region  需要上传的视频 封面1
const upfile = reactive({
    videos: [],
    cover: null
})
//#endregion

//视频上传状态
const status = ref('no')
//#region  修改status的值
const changestatus = (st) => {
    // console.log('修改值'+st)
    status.value = st
}
//#endregion

//#region 上传进度
const schedule = reactive({
    issuspend: false,//是否在暂停,
    isover: false, //是否上传完成
    /**
     * 不是数组 而是对象
     */
    videolist: {}
})
watch(() => upfile.videos.length, () => {
    const videos = upfile.videos
    for (let video of videos) {
        schedule.videolist[video.name] = {
            name: video.name,
            size: parseInt(video.size / (1024 * 1024)),
            //上传进度 0-100
            schedule: 0,
            //已上传大小
            nowsize: 0
        }
    }
    // console.log(schedule.videolist)
}, { immediate: true })
watch(() => schedule.isover, () => {
    if (schedule.isover == 'succeed') {
        status.value = 'succeed'
    }else if(schedule.isover=='fail'){
        status.value='fail'
    }

})
//获取上传进度
const getschedule = () => {
    return schedule
}
const getschedulestatus = () => {
    return schedule.issuspend
}
const getschedulebyvideo = (videoname) => {
    return schedule.videolist[videoname]
}
//上传视频分片成功后 改变进度
const uploadchunk = (chunk) => {
    schedule.videolist[chunk.FileName].nowsize += 1
}
const uploadsuspend = () => {
    //暂停上传
    // console.log('暂停上传')
    schedule.issuspend = true
}
const uploadrecover = () => {
    //恢复上传
    // console.log('恢复上传')
    schedule.issuspend = false
}
const uploadover = (st) => {
    schedule.isover = st
}
onMounted(() => {
    //全部挂在window上
    window.getschedule = getschedule
    window.getschedulebyvideo = getschedulebyvideo
    window.uploadchunk = uploadchunk
    window.uploadsuspend = uploadsuspend
    window.uploadrecover = uploadrecover
    window.getschedulestatus = getschedulestatus
    window.uploadover = uploadover
})
//#endregion





//#region  触发父组件的上传状态
const emit = defineEmits(['uping'])
watch(() => status.value, () => {
    if (status.value != 'no') {
        emit('uping', 'video')
    }
}, { immediate: true })
//#endregion
//#region 上传限制
const config = reactive({
    //视频文件限制
    video: {
        //最大200*1024*1024MB
        total: 200 * 1024,
        count: 200,
        size: 20 * 1024,
        namelength: 100,
        //正则表达式校验文件名
        namereg: new RegExp('[\\\\/:*?\"<>|]'),
        types: ['.mp4', '.flv', '.mkv']
    },
    cover: {
        //图片大小不能超过50Mb
        size: 50,
        types: ['.png', '.jpeg', '.jpg','.webp'],
        //正则表达式校验图片名
        namereg: new RegExp('[\\\\/:*?\"<>|]')
    },
    form: {
        titlelength: 100,
        titlereg: new RegExp('[\\\\/:*\"<>|]'),
        tagscount: 10,
        taglength: 10,
        synopsislength: 1000
    }
})
//#endregion

//#region  清除文件
const clearupfile = () => {
    upfile.cover = null
    upfile.videos.length = 0
}
//#endregion
//#endregion
//#region 添加删除视频文件
const addvideos = async (el) => {

    openFullScreen('正在校验上传的视频文件')
    const videolist = el.target.files;
    for (let video of videolist) {
        let videostaus = false
        await new Promise(
            (resolve, reject) => {
                // console.log(video)
                if (
                    parseInt(video.size / (1024 * 1024)) > config.video.size
                    || video.name.substring(0, video.name.lastIndexOf('.')).length > config.video.namelength

                    || config.video.namereg.test(video.name)
                ) {
                    reject()
                }
                const fileReader = new FileReader();

                fileReader.onloadend = (f) => {
                    const bytes = new Uint8Array(f.target.result);
                    const ar = filetypename(bytes)
                    if (ar == null || ar.length == 0 || !config.video.types.includes('.' + ar[0])) {
                        reject()
                    } else {
                        resolve()
                    }
                }
                fileReader.readAsArrayBuffer(video)
            }).then(res => {
                videostaus = true
            },
                req => {
                    videostaus = false
                }
            )
        if (!videostaus) {
            loading.close()
            alert('视频文件异常 请重新上传')
            return
        }
    }
    for (let video of videolist) {
        const name = video.name
        if (upfile.videos.filter(v => v.name == name).length > 0) {
            loading.close()
            alert("该视频已存在")
            return
        }
    }
    loading.close()
    status.value = 'begin'
    for (let video of videolist) {
        upfile.videos.push(video)
    }
}
const delvideo = (name) => {
    const list = upfile.videos.filter(v => v.name != name)
    upfile.videos.length = 0;
    list.forEach(li => {
        upfile.videos.push(li)
    })
}
//#endregion

//#region 添加或修改封面
const changeCover = (cover) => {
    if (cover == null) {
        alert('更换封面失败 请检查图片文件')
    } else {
        upfile.cover = cover
    }

    // console.log(cover)
}
//#endregion
//#region  等待动画

let loading = null
const openFullScreen = (text) => {
    loading = ElLoading.service({
        lock: true,
        text: text,
        background: 'rgba(0, 0, 0, 0.7)',
    })
}

//#endregion
</script>
<!-- <style lang="less" scoped  src="@\assets\css\test.less"></style> -->
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

                &:hover {
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
                &:hover {
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
