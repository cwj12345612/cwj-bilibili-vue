<template>
    <div class="home">
       <readpage_home_navlist></readpage_home_navlist>
        <readpage_home_content></readpage_home_content>
        <readpage_home_rank></readpage_home_rank>
    </div>
</template>
<script setup>
// #region  引入组件
import readpage_home_navlist from './navlist.vue'
import readpage_home_content from './content.vue'
import readpage_home_rank from './rank.vue'
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
const submit=(ca)=>{

}
</script>
<style scoped>
.home {
 margin-top: 20px;
    /* height: 680px; */
    background-color: aqua;
    max-width: 1980px;
    min-width: 1020px;
    width: 91vw;
    display: flex;
    justify-content: space-between;
}

.content{
    height: 600px;
    overflow: auto;
    background-color: palevioletred;
    width: 60%;
}
</style>
