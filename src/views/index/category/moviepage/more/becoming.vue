<template>
    <div class="becoming" 
    >
        <div class="top">
            <h3>即将上线</h3>
           
        </div>

        <ul class="items">
            <li 
            v-for="index in 7"
           >
        <div class="img">
            <a href="/play"><img :src="require(`@/assets/images/ml${mock('@integer(1,5)')}.webp`)" alt=""></a>
        </div>
        <div class="title">
           <a href="/play">
            {{ mock('@ctitle(5,8)') }}
           </a>
        </div>
        <div class="becommingtime">
            {{ mock('@datetime("yyyy-MM-dd HH:mm")') }}
        </div>
        </li>
        </ul>
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

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.becoming {
    margin-top: 30px;
    flex-shrink: 0;
    flex-shrink: 0;
    flex-grow: 1; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* background-color: orangered; */
    /* 
    :style="pageconfigStore.dynamicWH(undefined,
     { normal: 345, min: 345, max: 493 })"
    */
    /* min-height: 293px;
    max-height: 345px;
  height: 345px; */
}

.top {
    margin-bottom: 16px;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top h3 {
    font-size: 30px;
    color: #ffffff;
}

.items{
    /* background-color: blueviolet; */
    width: 100%;
    flex-grow: 1;
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: 100%;
}
.items li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
overflow: hidden;
}
.items li .img{
    overflow: hidden;
    border-radius: var(--border-radius-max);
    width: 100%;
    height: 75%;
}
li .title a{
    color: #e1e1e1;
    font-size: 14px;
}
li:hover .title a{
    color: #0aaeec;
}
li .becommingtime{
    width: 100%;
    color: #727272;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

}
</style>
