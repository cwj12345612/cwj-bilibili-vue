<template>
<el-dialog
    style="width: 50%;"
    v-model="dialogFormVisible" title="登录" >
    <el-form :model="form">
      <el-form-item label="请输入邮箱" :label-width="100" >
        <el-input v-model="form.email" autocomplete="off"  />
      </el-form-item>
      <el-form-item label="请输入密码" :label-width="100">
        <el-input type="password" v-model="form.password" autocomplete="off"  />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submit">
          登录
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,defineProps,defineEmits} from 'vue'
import {useRoute,useRouter} from 'vue-router'
const route=useRoute()
const router=useRouter()
// 父子传值
const emit=defineEmits([]) 
const props =defineProps({ 

})
const { } =toRefs(props)
// #endregion

// #region 第三方库

// #endregion

// #region  发送请求 正常情况应该放入onMounted

    onMounted(() => {

})

// #endregion

</script>
<style scoped  lang="less">

</style>
