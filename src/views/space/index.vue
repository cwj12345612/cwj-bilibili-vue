<template>
    <div id="spacepage" :style="pageconfigStore.dynamicWH({ normal: 1283, max: 1283, min: 1101 })">
        <spacepage_top></spacepage_top>
        <div class="content">
            <!-- <spacepage_home></spacepage_home> -->
            <!-- <spacepage_video></spacepage_video> -->
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
// #region  引入组件
import spacepage_top from './top'


//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion
import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }


// #region  模拟数据 mockjs

//#endregion

</script>
<style scoped>
#spacepage {


    /* height: 1000px; */
    /* background-color: orange; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
.content{
    margin-top: 10px;
    width: 100%;
    /* background-color: aqua; */
    /* height: 700px; */
    border-radius: 8px;
}
</style>
