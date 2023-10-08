<template>
    <header :class="pageconfigStore.globalclass">
        <cwj_header_leftlist></cwj_header_leftlist>
        <cwj_header_search></cwj_header_search>
        <cwj_header_rightlist></cwj_header_rightlist>
    </header>
</template>
<script setup>
//#region 引入组件
import cwj_header_leftlist from './leftlist.vue'
import cwj_header_search from '@/components/search/header_search.vue'
import cwj_header_rightlist from './rightlist.vue'
//#endgion
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()

</script>
<style scoped lang="less">
header {
    z-index: 10086;
    padding: 0 24px;
    max-width: 2560px;
    min-width: 1060px;
    width: 100vw;
    height: 64px;
    /* 弹性布局flex */
    display: flex;
    align-items: center;
    justify-content: space-between;


    &:where(.homepage, .animepage) {
        position: fixed;
    }

    &.readpage {
        position: relative;
        background-color: #ffffff;
        border-bottom: 2px solid #99a299;
    }

    &.popularpage {
        position: absolute;
    }

    &:where(.homepage, .animepage, .playpage) {
        &.scroll {
            position: fixed;
            background-color: #fff;
        }
    }

    &:where(.searchpage, .playpage, .spacepage) {
        background-color: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    }

    &.moviepage {
        position: fixed;
        &.scroll {
            background-color: #242628;
        }
    }
}



</style>
