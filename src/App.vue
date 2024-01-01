<template>
  <router-view></router-view>
  
</template>
<script setup>
// #region 引入组件
import index from '@/views/index'
import platform from '@/views/platform'
//#endregion

import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, onBeforeMount } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/pinia/userStore'

import {refresh} from '@/api/user'
const pageconfigStore = usepageconfigStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
onMounted(() => {


})
const notindexlist = reactive(
  [
    'admindev', 'platform'
  ]
)
onMounted(() => {

  //初始化页面
  pageconfigStore.initproperty()
})
//解决刷新页面状态丢失
onMounted(() => {
    // refresh()
})

</script>
<style lang="less"></style>
