<template>
    <div class='header_search' :class="pageconfigStore.globalclass">
        <input type="search" :placeholder="placeholder" v-model="searchtext" @keyup.enter="submit">
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
    let str = searchtext.value.trim()
    if (str === '') {
        str = placeholder.value
    }
    router.push({ name: 'searchpage', query: { text: str } })
}


</script>
<style scoped lang="less">
@import url('@/assets/css/common.less');

.header_search {
    padding-left: 4px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: @maxborderraduis;
    overflow: hidden;
    background-color: #f1f2f3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    min-width: 253px;
    width: 27vw;

    input {
        height: 80%;
        width: 90%;
        border-radius: @maxborderraduis;
        /* background-color: palegoldenrod; */
        background: none;
        padding-left: 5px;

        &:focus {
            background-color: #e6e7e8;
        }
    }

    button {
        width: 10%;
        height: 80%;
        flex-shrink: 1;
        background: none;
        border-radius: @maxborderraduis;
        border: none;
        color: #18272a;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;

        &:hover {
            background: @transparency;
        }
    }

    &.moviepage {

        background-color: #242628;

        button {
            color: #f1f2f3;
        }
    }

    &.searchpage {
        display: none;
    }
}</style>
