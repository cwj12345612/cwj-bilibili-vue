<template>
  <router-view></router-view>
</template>
<script setup>
// #region 引入组件
import index from '@/views/index'
import platform from '@/views/platform'
//#endregion

import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/pinia/userStore'
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
  if (sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
    userStore.refresh(JSON.parse(sessionStorage.getItem('user')))
  }
})
watch(() => userStore.user, () => {
  const user = userStore.user;
  // console.log("监听"+user.token);
  sessionStorage.setItem('user', JSON.stringify(user))
  sessionStorage.setItem('token', user.token)
}, { immediate: false, deep: true })
</script>
<style lang="less"></style>
