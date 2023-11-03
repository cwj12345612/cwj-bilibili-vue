<template>
    <div class="channel_type">
        <div class="header">
            <h4>游戏</h4>
            <span>{{ mock('@integer(200,2000)') }}</span>
        </div>
        <channelcard
        v-for="index in parseInt(mock('@integer(5,20)'))"
        style="margin-bottom: 40px;"
        ></channelcard>
    </div>
</template>
<script setup>
// #region  引入组件
import channelcard from './channelcard/channelcard.vue'
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
onMounted(() => {
    console.log('频道' + route.params.id)
})
//#endregion

</script>
<style scoped lang="less">
.channel_type {
    min-width: 890px;
    max-width: 1286px;
    width: 75vw;
    // height: 1000px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: rgb(244, 244, 244);

    .header {
        margin-bottom: 30px;
        display: flex;
        align-items: baseline;

        h4 {
            font-weight: normal;
            font-size: 18px;

        }

        span {
            font-size: 12px;
            color: #99a299;
            margin-left: 10px;
        }
    }
}</style>
