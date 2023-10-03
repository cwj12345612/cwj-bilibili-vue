<template>
    <div class="searchpage_searchinput" id="searchpage_searchinput" :class="{ 'scroll': pageconfigStore.scroll > (64 + 20) }">

        <div class="logo" v-show="pageconfigStore.scroll > (64 + 20)">
            <a href="/">
                <i class="colourless bilibili"></i>
            </a>
        </div>
        <div class="input">
            <i class="colourless sousuo"></i>
            <input type="search" placeholder="请输入搜索内容" v-model="text" @keyup.enter="submit">
            <button @click.prevent="submit">
                搜索
            </button>

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

const text = ref('')
watch(() => route.query, () => {
    text.value = route.query.text
}, { immediate: true })
const submit = () => {
    let str = text.value.trim()
    if (str === '') {
        alert('请输入搜索内容')
        text.value = ''
        return
    }
    router.push(
        { name: 'searchpage', query: { text: str } })
}
</script>
<style scoped>
.searchpage_searchinput {
    height: 55px;
    margin: 20px 0;
    width: 100%;
    background-color: #ffffff;
    /* background-color: palevioletred; */
    display: flex;

    justify-content: center;
    align-content: center;

    /* transition: all 0.3s; */
}

.searchpage_searchinput .logo {

    margin-right: 10px;
    height: 100%;
}

.searchpage_searchinput .logo a {
    height: 100%;

    display: flex;
    align-items: center;
}

.searchpage_searchinput .logo i {
    font-size: 30px;
    color: #00aeec;
}

.searchpage_searchinput.scroll {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    margin: 0;
    position: fixed;
    top: 0;
    z-index: 10086;

    margin: 0;
}

.searchpage_searchinput .input {
    height: 50px;
    align-self: center;

    width: 640px;
    padding: 5px;
    border: 1px solid #f1f2f3;
    /* 246, 247, 248 */
    background-color: rgb(246, 247, 248);
    border-radius: var(--border-radius-max);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.searchpage_searchinput .input i {
    color: #00aeec;
    font-size: 25px;
}

.searchpage_searchinput .input input {
    background-color: rgb(246, 247, 248);
    width: 80%;
    height: 90%;
    border: none;
}

.searchpage_searchinput .input button {
    height: 90%;
    padding: 0 30px;
    background-color: #00aeec;
    color: #ffffff;
    border: none;
    border-radius: var(--border-radius-max);
}

.searchpage_searchinput .input button:hover {
    background-color: rgb(64, 197, 241);
}
</style>
