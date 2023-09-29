<template>
    <div class="video_upload" v-if="!uploadStore.ing">

        <label class="icon" for="upload">
            <i class="colourless tianjia"></i>
            <span>拖拽到此处也可以上传</span>
        </label>
        <label class="upload" for="upload">
            <span>上传视频</span>
            <input type="file" id="upload" class="input" accept=".mp4 , .flv , .mkv" @change="change">
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
                    <span>请事先检查视频是否可以正常播放，请不要上传已损坏的视频或者冒充视频格式的其他类型文件 (如图片格式修改为MP4格式)</span>
                    <br>
                    <span>一经发现则封号处理</span>
                </div>
            </li>
        </ul>
    </div>
    <form v-if="uploadStore.ing">

        <div class="header">
            <h3>3个视频 共4GB</h3>
            <label class="add" for="add">添加视频</label>
            <input id="add" type="file" style="display: none;">

        </div>
        <div class="form">
            <ul class="videos">
                <li
                v-for="index in 10"
                >
                   <div class="icon">
                    <i class="colourless bofangshu"></i>
                   </div>
                   <div class="desc">
                    <div class="title">
                        <h4 >
                            {{ mock('@word(10,30)') }}
                        </h4>
                        <div class="setting">
                            <span style="margin-right: 20px;">0%</span>
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
                <div class="title" style="background-color: chocolate;">标题</div>
                <div class="content c1" style="background-color: cornflowerblue;">
                <input type="text" placeholder="请输入标题">
                <span >8/100</span>
                </div>
             </li>
             <li>
                <div class="title" style="background-color: chocolate;">类型</div>
                <div class="content c2" style="background-color: cornflowerblue;">
             <div>
                <input type="radio" name="type"><span>自制</span>
             </div>
             <div >
                <input type="radio" name="type"><span>转载</span>
                <input type="text" placeholder="装载请注明出处">
             </div>
                </div>
             </li>
            </ul>
        </div>
    </form>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, defineEmits, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useuploadStore } from '@/pinia/uploadstore.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const uploadStore = useuploadStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const change = () => {
    uploadStore.uploading('video');
}
const submit = () => {

    uploadStore.uploadend();
}
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)

//#endregion

</script>
<style scoped>
.video_upload {

    background-color: #fff;
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
    background-color: bisque;
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
}

form .header .add {
    color: #fff;
    cursor: pointer;
    background-color: #0aaee0;
    padding: 3px 5px;
    border-radius: 6px;
}

.form {
    height: 100%;
    width: 100%;
    padding-left: 50px;
    background-color: cadetblue;
}
.form .videos{
    max-height: calc(60px * 3);
    overflow: auto;
}
.form .videos li{
display: flex;
width: 100%;
background-color: darkgoldenrod;
height: 60px;
align-items: center;
justify-content: flex-start;
}
.videos li .icon{
    margin-right: 20px;
}
.videos li .icon i{
    color: #0aaee0;
    font-size: 50px;
}
.videos li .desc{
padding-top: 5px;
padding-bottom: 10px;
padding-right: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
}
.videos li .desc .title{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
.videos li .desc .title h4{
    font-weight: normal;
    font-size: 20px;
}
.setting i{
    margin-left: 10px;
    font-size: 20px;
    background-color: #e6e7e8;
    cursor: pointer;
}
.jindu{
   width: 100%;
   border: 2px solid #e6e7e8;
 
}
.text{
    margin-top: 20px;
    width: 100%;
    /* height: 6000px; */
    height: 600px;
    background-color: blueviolet;
}
.text li{
    margin-bottom: 10px;
    display: grid;
    width: 100%;
    grid-template-columns: 200px  1fr;
    justify-content: flex-start;
align-items: center;
}
.text li .title{
    font-size: 20px;
    font-weight: normal;
}

.text li .c1{
height: 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;
}
.c1 input{
height: 80%;
width: 90%;
/* background: none; */
}

.c2>div{
    display: inline-block;
margin-right: 20px;
font-size: 20px;

}
.c2>div input[type='text']{
    margin-left: 10px;
    height: 100%;
}
</style>
