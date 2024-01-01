<template>
    <div class="nav" :class="pageconfigStore.scroll > (192 + 64) ? 'scroll' : undefined"
      >
        <ul class="navlist">
            <li v-for="(li, index) in icons">
                <router-link :to="li.href">
                    <i v-if="li.icon" :style="li.style" :class="li.icon"></i>
                    <span>{{ li.title }}</span>
                </router-link>
            </li>
        </ul>
        <div class="search">
            <input type="search" placeholder="搜索视频动态">
            <button class="btn">
                <i class="colourless faxianweixuanzhongxuanzhong"></i>
            </button>
        </div>
        <ul class="rightlist ">
            <li v-for="(li, index) in rightlist">
                <h4>{{ li.title }}</h4>
                <span>{{ li.count }}</span>
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
const icons = [
    { icon: 'colourless shouyeweixuanzhong', title: '首页', style: `color: ${mock('@color()')};`, href: '/space/home' },
    { icon: 'colourless dongtaiweixuanzhong', title: '动态', style: `color: ${mock('@color()')};`, href: '/space/dynamic' },
    { icon: 'colourless chuangzuozhongxin', title: '投稿', style: `color: ${mock('@color()')};`, href: '/space/contribute' },
    { icon: 'colourless shoucangjia', title: '合集和列表', style: `color: ${mock('@color()')};`, href: '/space/compilations' },
    { icon: 'colourless shoucang', title: '收藏', style: `color: ${mock('@color()')};`, href: '/space/favlist' },
    { icon: 'colourless zhuifanshu', title: '订阅', style: `color: ${mock('@color()')};`, href: '/space/subscription' },
    { icon: 'colourless shezhi', title: '设置', style: `color: ${mock('@color()')};`, href: '/space/setting' },

]
const rightlist = [
    { title: Mock.mock('@cword(3,6)'), count: mock('@integer(100,9999)') },
    { title: Mock.mock('@cword(3,6)'), count: mock('@integer(100,9999)') },
    { title: Mock.mock('@cword(3,6)'), count: mock('@integer(100,9999)') },
    { title: Mock.mock('@cword(3,6)'), count: mock('@integer(100,9999)') },
    { title: Mock.mock('@cword(3,6)'), count: mock('@integer(100,9999)') },
    // { title: Mock.mock('@cword(3,6)'), count: mock('@integer(100,9999)') },
]
//#endregion

</script>
<style scoped>
.nav {
    max-width: 1283px;
min-width: 1101px;
max-width: 90vw;
    background-color: #fff;
    width: 100%;
    padding: 0 20px;
    height: 66px;
    border: 1px solid #e6e7e8;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav.scroll {
    position: fixed;
    top: 0;
    z-index: 10086;
}

.navlist {
    /* background-color: cadetblue; */
    display: flex;
    align-items: center;
    height: 100%;

}

.navlist li {
    margin-right: 30px;
    height: 100%;
    display: flex;
    align-items: center;
}

.navlist li span {
    font-size: 13px;
    color: #18191c;
}

.navlist li:has(>a.router-link-active) {
    border-bottom: 3px solid #0aaeec;
}

.search {
    overflow: hidden;
    width: 134px;
    height: 30px;
    border: 1px solid #0aaeec;
    border-radius: 15px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #e6e7e8;
}

.search input {
    height: 100%;
    width: 80%;

}

.search .btn {
    height: 100%;
    width: 20%;
    border: none;
    background: none;
}

.search .btn:hover {
    color: #0aaeec;
}

.rightlist {
    height: 100%;
    /* background-color: bisque; */
    display: flex;
    align-items: center;
}

.rightlist li {
    cursor: pointer;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 10px;
}

.rightlist li:hover>* {
    color: #0aaeec;
}

.rightlist li h4 {
    color: #99a2aa;
    font-size: 12px;
}

.rightlist li span {
    font-size: 12px;
    color: #222;
}</style>
