<template>
    <div class="carousel">

        <ul class="imgs">
            <el-carousel arrow="never" ref="homepage_carousel" style="width: 100%;height: 100%;" @change="change"
                indicator-position="none">
                <el-carousel-item :name="li.id" v-for="li in list" :key="li.id">
                    <router-link :to="li.url">
                        <el-image style="width: 100%;height: 100%;" :src="li.src"></el-image>
                    </router-link>
                </el-carousel-item>
            </el-carousel>
        </ul>
        <div class="bottom">
            <div class="top">
                <h3>
                    <a href="#">
                        {{ mock('@cword(10)') }}
                    </a>
                </h3>
                <div class="button">
                    <button @click="prevnext(false)">
                        <i class="colourless fanhui"></i>
                    </button>
                    <button @click="prevnext(true)">
                        <i class="colourless gengduo"></i>
                    </button>
                </div>
            </div>
            <ol class="indicator">
                <li v-for="(li, index) in list" @click="skip(li.id)" :class="index == nowindex ? 'checked' : undefined">
                </li>
            </ol>
        </div>
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
//#endregion
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#region

const list = reactive([])



//获取轮播图
onMounted(() => {
    const ls = [
        { id: mock('@id()'), title: mock('@cword(4,20)'), src: require('@/assets/images/1.webp'), url: '#' },
        { id: mock('@id()'), title: mock('@cword(4,20)'), src: require('@/assets/images/2.webp'), url: '#' },
        { id: mock('@id()'), title: mock('@cword(4,20)'), src: require('@/assets/images/3.webp'), url: '#' },
        { id: mock('@id()'), title: mock('@cword(4,20)'), src: require('@/assets/images/4.webp'), url: '#' },
        { id: mock('@id()'), title: mock('@cword(4,20)'), src: require('@/assets/images/5.webp'), url: '#' },
        { id: mock('@id()'), title: mock('@cword(4,20)'), src: require('@/assets/images/6.webp'), url: '#' },
        // { id: mock('@id()'), src: require('@/assets/images/7.webp') },
        // { id: mock('@id()'), src: require('@/assets/images/8.webp') },
        // { id: mock('@id()'), src: require('@/assets/images/9.webp') },
    ]

    ls.forEach(li => {
        list.push(li)
    })
})
const nowindex = ref(0)
const change = (nl) => {
    nowindex.value = nl
}
const homepage_carousel = ref()
const prevnext = (b) => {
    if (b) {
        homepage_carousel.value.next()
    } else {
        homepage_carousel.value.prev()
    }
}
const skip = (id) => {
    homepage_carousel.value.setActiveItem(id)
}
// #endregion


</script>
<style scoped>
.carousel {
    grid-column: span 2;
    grid-row: span 2;
    width: 100%;
    border-radius: var(--border-radius-max);
    /* overflow: hidden; */
    height: calc(calc(calc(100% - 20px) / 2) * 1.6 + 20px);
    /* background: var(--transparency); */
    /* height: calc(60%); */
    position: relative;
    overflow: hidden;
}

.carousel .imgs {

    /* width: 1000%; */
    /* width: auto; */
    width: 100%;
    height: 80%;
    position: absolute;


}


.bottom {

    position: absolute;
    bottom: 0;
    height: 20%;
    width: 100%;
    /* background: var(--transparency); */
    background: rgba(0, 0, 0, 0.2);
    padding: 5px 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.bottom .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom .top h3 a {
    color: #fff;
    font-size: 18px;
}

.bottom .top button {
    background-color: var(--transparency);
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 6px;
    margin: 0 5px;
}

.indicator {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.indicator li {
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 4px;
    background-color: var(--transparency);
}

.indicator li.checked {
    transform: scale(1.5);
    background-color: #fff;
}
</style>
