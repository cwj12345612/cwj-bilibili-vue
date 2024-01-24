<template>
    <ul class="rightlist">

        <li class="headavatar">
            <router-link :to="headavatar.href" v-if="userStore.isLogin">
                <img :src="headavatar.avatarsrc" :alt="headavatar.id">
            </router-link>
            <a @click="dialogFormVisible = true" to="javascript:;" v-if="!userStore.isLogin">
                <span>
                    登录
                </span>
            </a>

        </li>

        <li class="item" v-for="li in list">
            <router-link :to="li.href" class="item" :title="li.title" :class="pageconfigStore.globalclass">
                <i :class="li.icon" v-if="li.icon"></i>
                <span>{{ li.title }}</span>
            </router-link>

        </li>
        <li class="constcontribute">
            <a :href="constcontribute.url">
                <i v-if="constcontribute.icon" :class="constcontribute.icon"></i>
                <span >
                    {{ constcontribute.span }}
                </span>
            </a>
        </li>
    </ul>
    <!-- 登录对话框 -->
    <el-dialog style="width: 50%;" v-model="dialogFormVisible" title="登录">
        <el-form :model="form">
            <el-form-item label="请输入邮箱" :label-width="100">
                <el-input v-model="form.email" autocomplete="off" />
            </el-form-item>
            <el-form-item label="请输入密码" :label-width="100">
                <el-input type="password" v-model="form.password" autocomplete="off" />
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
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { ElMessage } from 'element-plus'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/pinia/userStore'
const pageconfigStore = usepageconfigStore()
const userStore = useUserStore()
const route = useRoute()
const router = useRouter()
import { login } from '@/api/user'
// #endregion



// #region  模拟数据 mockjs
import Mock from 'mockjs';
const mock = (str) => {
    return Mock.mock(str)
}
const headavatar = reactive({
    id: Mock.mock('@id()'),
    avatarsrc: require('@/assets/images/头像.png'),
    href: '/space'
})
const constcontribute = reactive({
    url: '/platform/upload',
    span: '投稿',
    icon: 'colourless tianjia'
})
const list = reactive([
    { id: 1, title: '大会员', icon: "colourless wodedahuiyuan", href: '/admindev' },
    { id: 2, title: '消息', icon: "colourless sixin", href: '/admindev' },
    { id: 3, title: '动态', icon: "colourless zhuti", href: '/space/dynamic' },
    { id: 4, title: '收藏', icon: "colourless wodeshoucang", href: '/space/favlist' },
    { id: 5, title: '历史', icon: "colourless lishijilu1", href: '/admindev' },
    { id: 6, title: '创作中心', icon: "colourless chuangzuozhongxin", href: '/platform' },
])
//#endregion

const dialogFormVisible = ref(false)

const form = reactive({
    email: '',
    password: ''
})
const submit = () => {
    if (form.email.trim() == '' || form.password.trim() == '') {
        alert('请输入邮箱和密码')
        return
    }
    login(form)
    dialogFormVisible.value = false
}
</script>
<style scoped lang="less">
.rightlist {
    /* flex-grow: 1; */

    height: 50px;
    /* background-color: teal; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headavatar {
    /* background-color: #fb7299; */
    margin-right: 10px;
    width: 60px;
    height: 50px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.headavatar a {


    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.headavatar img {
    /* background-color: #fb7299; */
    height: 38px;
    width: 38px;
    border-radius: 50%;
}

.headavatar span {
    color: #fff;
    background-color: #0aaee0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 38px;
    border-radius: 50%;
}

.constcontribute {
    flex-shrink: 0;
    max-width: 90px;
    min-width: 34px;
    width: 7vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    background-color: #fb7299;
    border-radius: var(--border-radius-max);
}

.constcontribute a {
    color: #ffffff;
}

.item {
    flex-shrink: 0;
    flex-grow: 1;
    margin-right: 5px;
}

.item a {
    flex-shrink: 0;
    flex-grow: 1;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #ffffff;
}

.item span {
    font-size: 16px;
}
@media (max-width: 1187px){
.item span ,
.constcontribute span
{
    display: none;

}

}
.item i {
    font-size: 20px;
    transition: all 0.3s;
}

.item a:hover i {
    transform: translateY(-30%);
}

.item a.scroll {
    color: #18191c;
}

.item a.searchpage,
.item a.playpage,
.item a.spacepage,
.item a.readpage,
.item a.channelpage {
    color: #18191c;
}

.item a.moviepage {
    color: #ffffff;
}

.item a.moviepage.scroll,
.item a.popularpage.scroll {
    color: #ffffff;
}
</style>
