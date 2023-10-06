<template>
    <!-- 排行榜 -->
    <div class="rank">

        <ul class="header">
            <li v-for="(li, index) in navlist">
                <router-link :class="index == 3 ? 'active' : undefined" :to="li.href">
                    {{ li.title }}
                </router-link>
            </li>
        </ul>
        <div class="msg">
            <i class="colourless xiazaishibai"></i>
            <p>

                排行榜根据稿件内容质量，近期的数据综合展示，动态更新

            </p>
        </div>
        <ul class="content">
            <li v-for="index in 9">
                <div class="img">
                    <a href="/play">
                        <img src="@\assets\images\初夏之星.png" alt="">
                    </a>
                    <span class="ranking"
                        :style="`background-color: ${index <= 3 ? mock('@color()') : 'rgb(123, 133, 154)'} ;`">{{ index
                        }}</span>
                </div>
                <div class="sys">
                    <h4>
                        <a href="/play">
                            {{ mock('@cword(5,100)') }}
                        </a>
                    </h4>
                    <div class="desc">
                        <span class="up">
                            <a href="/space">
                                <i class="colourless UPzhu"></i>
                                {{ mock('@cword(4,10)') }}
                            </a>
                        </span>
                        <div class="other">
                            <span>
                                <i class="colourless bofangshu"></i>
                                {{ mock("@integer(1000,10000)") }}
                            </span>
                            <span>
                                <i class="colourless danmushu"></i>
                                {{ mock("@integer(1000,10000)") }}
                            </span>
                        </div>
                    </div>
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
const navlist = reactive(
    [
    ]
)
onMounted(() => {

    const temp = [
        { id: mock('@id()'), title: '全站', href: '/popular/rank/all' },
        { id: mock('@id()'), title: '电影', href: '/popular/rank/movie' },
        { id: mock('@id()'), title: '游戏', href: '/popular/rank/game' },
        { id: mock('@id()'), title: '电视剧', href: '/popular/rank/tv' },
        { id: mock('@id()'), title: '动漫', href: '/popular/rank/anime' },
        { id: mock('@id()'), title: '纪录片', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '音乐', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '舞蹈', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '科技', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '运动', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '鬼畜', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '娱乐', href: '/popular/rank/other' },
        { id: mock('@id()'), title: '汽车', href: '/popular/rank/other' },
    ]
    temp.forEach(li => {
        navlist.push(li)
    })
})
//#endregion
watch(() => route.params, () => {
    //    navlist.length=0;

}, { immediate: false })
</script>
<style scoped>
.rank {
    /* background-color: aqua; */
    width: 90vw;
    /* height: 500px; */
    min-width: 1070px;
    max-width: 1280px;
}

.rank .header {
    /* background-color: antiquewhite; */
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;

}

.rank .header li {
    font-size: 14%;
    color: #212121;
    display: block;
    padding: 4px 10px;
    /* padding-bottom: 10px; */
    margin-bottom: 5px;
    margin-right: 10px;
}

.rank .header li a {
    font-size: 14px;
    color: #212121;
}

.rank .header li a:hover:not(.router-link-active) {
    color: #0aaee0;
}

.rank .header li:has(>a.router-link-active) {
    background-color: #0aaee0;
    border-radius: 8px;
}

.rank .header li>a.router-link-active {
    color: #fff;
}

.rank .msg {
    font-size: 13px;
    color: #505050;
    display: flex;
    align-items: center;
}

.content {
    margin-top: 20px;
    /* background-color: orangered; */
    width: 100%;
    /* height: 600px; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

}

.content li {
    /* background-color: goldenrod; */
    height: 150px;

}


.content li {
    height: 150px;
    /* background-color: chocolate; */
    display: flex;

}

.content li .img {
    height: 100%;
    aspect-ratio: 16/9;
    margin-right: 15px;
    position: relative;
}

.content li .img .ranking {
    position: absolute;

    top: 0;
    left: 0;
    padding: 5px 10px;
    border-bottom-right-radius: 8px;
    font-size: 20px;
    color: #fff;
}

.content li .sys {
    /* background-color: gold; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.content li .sys h4 a {
    color: #212121;
    font-weight: normal;
    font-size: 14px;
}

.content li .sys .desc .up a {
    font-size: 14px;
    color: #99a299;
}

.content li .sys .desc .other {
    margin-top: 10px;
    font-size: 12px;
    color: #99a299;
}

.content li .sys .desc .other span {
    margin-right: 30px;
}

.content li .sys h4 a:hover,
.content li .sys .desc .up a:hover {
    color: #0aaee0;
}
</style>
