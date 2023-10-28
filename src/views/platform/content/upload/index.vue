<template>
   
        <ul class="header" 
        v-if="uploadStore.status=='no'"
        >
            <li v-for="(li, index) in list.splice(0,1)">
                <router-link :to="li.href">
                    {{ li.title }}</router-link>
            </li>
        </ul>
        <router-view></router-view>
  
 
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由


import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, shallowRef } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useuploadStore } from '@/pinia/uploadstore.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const uploadStore = useuploadStore();
const route = useRoute()
const router = useRouter()

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const list = [
    { title: '视频投稿', href: '/platform/upload/video' },
    { title: '专栏投稿', href: '/platform/upload/text' },
    { title: '音频投稿', href: '/platform/upload/audio' },
    // { title: '视频素材投稿', href: '#' },
    // { title: '贴纸投稿', href: '#' },
]

//#endregion


</script>
<style scoped>
.header {
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* background-color: #fff; */
    border-bottom: 2px solid #e7e7e7;
}

.header li {
    height: 100%;
    display: flex;
    align-items: center;
    /* background-color: #fff; */
    margin-left: 40px;
    font-size: 16px;

}

.header li:has(a.router-link-active) {
    border-bottom: 4px solid #0aaee0;
}

.header li a {

    height: 100%;
    display: flex;
    align-items: center;
    color: #505050;
}

.header li:hover a {
    color: #0aaee0;
}
</style>
