<template>
    <uploadvideo_no @adf="add" v-if="uploadStore.status == 'no'"></uploadvideo_no>
    <form v-if="uploadStore.status == 'begin'">
        <div class="header">
            <h3>{{ upfile.videos.length }} 个视频 共 {{ videos_size }} MB
                <span>
                    剩余{{ config.video_count - upfile.videos.length }}集 且容量{{ config.videos_size - videos_size
                    }}MB</span>
            </h3>
            <label class="add" for="add">添加视频</label>
            <input id="add" multiple @change="add" type="file" accept=".mp4 , .flv , .mkv" style="display: none;">
        </div>
        <div class="form">
            <ul class="videos">
                <li v-for="(file, index) in upfile.videos">
                    <div class="icon">
                        <i class="colourless bofangshu"></i>
                    </div>
                    <div class="desc">
                        <div class="title">
                            <div style="display: flex;align-items: flex-end;">
                                <h4 :title="file.name.substring(0, file.name.lastIndexOf('.'))">
                                    <!-- {{ file.name }} -->
                                    {{ file.name.length <= 20 ? file.name.substring(0, file.name.lastIndexOf('.')) :
                                        file.name.substring(0, 20) + '...' }} <!-- {{
                                        file.name.substring(0,file.name.lastIndexOf('.')) }} -->
                                </h4>
                                <span style="font-size: 13px; color: #99a299;flex-shrink: 0;margin-left: 10px;">类型:
                                    {{ file.name.substring(file.name.lastIndexOf('.') + 1) }}</span>
                            </div>
                            <div class="setting">
                                <span style="margin-right: 20px;color: #99a299;font-size: 14px;">{{
                                    fileSzieToString(file) }}</span>
                                <i class="colourless bofangqi-zanting" title="暂停上传"></i>
                                <i class="colourless shuayishua" title="重新上传"></i>
                                <i class="colourless guanbi" title="取消上传"></i>
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

                        <img class="videoupload_img" src="@\assets\images\初夏之星.png" alt="">
                        <input accept=".jpg , .jpeg , .png" type="file" id="videoupload_img" @change="changeimg"
                            style="display: none;">
                        <label for="videoupload_img">点击更换封面</label>
                    </div>
                </li>
                <li>

                    <label class="title" for="title" :title="form.title">标题</label>
                    <div class="content c1">
                        <input id="title" :title="form.title" type="text" maxlength="100" v-model="form.title"
                            placeholder="请输入标题">
                        <span>{{ form.title.length }} / {{ config.title_count }}</span>
                    </div>
                </li>
                <li>
                    <div class="title">类型</div>
                    <div class="content c2">
                        <div>
                            <input type="radio" v-model="form.type" value="zizhi" :value="zhizhi"
                                name="type"><span>自制</span>
                        </div>
                        <div class="zz">
                            <input type="radio" v-model="form.type" value="zhuanzai" name="type"><span
                                style="margin-right: 10px;">转载</span>
                            <input type="text" :disabled="form.type === 'zizhi'" v-model="form.zhuanzai"
                                placeholder="转载请注明出处">
                        </div>

                    </div>
                </li>
                <li>
                    <div class="title">分区</div>
                    <div class="content c3">
                        <span class="now" @click="show4 = !show4">
                            {{
                                casukeys.filter(key => key.cid == form.cid)[0]?.cname

                            }} · {{
    casukeys.filter(key => key.cid == form.cid)[0] ?
    casulist[form.cid] ?
        casulist[form.cid].filter(li => li.sid == form.sid)[0]?.sname
        : undefined
    : undefined }}
                        </span>
                        <div class="list" v-if="show4">
                            <ul class="category">

                                <li :key="ca.cid" :style="`color: ${form.cid == ca.cid ? '#0aaee0' : undefined};`"
                                    @click="form.cid = ca.cid" v-for="(ca, index) in casukeys">{{ ca.cname }}</li>
                            </ul>
                            <ul class="content">
                                <li @click="form.sid = li.sid"
                                    :style="`color: ${form.sid == li.sid ? '#0aaee0' : undefined};`"
                                    v-for="li in casulist[form.cid] ">
                                    <h3>{{ li.sname }}</h3>
                                    <p :title="form.cid && form.sid ?
                                        (casukeys.filter(key => key.cid == form.cid)[0]?.cname + ' · ' + casulist[form.cid].filter(li => li.sid == form.sid)[0]?.sname + (li.synopsis ? (':' + li.synopsis) : ''))
                                        : undefined">{{ li.synopsis ?? '暂无简介' }}</p>
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
                                <span title="点击删除" @click.prevent=" form.tags = form.tags.filter(t => t !== tag)"
                                    v-for="tag in form.tags" class="tag">{{ tag
                                    }}</span>
                            </ul>
                            <input type="text" id="tags" ref="videoupload_tags" v-if="config.tags_count > form.tags.length"
                                @keyup.enter.prevent="addtag($event, $event.target.value)" placeholder="按下enter键添加,点击标签删除">
                            <span class="sys">还可以添加{{ config.tags_count - form.tags.length }}个标签</span>
                        </div>

                    </div>
                </li>
                <li>
                    <label for="deatils" class="title" style="align-self: flex-start;">简介</label>
                    <div class="content c5">
                        <textarea id="deatils" :maxlength="config.deatils_size" v-model="form.synopsis" cols="30" rows="10"
                            placeholder="输入视频简介"></textarea>
                    </div>
                </li>
                <div class="submit" >
                    <input type="button" @click.prevent="submit" value="立即投稿">
                </div>
            </ul>
        </div>
    </form>

    <uploadvideo_ing v-if="uploadStore.status == 'ing'" :videos="upfile.videos"></uploadvideo_ing>
    <uploadvideo_succeed v-if="uploadStore.status == 'succeed'"></uploadvideo_succeed>
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
import { computed, ref, defineEmits, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useuploadStore } from '@/pinia/uploadstore.js'
import { useRoute, useRouter } from 'vue-router'
import { fileSzieToString } from '@/utils/fileUtils'
const pageconfigStore = usepageconfigStore()
const uploadStore = useuploadStore()
const route = useRoute()
const router = useRouter()
import { GetCategoryAndSubarea,uploadFrom,uploadCover,uploadVideos } from '@/api/uploadvideo'
// #endregion
const show4 = ref(false)
//#region 上传限制
const config = reactive({
    video_count: 200,
    //单位MB
    videos_size: 20 * 1024,
    title_count: 100,
    tags_count: 7,
    deatils_size: 1000
})
//#endregion
// #region 方便测试 给videos添加第一个视频
// onMounted(() => {
//     for (let index = 0; index < 1; index++) {
//         videos.push({
//             name: '第一个视频.mp4',
//             size: '344453333'
//         })
//     }
//     // videos.length=0
//     uploadStore.uploadstart('video');
// })

