<template>
    <div class="videocard">

        <a class="img" href="#">
            <img :src="require(`@/assets/images/视${mock({ 'num|1-10': 10 }).num}.webp`)" alt="">
            <div class="videodeatail">
                <div>
                    <span style="margin-right: 20px;">
                        <i class="colourless bofangshu"></i>
                        {{ mock({ 'num|100-5552': 5552 }).num }}
                    </span>
                    <span>
                        <i class="colourless danmushu"></i>
                        {{ mock({ 'num|100-5552': 5552 }).num }}
                    </span>
                </div>
                <span>13:11</span>
            </div>
        </a>

        <router-link class="title" :to="`/play/${mock('@id()')}`">
            {{ mock('@cword(4,60)') }}
        </router-link>
        <a class="info" href="/space">
            <i class="colourless UPzhu"></i>
            <span>{{ mock('@cword(2,7)') }}</span>
            <span>·</span>
            <span>{{ mock('@datetime("yyyy-MM-dd")') }}</span>
        </a>
    </div>
</template>
<script setup>
// #region  引入组件

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
<style scoped lang="less">
@import url('@/assets/css/common.less');

.videocard {
    width: 100%;
    height: 100%;
    /* background-color: tomato; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .title {

        font-size: 15px;
        /* background-color: aqua; */
        width: 100%;
        word-break: break-all;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        &:hover {
            color: @colour;
        }
    }

    .img {
        display: block;
        width: 100%;
        height: 60%;
        border-radius: @maxborderraduis;
        overflow: hidden;
        position: relative;

        .videodeatail {
            color: #ffffff;
            width: 100%;
            // background: @transparency;
            position: absolute;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

        }


    }

    .info {
        width: 100%;
        display: flex;

        align-items: center;

        font-size: 13px;
        color: #9499a0;
        justify-content: flex-start;

        span {
            margin-left: 5px;
        }

        &:hover {
            color: @colour;
        }
    }
}
</style>
