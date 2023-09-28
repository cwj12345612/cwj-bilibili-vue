<template>
 <div style="border: 1px solid #ccc;height: 400px;">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
     
      />
      <Editor
        style=" overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
       
        @onCreated="handleCreated"
      />
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,shallowRef} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
 // 编辑器实例，必须用 shallowRef
 const editorRef = shallowRef()
  // 内容 HTML
  const valueHtml = ref()
  const toolbarConfig = reactive({})
    const editorConfig = reactive( {placeholder: '请输入内容...' })
    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion

</script>
<style scoped>

</style>
