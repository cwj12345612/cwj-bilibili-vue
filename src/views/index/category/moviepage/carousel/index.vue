<template>
    <div class="carousel">
        <ul class="pics">
            <li v-show="index === carousel.index - 1" v-for="(li, index) in list">
                <img :src="li.src" alt="">
            </li>
        </ul>

        <ul class="items">
            <li v-for="(li, index) in list">
                <a :href="li.href" :class="index === carousel.index - 1 ? 'active' : undefined">
                    <div class="title">
                        {{ li.title }}
                    </div>
                    <div class="desc" v-show="index === carousel.index - 1">
                        {{ li.desc }}
                    </div>
                </a>
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
const list = reactive([])
//#endregion
const carousel = reactive({
    index: 1,
    total: 0
})
carousel.total = computed(() => {
    return list.length
})
onMounted(() => {
    const temp = [
        { id: mock('@id()'), src: require("@/assets/images/movie1.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie2.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie3.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie4.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie5.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie6.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie7.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
        { id: mock('@id()'), src: require("@/assets/images/movie8.webp"), title: mock('@cword(3,10)'), desc: mock('@cword(10,100)'), href: '/play' },
    ]
    temp.forEach(li => {
        list.push(li)
    })

})
onMounted(() => {
    ca()
})
//轮播
let Interval = null
const ca = () => {
    clearInterval(Interval)
    Interval = setInterval(() => {
        carousel.index += 1
        if (carousel.index > carousel.total) {
            carousel.index = 1
        }
    }, 3000)
}


</script>
<style scoped>
.carousel {
    width: 100%;
    /* background-color: antiquewhite; */
    position: relative;
    /* 
    :style="pageconfigStore.dynamicWH(undefined, 
    { normal: 360, max: 494, min: 360 })"
    */
    min-height: 360px;
    max-height: 494px;
    height: 50vh;
}

.carousel .pics {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.carousel .pics li {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    flex-grow: 1;
}



.items {
    background: var(--transparency);
    max-height: calc(100% - 64px);

    position: absolute;
    top: 64px;
    right: calc(calc((100% - calc(100% * calc(1244 / 1425)))) / 2);

    /* 
 :style="pageconfigStore.dynamicWH({ normal: 196, max: 256, min: 196 })"
 */
    max-width: 256px;
    min-width: 196px;
    width: 17vw;



    display: grid;
    grid-template-columns: 100%;
    gap: 10px;

}

.items li {
    padding-left: 20px;
}

.items a {
    color: #e6e7e8;
}

.items .title {

    font-size: 14px;

}

.items .desc {

    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}

.items a.active .title {
    font-size: 18px;
}

.items a.active {
    color: #fff;
}
</style>
