<template>
    <div class="video_upload" >

        <label class="icon" for="upload">
            <i class="colourless tianjia"></i>
            <span>拖拽到此处也可以上传</span>
        </label>
        <label class="upload" for="upload">
            <span>上传视频</span>
            <input 
            multiple
            type="file" id="upload" class="input" accept=".mp4 , .flv , .mkv" @change="add">
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
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, defineEmits } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const emit=defineEmits(['add'])
// #endregion
const show4 = ref(false)
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const add=(e)=>{
emit('add',e)
}
// #region 第三方库

import axios from '@/utils/axios'

// #endregion

// #region  发送请求 正常情况应该放入onMounted

onMounted(() => {

})

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped  lang="less">
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
</style>
