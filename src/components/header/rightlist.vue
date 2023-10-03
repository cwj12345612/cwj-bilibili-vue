<template>
    <ul class="rightlist">
        <li class="headavatar">
            <router-link :to="headavatar.href">
                <img :src="headavatar.avatarsrc" :alt="headavatar.id">
            </router-link>
        </li>

        <li class="item" v-for="li in list">
            <router-link :to="li.href" class="item" :title="li.title" :class="pageconfigStore.globalclass">
                <i :class="li.icon" v-if="li.icon"></i>
                <span v-if="isshowspan">{{ li.title }}</span>
            </router-link>

        </li>
        <li class="constcontribute">
            <a :href="constcontribute.url">
                <i v-if="constcontribute.icon" :class="constcontribute.icon"></i>
                <span v-if="isshowspan">
                    {{ constcontribute.span }}
                </span>
            </a>
        </li>
    </ul>
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
//是否显示文字
const isshowspan = computed(() => {
    const width = pageconfigStore.width * 0.32
    const min = 380
    return width > min
})
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
    url: '/platform',
    span: '投稿',
    icon: 'colourless tianjia'
})
const list = reactive([
    { id: 1, title: '大会员', href: '#', icon: "colourless wodedahuiyuan", href: '#' },
    { id: 2, title: '消息', href: '#', icon: "colourless sixin", href: '#' },
    { id: 3, title: '动态', href: '#', icon: "colourless zhuti", href: '/space/dynamic' },
    { id: 4, title: '收藏', href: '#', icon: "colourless wodeshoucang", href: '/space/favlist' },
    { id: 5, title: '历史', href: '#', icon: "colourless lishijilu1", href: '#' },
    { id: 6, title: '创作中心', href: '#', icon: "colourless chuangzuozhongxin", href: '/platform' },
])
//#endregion

</script>
<style scoped>
.rightlist {
  /* flex-grow: 1; */

    height: 50px;
    /* background-color: teal; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.headavatar {

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
.item a.spacepage {
    color: #18191c;
}

.item a.moviepage {
    color: #ffffff;
}

.item a.moviepage.scroll {
    color: #ffffff;
}
</style>
