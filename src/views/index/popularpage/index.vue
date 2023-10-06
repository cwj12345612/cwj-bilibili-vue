<template>
    <div class="popular">
        <div ref="popular_img" class="img">
            <img src="@/assets/images/header.png" alt="">
            <a class="logo" href="/">
                <i class="colourless bilibili"></i>
            </a>
        </div>
        <ul :class="ca" class="navlist">
            <li v-for="(li, index) in list">
                <router-link :to="li.href">
                    <i :class="li.icon" style="font-size: 20px;"></i>
                    <h4> {{ li.title }}</h4>
                </router-link>
            </li>

        </ul>

        <!-- <popular_all></popular_all> -->
        <!-- <popular_rank></popular_rank> -->
        <router-view></router-view>
    </div>
</template>
<script setup>
// #region  引入组件
import popular_all from './all.vue'
import popular_rank from './rank.vue'

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
const popular_img = ref()

// #endregion
const ca = computed(() => {
    const banner = popular_img.value
    const height = banner ? banner.offsetHeight : 0

    return {
        scroll: pageconfigStore.scroll > height
    }
})
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const list = reactive([
    { id: mock('@id()'), title: '综合热门', href: "/popular/all", icon: 'colourless shoucang' },
    { id: mock('@id()'), title: '每周必看', href: "/popular/weekly", icon: 'colour shijianbiao' },
    { id: mock('@id()'), title: '入站必刷', href: "/popular/history", icon: 'colourless yizhuifan' },
    { id: mock('@id()'), title: '排行榜', href: "/popular/rank", icon: 'colourless paihangbang' },
    { id: mock('@id()'), title: '全站音乐榜', href: "/popular/music", icon: 'colourless yinle' },
])
//#endregion

</script>
<style scoped>
.popular {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* height: 1000px; */
    width: 100%;
    /* background-color: orange; */
}

.popular>.img {
    width: 100%;
    position: relative;
    max-height: 240px;
    min-height: 155px;
    height: 20vh;
}

.popular>.img .logo {
    max-height: 120px;
    min-height: 77.5px;
    height: 10vh;
    display: block;
    position: absolute;
    bottom: 0;
    width: 180px;
    left: 100px;

}

.popular>.img .logo i {
    font-size: 50px;
    color: #ffffff;
}

.navlist {
    /* background-color: palevioletred; */
    width: 90vw;
background-color: #ffffff;
    min-width: 1070px;
    max-width: 1280px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #99a299;
}

.navlist li {
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 30px;
}

.navlist li a {
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}

.navlist li a h4 {
    font-size: 20px;
    color: #212121;
    font-weight: normal;
}

.navlist li a:hover>* {
    color: #0aaee0;
}

.navlist li a.router-link-active {
    border-bottom: 2px solid #0aaee0;

}

.navlist li a.router-link-active>* {
    color: #0aaee0;
}

.navlist.scroll {
    z-index: 10086;
    position: fixed;

}
</style>
