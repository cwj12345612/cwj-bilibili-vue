<template>
    <div class="video_upload" v-if="!uploadStore.ing">

        <label class="icon" for="upload">
            <i class="colourless tianjia"></i>
            <span>拖拽到此处也可以上传</span>
        </label>
        <label class="upload" for="upload">
            <span>上传视频</span>
            <input type="file" id="upload" class="input" accept=".mp4 , .flv , .mkv" @change="add">
        </label>
        <ul class="desc">
            <a href="https://www.bilibili.com/blackboard/blackroom.html" target="_blank">
                <li>
                    禁止发布的内容
                </li>
            </a>
            <li @mouseover="show1 = true" @mouseout="show1 = false">
                <span>视频大小限制</span>
                <div class="title-block" v-show="show1">
                    <span>单个视频不超过2GB</span>
                    <br>
                    <span>总的视频不超过20GB且数量不超过200集</span>
                </div>
            </li>
            <li @mouseover="show2 = true" @mouseout="show2 = false">
                <span>视频格式限制</span>
                <div class="title-block" v-show="show2">
                    <span>推荐格式: mp4 flv</span>
                    <br>
                    <span>其他格式: mkv</span>
                </div>
            </li>
            <li @mouseover="show3 = true" @mouseout="show3 = false">
                <span>其他注意事项</span>
                <div class="title-block" v-show="show3">
                    <span>请事先检查视频是否可以正常播放，请不要上传已损坏的视频</span>

                    <br>
                    <span>请不要上传冒充视频格式的其他类型文件 (如图片格式修改为MP4格式)</span>

                    <br>
                    <span>一经发现则封号处理</span>
                </div>
            </li>
        </ul>
    </div>
    <form v-if="uploadStore.ing">
        <div class="header">
            <h3>{{ videos.length }} 个视频 共 {{ videos_size }} MB
                <span>
                    剩余{{ config.video_count - videos.length }}集且容量{{ config.videos_size - videos_size
                    }}MB</span>
            </h3>
            <label class="add" for="add">添加视频</label>
            <input id="add" multiple @change="add" type="file" accept=".mp4 , .flv , .mkv" style="display: none;">
        </div>
        <div class="form">
            <ul class="videos">
                <li v-for="(file, index) in videos">
                    <div class="icon">
                        <i class="colourless bofangshu"></i>
                    </div>
                    <div class="desc">
                        <div class="title">
                            <div style="display: flex;align-items: flex-end;">
                                <h4>

                                    {{ file.name.length <= 20 ? file.name.substring(0, file.name.lastIndexOf('.')) :
                                        file.name.substring(0, 20) }} <!-- {{
                                        file.name.substring(0,file.name.lastIndexOf('.')) }} -->
                                </h4>
                                <span style="font-size: 13px; color: #99a299;flex-shrink: 0;margin-left: 10px;">类型:
                                    {{ file.name.substring(file.name.lastIndexOf('.') + 1) }}</span>
                            </div>
                            <div class="setting">
                                <span style="margin-right: 20px;color: #99a299;font-size: 14px;">30MB/{{
                                    fileSzieToString(file) }}</span>
                                <i class="colourless bofangqi-zanting" title="暂停上传"></i>
                                <i class="colourless shuayishua" title="重新上传"></i>
                                <i class="colourless guanbi" title="取消上传"></i>
                            </div>
                        </div>
                        <div class="jindu"></div>
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
                        <select>
                            <option selected>请选择分区</option>
                            <option v-for="index in 7" :value="mock('@cword(3,10)')">{{ mock('@cword(5,20)') }}</option>

                        </select>
                    </div>
                </li>
                <li>
                    <label class="title" for="tags" style="align-self: flex-start;">标签</label>
                    <div class="content c4">
                        <div class="input">
                            <ul class="tags">
                                <span title="点击删除" @click.prevent="deltag(tag)" v-for="tag in form.tags" class="tag">{{ tag
                                }}</span>
                            </ul>
                            <input type="text" id="tags" ref="videoupload_tags" v-if="config.tags_count > form.tags.length"
                                @keyup.enter="addtag($event.target.value)" placeholder="按下enter键添加,点击标签删除">
                            <span class="sys">还可以添加{{ config.tags_count - form.tags.length }}个标签</span>
                        </div>
                        <div class="tag">
                            <div class="t" v-if="tags.length > 0 && (config.tags_count > form.tags.length)">
                                <h4>推荐标签</h4>
                                <ul class="list">
                                    <li title="点击添加" v-for="tag in tags" @click.prevent="addtag(tag)">
                                        {{ tag }}</li>
                                </ul>
                            </div>
                            <div class="hua" v-if="huas.length > 0 && (config.tags_count > form.tags.length)">
                                <h4>推荐话题</h4>
                                <ul class="hualist">
                                    <li title="点击添加" @click.prevent="addtag(hua)" v-for="hua in huas">{{ hua }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <label for="deatils" class="title" style="align-self: flex-start;">简介</label>
                    <div class="content c5">
                        <textarea id="deatils" :maxlength="config.deatils_size" v-model="form.deatil" cols="30" rows="10"
                            placeholder="输入视频简介"></textarea>
                    </div>
                </li>
                <div class="submit">
                    <button type="submit" @click.prevent="">立即投稿</button>
                </div>
            </ul>
        </div>
    </form>
</template>
<script setup >
// #region  引入组件

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
// #endregion

//#region 需要上传的全部内容 
//

const videos = reactive([])
//上传表单
const form = reactive({
    cover: null,
    title: '',
    type: 'zhuanzai',
    zhuanzai: '',
    ca: '',
    tags: [],
    deatil: '',
})
//配置限制
const config = reactive({
    video_count: 20,
    //单位MB
    videos_size: 20 * 1024,
    title_count: 100,
    tags_count: 7,
    deatils_size: 1000

})
//#endregion
/**
 * 更换视频封面
 * @param {*} e 
 */
const changeimg = (e) => {
    let files = e.target.files
    if (!files?.length) return
    let fr = new FileReader();
    fr.readAsDataURL(files[0])
    fr.onload = (e) => {
        document.querySelector('.videoupload_img').src = e.target.result
        form.cover = files[0]
        console.log(form.cover)
    }

}
//#region 方法
const add = (e) => {
    // console.log('此处需要检查视频是否符合要求')
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // alert(file.name)
        // 对每个文件进行检查
        if (file.name.substring(0, file.name.lastIndexOf('.')).length > 20) {
            // alert("文件名过长 请减短文件名\n"+file.name);
            // break
        }
        //
        videos.push(file)
    }
    uploadStore.uploadstart('video');
}
const videoupload_tags = ref()
const addtag = (val) => {
    val = val.trim()
    if (val == '' || form.tags.includes(val) || form.tags.length >= config.tags_count) return
    form.tags.push(val)
    videoupload_tags.value.value = ''
}
const deltag = (name) => {
    form.tags = form.tags.filter(tag => tag !== name)
}
//计算属性 视频总大小 MB
const videos_size = computed(() => {
    let count = 0
    for (let i = 0; i < videos.length; i++) {
        const file = videos[i]
        count += parseInt(file.size / (1024 * 1024))
    }
    return count
})
//#endregion


// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
// #region 方便测试 给videos添加第一个视频
onMounted(() => {
    videos.push({
        name: '第一个视频.mp4',
        size: '344453333'
    })
    // videos.length=0
    // uploadStore.uploadstart('video');
})
//推荐标签 推荐话题
const reclist = reactive({
    tags: [],
    huas: []
})
const tags = computed(() => {
    return reclist.tags.filter(tag => !form.tags.includes(tag))
})
const huas = computed(() => {
    return reclist.huas.filter(tag => !form.tags.includes(tag))
})
onMounted(() => {
    for (let i = 0; i < mock('@integer(3,15)'); i++) {
        reclist.tags.push(mock('@cword(3,7)'))
    }
    for (let i = 0; i < mock('@integer(3,15)'); i++) {
        reclist.huas.push(mock('@cword(3,7)'))
    }
})
//#endregion
/**
* 添加第一个视频文件
* @param {*} e
*/

//#endregion

</script>
<!-- <style lang="less" scoped  src="@\assets\css\test.less"></style> -->
<style scoped lang="less">
.video_upload {
    /* background-color: #fff; */
    width: 826px;
    height: 266px;
    max-height: 500px;
    margin: 0 auto;
    margin-top: 20px;
    border: 2px dashed #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.video_upload .icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.video_upload .upload {
    height: 40px;
    width: 150px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #0aaee0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.video_upload .upload span {
    color: #fff;
    font-size: 16px;
}

.video_upload .upload input {
    display: none;
}

.video_upload .desc {
    margin-top: 40px;
    /* background-color: aquamarine; */
    display: flex;
    align-items: center;
}

.video_upload .desc li {
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    color: #99a299;
    font-size: 14px;
}

.video_upload .desc li:hover>span {
    color: #0aaee0;
}

.title-block {
    position: absolute;
    padding: 10px 30px;
    white-space: nowrap;
    bottom: 20px;
    right: -50%;
    color: #000;
    background-color: #fcfae0;
}

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

.form .videos {
    max-height: calc(60px * 5);
    overflow: auto;
}

.form .videos li {
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

.text li {
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

.c3 select {
    padding: 5px 10px;
    border-radius: 6px;
    border: 2px solid #e6e7e8;
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
    color: #e6e7e8;
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
    background: rgba(0, 0, 0, 0.3);
    color: #212121;
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

.submit button {
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
