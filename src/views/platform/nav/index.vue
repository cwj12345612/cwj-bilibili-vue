<template>
    <ul class="navlist">
        <li class="up">
            <button>
                <i class="colourless tianjia"></i>
                <span>投稿</span>
            </button>
        </li>
        <li @click.prevent="isshow = !isshow" v-for="index in 20" class="item" :class="index === 1 ? 'active' : undefined"
            :style="`background-color:${mock('@color()')} ;`">
            <div class="header">
                <i class="colourless shouyeweixuanzhong"></i>
                <span class="title">内容管理</span>
                <i class="colourless xialaxiao"></i>
            </div>
            <ul class="children" 
            :class="isshow ? 'show' : undefined" 
            v-if="true">
                <li v-for="index in 4" :style="`background-color:${mock('@color()')} ;`">
                    {{ mock('@cword(2,6)') }}
                </li>
            </ul>
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
const isshow = ref(false)

//#endregion

</script>
<style scoped>
.navlist {
   
    flex-shrink: 0;
    flex-grow: 0;
    /* height: 100%; */
    max-height: 100vh;
    background-color: greenyellow;
    width: 200px;
    overflow: auto;

}

.navlist>li {
    width: 100%;
    background-clip: content-box;
    width: 100%;
    width: 180px;
    padding-left: 30px;
    /* padding-right: 24px; */
}

.navlist .up {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navlist .up button {
    width: 100%;
    height: 80%;
    background-color: #0aaee0;
    color: #fff;
    border: none;
    border-radius: 3px;
}

.navlist .item {
    transition: all 0.4s;
    cursor: pointer;
}

.navlist .item .header:hover {
    color: #0aaee0;
}

.navlist .item .header {
    width: 100%;
    height: 50px;
    background-color: cadetblue;
    display: grid;
    grid-template-columns: 30px 1fr 30px;
    grid-template-rows: 100%;
    align-items: center;
    justify-content: flex-start;
}

.navlist .item .header i {
    font-size: 20px;
}

.children {
    display: none;
    background-color: chocolate;
    width: 100%;
    /* height: 100px; */

}

.children.show {
    display: block;
}

.children li:hover {
    color: #0aaee0;
}

.children li {
    height: 50px;
    width: 100%;
    display: flex;
    padding-left: 30px;
    justify-content: flex-start;
    align-items: center;
}
</style>
