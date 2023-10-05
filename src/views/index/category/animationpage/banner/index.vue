<template>
    <div class="banner">
        <div class="b">
            <ul class="img">

                <a v-for="(li, index) in list" v-show="index == carousel.index - 1" href="#">
                    <img :src="li.src" alt="">
                </a>
            </ul>
        </div>

        <ul v-if="true" class="cards">
            <li v-for="(li, index) in list">
                <div class="card" :class="index == carousel.index - 1 ? 'checked' : undefined">
                    <a class="card_img" href="/play">
                        <img :src="li.src" alt="">
                        <div class="title">
                            {{ mock('@cword(4,30)') }}
                        </div>
                    </a>
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
const list = reactive([])
//#endregion
const carousel = reactive(
    {
        index: 1,
        total: 0
    }
)
carousel.total = computed(() => {
    return list.length
})
onMounted(() => {
    const temp = [
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a1.webp') },
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a2.webp') },
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a3.webp') },
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a4.webp') },
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a5.webp') },
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a6.webp') },
        { id: mock('@id()'), title: mock('@cword(3.20)'), href: '/play', src: require('@/assets/images/a7.webp') },
    ]
    temp.forEach(li => {
        list.push(li)
    })
    //   console.log(list)
})
onMounted(() => {
    ca()
})
//轮播函数
let Interval = null
const ca = () => {
    // console.log('轮播')
    clearInterval(Interval)
    Interval = setInterval(() => {
        // console.log(carousel.index)
        carousel.index += 1
        if (carousel.index > carousel.total) {
            carousel.index = 1
        }
    }, 3000);
}
</script>
<style scoped>
.banner {
    width: 100%;
    height: 90%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: aqua; */
    min-height: 440px;
    max-height: 850px;
    height: 30vh;
}

.b {
    width: 100%;
    height: 90%;
    background-color: gold;
    position: relative;

}

.banner .img {
    position: absolute;

    width: 100%;
    height: 100%;
    overflow: hidden;
}

.cards {
    /* 
:style="pageconfigStore
.dynamicWH({ normal: 1297, max: 1780, min: 1020 })"
*/

    min-width: 1020px;
    max-width: 1780px;
    width: 90vw;
    /* background-color: olivedrab; */
    position: absolute;
    height: 20%;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-column-gap: 20px;
    grid-template-rows: 100%;
}

.card {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: var(--border-radius-max);
    position: relative;
    display: block;

}

.card.checked {
    transform: scale(1.1);
    border: 2px solid #0aaee0;
}

.card .card_img {

    width: 100%;
    height: 100%;

}

.card .title {
    width: 100%;
    position: absolute;
    color: #fff;
    bottom: 10px;
    left: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>
