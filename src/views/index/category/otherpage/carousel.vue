<template>
    <el-carousel 
   
    :interval="4000" type="card" height="300px" trigger="click" arrow="always" style="width: 100%;">
        <el-carousel-item 
     
        v-for="(li, item) in list" :key="li.id">
            <router-link :to="li.url == '#' ? '/play/333' : li.url"
                style="display: block;width: 100%;height: 100%;position: relative;">

                <el-image :src="li.img" style="width: 100%;height: 100%;" />
                <span class="msg">
                    {{ li.title }}
                </span>
            </router-link>
        </el-carousel-item>
    </el-carousel>
</template>
<script setup>
// #region  引入组件

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

onMounted(() => {

})

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const list = reactive([

    { id: mock('@id()'), title: mock('@cword(5,20)'), img: require('@/assets/images/category1.webp'), url: '#' },
    { id: mock('@id()'), title: mock('@cword(5,20)'), img: require('@/assets/images/category2.webp'), url: '#' },
    { id: mock('@id()'), title: mock('@cword(5,20)'), img: require('@/assets/images/category3.webp'), url: '#' },
    { id: mock('@id()'), title: mock('@cword(5,20)'), img: require('@/assets/images/category4.webp'), url: '#' },

])


//#endregion

</script>
<style scoped>
.msg {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #fff;
    font-size: 20px;

}
</style>