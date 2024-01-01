<template>
    <div id="categorypage">
        <categorypage_banner></categorypage_banner>
        <div class="cacontent">
            <categorypage_channel></categorypage_channel>
            <categorypage_navlist></categorypage_navlist>
            <categorypage_carousel></categorypage_carousel>
            <categorypage_hot></categorypage_hot>
           <categorypage_subarea v-for="index in 4"></categorypage_subarea>
        </div>
    </div>
</template>
<script setup>
// #region  引入组件
import categorypage_banner from '@/views/index/homepage/banner'
import categorypage_channel from '@/views/index/homepage//channel'
import categorypage_navlist from './navlist.vue'
import categorypage_carousel from './carousel.vue'
import categorypage_hot from './hot.vue'
import categorypage_subarea from '@/views/index/homepage/more'

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
// #endregion

// #region 第三方库

import axios from '@/utils/axios'

// #endregion

// #region  发送请求 正常情况应该放入onMounted
const bigpic = ref('')
onMounted(() => {
    bigpic.value = require('@/assets/images/header.png')
})

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped lang="less">
#categorypage {
    display: flex;
    flex-direction: column;
    align-items: center;
    // background-color: brown;
    width: 100%;

    // height: 1000px;
    .cacontent {
        max-width: 1980px;
        min-width: 1020px;
        width: 91vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        // background-color: chocolate;
    }
}
</style>
