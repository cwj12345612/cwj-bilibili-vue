<template>
    <div class='header_search' :class="pageconfigStore.globalclass">
        <input type="search" :placeholder="placeholder" @mouseenter="mouseenter" @mouseleave="mouseleave"
            @keyup.enter="submit">
        <button @click.prevent="submit">
            <i class="colourless sousuo"></i>
        </button>
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
import Mock from 'mockjs';
const mock = (str) => {
    return Mock.mock(str)
}
const placeholder = ref('')
onMounted(() => {
    placeholder.value = mock('@cword(3,15)')
})
//#endregion
const searchtext = ref('')

const submit = () => {
    // console.log('搜索')
    if (searchtext.value === '') {
        searchtext.value = placeholder.value
    }
    router.push({ name: 'searchpage', query: { text: searchtext.value } })
}
const mouseenter = (e) => {
    e.currentTarget.style.backgroundColor = '#e3e5e7'

}
const mouseleave = (e) => {
    e.currentTarget.style.backgroundColor = ''

}

</script>
<style scoped>
.header_search {
    padding-left: 4px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: var(--border-radius-max);
    overflow: hidden;
    background-color: #f1f2f3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    min-width: 253px;
    width: 27vw;
}

.header_search input {
    height: 80%;
    width: 90%;
    border-radius: var(--border-radius-max);
    /* background-color: palegoldenrod; */
    background: none;
    padding-left: 5px;
}

/* :style="!pageconfigStore.globalclass.includes('scroll') 
? pageconfigStore.dynamicWH({ normal:  413 , max: 500, min: 253 }) 
: pageconfigStore.dynamicWH({ normal:  377 , max: 500, min: 253 })" */
.header_search.scroll {}

.header_search button {
    width: 10%;
    height: 80%;
    flex-shrink: 1;
    background: none;
    border-radius: var(--border-radius-max);
    border: none;
    color: #18272a;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
}

.header_search.moviepage button {
    color: #f1f2f3;
}

.header_search button:hover {
    background: var(--transparency);
}

.header_search.searchpage {
    display: none;
}

.header_search.moviepage {

    background-color: #242628;
}
</style>
