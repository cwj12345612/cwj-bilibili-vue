<template>
    <ul class="leftlist" :class="pageconfigStore.globalclass">
        <li class="item" v-for="li in list" :key="li.id" :class="pageconfigStore.globalclass">
            <a :href="li.href" :class="pageconfigStore.globalclass">
                <i v-if="li.icon" :class="li.icon"></i>
                <span :class="li.icon  ?'icon' :undefined">{{ li.title }}</span>
            </a>

        </li>
    </ul>
</template>
<script setup>
// #region  引入组件

//  #endregion
// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()

const router = useRouter()
// #endregion
// #region  模拟数据 mockjs
const list = reactive([
    { id: 1, icon: 'colourless bilibili', title: '首页', href: '/' },
    { id: 2, title: '番剧', href: '/anime' },
    { id: 3, title: '电影', href: '/movie' },
    { id: 4, title: '游戏中心', href: '/admindev' },

    { id: 7, title: '赛事', href: '/admindev' },
    { id: 8, title: '纪录片', href: '/admindev' },
    { id: 9, title: 'LPL', href: '/admindev' },
    { id: 10, icon: 'colourless xiazai', title: '下载客户端', href: '/admindev' },
])

// #endregion
</script>
<style scoped lang="less" >
/* #region 默认状态 */
.leftlist {
    max-width: 537px;
    min-width: 423px;
    width: 33vw;
    height: 100%;
    /* background-color: plum; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 默认情况 */
.item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #ffffff;
    transition: all 0.3s;
}

.item a {
    color: #ffffff;
}
@media (max-width: 1187px){
    .item span.icon{
        display: none;
    }
}
.item:has(>a:hover) {
    transform: translateY(-10%);
}

.item a.scroll {
    color: #18191c;
}

.item a.searchpage,
.item a.playpage,
.item a.spacepage,
.item a.readpage,
.item a.channelpage
 {
    color: #18191c;
  
}

.item a.moviepage {
    color: #ffffff;
}

.item a.moviepage.scroll,
.item a.popularpage.scroll {
    color: #ffffff;
}




li:first-child.channelpage i {
    color: #00aeec;
}
li:first-child.scroll i {
    color: #00aeec;
}

/* #endregion */
</style>
