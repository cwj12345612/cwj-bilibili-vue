<template>
 <index 
 
 v-if="!notindexlist.includes(route.name)"
 ></index>


 <router-view v-if="notindexlist.includes(route.name)"></router-view>


</template>
<script setup>
// #region 引入组件
import index from './views/index.vue'
//#endregion

import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
const notindexlist=reactive(
  [
  'admindev','platform'
]
)
onMounted(() => {
 
  //初始化页面
  pageconfigStore.initproperty()
})
</script>
<style >

</style>
