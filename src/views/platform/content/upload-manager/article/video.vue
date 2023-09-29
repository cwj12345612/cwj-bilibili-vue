<template>
    <div class="video_header">
        <div class="all">
            <ul class="title">
                <span class="active">全部稿件 {{ mock('@integer(10,2000)') }}</span>
                <span>草稿箱</span>
            </ul>
            <ul class="items">
                <li>进行中</li>
                <li>已通过 88</li>
                <li>未通过</li>
            </ul>
        </div>
        <div class="filter">
            <select class="ca">
                <option>全部分区</option>
                <option>游戏</option>
                <option>电视剧</option>
                <option>音乐</option>
            </select>
            <select class="other">
                <option>按投稿时间排序</option>
                <option>按播放次数排序</option>
                <option>按收藏人数排序</option>
                <option>按弹幕条数排序</option>
            </select>
        </div>
    </div>
    <ul class="videos">
        <li v-for="index in 8">
            <div class="img">
                <img src="@\assets\images\视频图片.png" alt="">
            </div>
            <div class="desc">
                <h3>{{ mock('@cword(10,20)') }}</h3>
                <div class="sys">
                    <div class="d">
                        <div class="time">{{ mock('@datetime(yyyy-MM-dd HH:mm:ss)') }}</div>
                        <div class="zimu">当前字幕: 1 (含自动生成)</div>
                    </div>
                    <div class="setting">
                        <button>
                            <i class="colourless tousu"></i>
                            编辑</button>
                        <button>
                            <i class="colourless _ico_backtokb"></i>
                            数据</button>
                        <button>
                            <i class="colourless diandiandianshu"></i>

                        </button>
                    </div>
                </div>
                <div class="other">
                    <span>
                        <i class="colourless bofangshu"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                    <span>
                        <i class="colourless zan"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                    <span>
                        <i class="colourless danmushu"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                    <span>
                        <i class="colourless _ico_reply"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                    <span>
                        <i class="colourless Bbi"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                    <span>
                        <i class="colourless shoucang"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                    <span>
                        <i class="colourless fenxiang"></i>
                        {{ mock('@integer(100,10000)') }}
                    </span>
                </div>
            </div>
        </li>
    </ul>
    <div class="page">
        <page></page>
    </div>
</template>
<script setup>
// #region  引入组件
import page from '@/components/page/index.vue'
//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.video_header {
    padding-left: 40px;
    padding-right: 20px;
    margin-top: 20px;
    height: 50px;
    width: 100%;
    /* background-color: thistle; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.video_header .all {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* background-color: aquamarine; */
}

.video_header .all .title {
    display: flex;
}

.video_header .all .title span {
    margin-right: 20px;
    cursor: pointer;
}

.video_header .all .title span.active {
    color: #0aaee0;
}

.video_header .all .items {
    display: flex;

}

.video_header .all .items li {
    margin-right: 20px;
    color: rgba(80,80,80,.7);
    font-size: 14px;
}

.video_header .filter {
    align-self: flex-start;
    /* background-color: cornflowerblue; */
    display: flex;
}

.video_header .filter select {
    padding: 5px 10px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #e6e7e8;
}

.videos {
    margin-top: 20px;
    padding-left: 40px;
    padding-right: 20px;

}

.videos li {
    margin-bottom: 30px;
    height: 120px;
    width: 100%;
    /* background-color: aqua; */
    display: flex;
}

.videos li .img {
    flex-shrink: 0;
    position: relative;
    height: 85%;
    width: 20%;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 20px;
}

.videos li .desc {
    flex-grow: 1;
    height: 100%;
    width: 100%;
    /* background-color: gold; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.videos li .desc h3 {
    font-weight: normal;
    font-size: 20px;
}

.videos li .desc .sys {
    font-size: 16px;
    color: #505050;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* background-color: blueviolet; */
}

.videos li .desc .sys .d {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.videos li .desc .sys button {
    margin-left: 10px;
    padding: 10px 18px;
    border: 1px solid #e6e7e8;
    border-radius: 4px;
    background-color: #fff;
}
.videos li .desc .other{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.videos li .desc .other span{
    color: #99a299;
    margin-right: 15px;
}
.page{
    display: flex;
    justify-content: center;
}
</style>
