<template>
    <div class="article">
        <div class="header">
            <ul class="list">
                <li class="active">{{ mock('@cword(4,7)') }}</li>
                <li v-for="index  in 6">{{ mock('@cword(4,7)') }}</li>
            </ul>

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
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.article {
    width: 100%;
    height: 100%;
    background-color: cadetblue;
}

.article .header {
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: chocolate; */
    background-color: #fff;
    border-bottom: 1px solid #e6e7e8;
}

.article .header .list {
    height: 100%;
    display: flex;
}

.article .header .list li {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 15px;
    font-size: 16px;
    cursor: pointer;
}

.article .header .list li.active {
    border-bottom: 2px #0aaee0 solid;
    color: #0aaee0;
}
</style>
