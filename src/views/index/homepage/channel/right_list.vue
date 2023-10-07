<template>
    <ul class="right_list">
        <li v-for="li in list">
            <router-link :to="li.href">
                <i :class="li.icon"></i>
                <span>{{ li.title }}</span>
            </router-link>
        </li>
    </ul>
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
const list = [
    { id: mock('@id()'), title: '专栏', href: "/read", icon: 'colourless shipindaxiao' },
    { id: mock('@id()'), title: '综合热门', href: "/popular/all", icon: 'colourless shoucang' },
    { id: mock('@id()'), title: '每周必看', href: "/popular/weekly", icon: 'colour shijianbiao' },
    { id: mock('@id()'), title: '入站必刷', href: "/popular/history", icon: 'colourless yizhuifan' },
    { id: mock('@id()'), title: '排行榜', href: "/popular/rank", icon: 'colourless paihangbang' },
    { id: mock('@id()'), title: '音乐', href: "/popular/music", icon: 'colourless yinle' },
   
]
//#endregion

</script>
<style scoped>
.right_list {
    flex-grow: 0;
    /* background-color: cornflowerblue; */
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  justify-content: center;
    align-items: center;
    /* 
    :style="pageconfigStore.dynamicWH({normal:240,max:258,min:240},
    {normal:66,max:78,min:66})"
    */
    max-width: 258px;
    min-width: 240px;
    width: 20vw;
    min-height: 66px;
    max-height: 78px;
    height: 10vh;
}

.right_list li {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: crimson; */
}

.right_list li a {
    font-size: 13px;
    color: #61666d;
}

.right_list li:hover a {
    color: #00aeec;
}
</style>
