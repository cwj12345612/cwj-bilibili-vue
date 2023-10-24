<template>
    <div class="homepage_banner">
        <img :src="bigpic" alt="">
        <a class="logo" href="/">
            <i class="colourless bilibili"></i>
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

// #region 第三方库
import axios from '@/utils/axios'
// #endregion

// #region  模拟数据 mockjs

//#endregion


// #region  发送请求 正常情况应该放入onMounted
const bigpic = ref('')
onMounted(() => {
    bigpic.value=require('@/assets/images/header.png')
    // axios.get('api/bigpic').then(req => {
    //     // console.log(req)
    //     bigpic.value=req.data
    // }).catch(e => {
    //     // console.log('获取首页图片错误');
    //     bigpic.value=require('@/assets/images/header.png')
    // })
})

// #endgion

</script>
<style scoped>
.homepage_banner {
    width: 100%;
    position: relative;
    /* background-color: cadetblue; */
    max-height: 240px;
    min-height: 155px;
    height: 20vh;
}

.homepage_banner .logo {
    max-height: 120px;
    min-height: 77.5px;
    height: 10vh;
    display: block;
    position: absolute;
    bottom: 0;
    width: 180px;
    left: 100px;

}

.homepage_banner .logo i {
    font-size: 50px;
    color: #ffffff;
}
</style>
