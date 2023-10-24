<template>
    <ul class="left_icons">
        <li v-for="(li) in list">
            <router-link :to="li.route">
                <div class="img">
                    <i :class="li.icon"></i>
                </div>
                <span>{{ li.name }}</span>
            </router-link>
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

// #region  模拟数据 mockjs
import Mock from 'mockjs';
const mock = (str) => {
    return Mock.mock(str)
}
const list = [
    { id: mock('@id()'), name: '动态', icon: 'colourless dongtaiweixuanzhong', route: '#' },
    { id: mock('@id()'), name: '热门', icon: 'colour bianjituijian', route: '/popular/all' },
    { id: mock('@id()'), name: '频道', icon: 'colourless fenquxuanzhong', route: '#' },

]
//#endregion

</script>
<style scoped lang="less">
.left_icons {

    flex-grow: 0;
    /* background-color: teal; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    /* 
  :style="pageconfigStore.dynamicWH({normal:210,max:234,min:150},
  {normal:72,max:72,min:64})"
  */
    max-width: 234px;
    min-width: 150px;
    width: 15vw;
    max-height: 72px;
    min-height: 64px;
    height: 15vh;
}

.left_icons li {
    /*:style="pageconfigStore.dynamicWH({normal:46,max:46,min:40})"  */
    height: 100%;
    max-width: 46px;
    min-width: 40px;

    &:hover a span {
        color: #0aaee0;
    }
}

.left_icons a {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.left_icons a .img {
    display: flex;
    align-items: center;
    justify-content: center;

    /* background-color: orange; */
    width: 100%;
    height: calc(100% * calc(46 / 72));
    border-radius: 50%;
}

.left_icons a span {
    color: #18191c;
}
</style>
