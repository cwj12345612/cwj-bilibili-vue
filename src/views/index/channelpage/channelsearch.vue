<template>
    <div class="search">
        <div class="head">
            <h4>搜索结果</h4>
            <span>{{count}}</span>
        </div>
<ul 
v-if="count>0"
>
    <channelcard

v-for="index in 6"
style="margin-bottom: 30px;"
></channelcard>
</ul>
<h4
v-if="count==0"
>
{{ `不存在“${route.query.text}”频道`}}
</h4>
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
const count=ref(10)
const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped lang="less">
.search {
  
    margin: 0 auto;

    min-width: 890px;
    max-width: 1286px;
    width: 70vw;
    .head{
        margin-top: 30px;
        margin-bottom: 40px;
        display: flex;
        align-items: baseline;
        h4{
            font-weight: normal;
            font-size: 18px;

        }
        span{
            margin-left: 30px;
            color: #99a299;
            font-size: 13px;
        }
    }
}
</style>
