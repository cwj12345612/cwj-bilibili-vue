<template>
    <div id="platform" :style="pageconfigStore.dynamicWH({ normal: 1377 + 24 * 2, max: 2512 + 24 * 2, min: 1012 + 24 * 2 })">
        <div class="header">
            <div class="left">
                <h3>
                    <i class="colourless bilibili"></i>
                    创作中心
                </h3>
                <div class="index">
                    <a href="/" target="_blank">
                        <i class="colourless shouye"></i>
                        主站
                    </a>
                </div>
            </div>
        </div>
        <div class="body"      
        >
           <platform_navlist></platform_navlist>
           <platform_content></platform_content>
        </div>
    </div>
</template>
<script setup>
// #region  引入组件
import platform_navlist from './nav'
import platform_content from './content'

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
#platform {
    flex-grow: 0;
    display: flex;
    /* height: 100vh; */
    max-height: 100vh;
    background-color: orange;
flex-direction: column;
}

.header {
    position: fixed;
    top: 0;
    flex-shrink: 0;
    background-color: #fff;
    height: 64px;
    width: 100%;
    /* background-color: cadetblue; */
    padding-left: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.header .left {
    color: #0aaee0;
    display: flex;
    align-items: center;
    height: 100%;
}

.header .left .index {
    cursor: pointer;

    margin-left: 20px;
    color: #99a299;
}

.body {
    margin-top: 64px;
    flex-grow: 0;
    flex-shrink: 1;
    /* height: 100%; */
    background-color: cornflowerblue;
width: 100%;
    display: flex;
    padding-right: 100px;
}
</style>
