<template>
    <div class="all">
        <div class="header">
            <p>

                全站音乐

            </p>
        </div>
        <ul class="content">
            <li v-for="index in mock('@integer(50,100)')">
                <div class="img">
                    <a href="/play">
                        <img src="@\assets\images\初夏之星.png" alt="">
                    </a>
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

//#endregion

</script>
<style scoped>
.all {
    /* background-color: aqua; */
    width: 90vw;

    min-width: 1070px;
    max-width: 1280px;

}

.all .header {
    /* background-color: antiquewhite; */
    margin-top: 10px;
    margin-bottom: 15px;

}

.all .content {
    width: 100%;

    /* height: 1000px; */
    /* background-color: cadetblue; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    /* gap: 20px; */
    grid-column-gap: 20px;
    grid-row-gap: 30px;
}

.all .content li {
    height: 150px;
    /* background-color: chocolate; */
    display: flex;

}

.all .content li .img {
    height: 100%;
    aspect-ratio: 16/9;
    margin-right: 15px;
}

.all .content li .sys {
    /* background-color: gold; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.all .content li .sys h4 a {
    color: #212121;
    font-weight: normal;
    font-size: 14px;
}

.all .content li .sys .desc .up a {
    font-size: 14px;
    color: #99a299;
}

.all .content li .sys .desc .other {
    margin-top: 10px;
    font-size: 12px;
    color: #99a299;
}

.all .content li .sys .desc .other span {
    margin-right: 30px;
}

.all .content li .sys h4 a:hover,
.all .content li .sys .desc .up a:hover {
    color: #0aaee0;
}
</style>
