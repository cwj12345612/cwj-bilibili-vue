<template>
    <div class="moviepage_more">
        <more_hotchart></more_hotchart>
        <more_exclusive></more_exclusive>
        <more_becoming></more_becoming>
        <more_some></more_some>
    </div>
</template>
<script setup>
// #region  引入组件
import more_hotchart from './hotchart.vue'
import more_exclusive from './exclusive.vue'
import more_becoming from './becoming.vue'
import more_some from './some.vue'

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
.moviepage_more {
  position: relative;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    max-width: 1980px;
    min-width: 1020px;
    width: 91vw;
    /* height: auto; */
    /* height: 800px; */
    /* background-color: cornflowerblue; */
    /* 
    :style="pageconfigStore.dynamicWH({normal:1244,max:2014,min:1244})"
    */

}
</style>
