<template>
  <el-result
        icon="error"
        title="上传失败"
        :sub-title="msg"
      >
        <template #extra>
          <el-button type="primary" @click="router.push('/')">点击返回主页</el-button>
        </template>
      </el-result>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import {useRoute,useRouter} from 'vue-router'
const route=useRoute()
const router=useRouter()
// #endregion

// #region 第三方库

// #endregion

// #region  发送请求 正常情况应该放入onMounted
const msg=ref('出现异常')
    onMounted(() => {
   const code= sessionStorage.getItem('errorcode')  
   sessionStorage.removeItem('errorcode')  
  
    msg.value='出现异常 请联系开发者'
  
})

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped  lang="less">

</style>
