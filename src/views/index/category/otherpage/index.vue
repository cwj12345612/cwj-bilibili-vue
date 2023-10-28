<template>
    <categorypage_banner></categorypage_banner>
    <div style="min-width: 1980px;min-width: 1020px;width: 91vw;">
        <categorypage_channel></categorypage_channel>
<categorypage_navlist></categorypage_navlist>
<categorypage_carousel></categorypage_carousel>
    </div>
</template>
<script setup>
// #region  引入组件
import categorypage_banner from '@/views/index/homepage/banner'
import categorypage_channel from '@/views/index/homepage//channel'
import categorypage_navlist from  './navlist.vue'
import categorypage_carousel from  './carousel.vue'

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
<style scoped>
.categorypage {
    max-width: 1980px;
    min-width: 1020px;
    width: 91vw;
}
</style>