//计算属性 视频总大小 MB
const videos_size = computed(() => {
    let count = 0
    for (let i = 0; i < upfile.videos.length; i++) {
        const file = upfile.videos[i]
        count += parseInt(file.size / (1024 * 1024))
    }
    return count
})
const addtag = (e, val) => {
    val = val.trim()
    if (val == '' || form.tags.includes(val) || form.tags.length >= config.tags_count) return
    form.tags.push(val)
    e.target.value = ''

}
//#endregion
//#regin 更换视频封面
const changeimg = (e) => {
    let files = e.target.files
    if (!files?.length) return
    let fr = new FileReader();
    fr.readAsDataURL(files[0])
    fr.onload = (e) => {
        document.querySelector('.videoupload_img').src = e.target.result
       upfile.cover= files[0]
        // console.log(form.cover)
    }
}
//#endregion
//#region 需要上传的全部内容 
//

// const videos = reactive([])
const upfile=reactive({
    videos:[],
    cover:null
})
//上传表单
const form = reactive({

    title: '标题1', //标题
    type: 'zhuanzai', //是否未自制
    zhuanzai: '百度',//转自
    cid: 0, //类别
    sid: 0, //分区
    tags: ['csharp','netcore','vue','axios'],
    synopsis: '测试文件上传1',//简介
})
//#endregion
/**
 * 添加视频
 * @param {} e 
 */
const add = (e) => {
    // console.log('此处需要检查视频是否符合要求')
    const files = e.target.files;
    // console.log(files)
    for(let file of files){
       upfile.videos.push(file)
    }

    uploadStore.uploadstart('video');
}

//#region  从后台获取类别和分区

const casukeys = reactive([])
const casulist = reactive({})
watch(() => form.cid, () => {
    form.sid = casulist[form.cid][0].sid
}, { immediate: false })
onMounted(() => {
    GetCategoryAndSubarea().then(req => {
        // console.log(req)
        if(!req) return
        req.forEach(list => {
            casukeys.push({ cid: list[0].cid, cname: list[0].cname })
            casulist[list[0].cid] = list
        })
        form.cid = casukeys[0].cid

        form.sid = casulist[form.cid][0].sid

    })
})



//#endregion
//#region 上传

const submit = () => {
// uploadFrom(form).then(()=>
// uploadCover(upfile.cover)
// )

uploadVideos(upfile.videos)
    uploadStore.status = 'ing'
}
//#endregion
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

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
