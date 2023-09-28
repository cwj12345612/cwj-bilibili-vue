<template>
    <div class="carousel" 
    >
        <ul class="pics">
            <li v-for="index in 1"> <img :src="list[index - 1].src" alt=""></li>
        </ul>
    
            <ul class="items" 
            
            >

                <li v-for="index in 10" 
                :class="(index === 5) ? 'checked' : undefined">
                    <a href="#">
                        <div class="title">
                            {{ mock('@cword(3,8)') }}
                        </div>
                        <div class="desc">
                            {{ mock('@cword(100)') }}
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
const list = [
    { id: mock('@id()'), src: require("@/assets/images/movie1.webp") },
    { id: mock('@id()'), src: require("@/assets/images/movie2.webp") },
    { id: mock('@id()'), src: require("@/assets/images/movie3.webp") },
    { id: mock('@id()'), src: require("@/assets/images/movie4.webp") },
]
//#endregion

</script>
<style scoped>
.carousel {
    width: 100%;
    background-color: antiquewhite;
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

}

.carousel .pics li {
    width: 100%;
    height: 100%;
    flex-shrink: 0;

}



.items {
    background: var(--transparency);
    height: calc(100% - 64px);
    display: grid;
    grid-template-rows: repeat(6, auto);
    position: absolute;
    top: 64px;
 right: calc(calc((100% - calc(100% * calc(1244 / 1425)) )) / 2);

 /* 
 :style="pageconfigStore.dynamicWH({ normal: 196, max: 256, min: 196 })"
 */
 max-width: 256px;
 min-width:196px ;
 width: 17vw;
}

.items li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #ffffff;
    font-size: 14px;
    padding: 0 12px;
    overflow: hidden;
}

.items li a {
    color: #ffffff;
}

.items .desc {
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: none;
}

.items li.checked a .title {
    font-size: 18px;
}

.items li.checked a .desc {
    
    display: block;
}
</style>
