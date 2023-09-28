<template>
    <ul class="navlist">
        <li class="item up">
            <router-link to="/platform/upload">
                <i class="colourless tianjia"></i>
                <span>投稿</span>
            </router-link>
        </li>
        <li @click.prevent="show(li.id)" :class="li.show ?

            'show' : undefined" class="item " v-for="li in list">
         <template
         v-if="!li.chidren"
         >
            <router-link :to="li.href">
                <div class="li">
                    <div>
                        <i class="icon" :class="li.icon"></i>
                        <span>{{ li.title }}</span>
                    </div>
                    <i v-if="li.chidren" class="colourless xialada"></i>
                </div>
            </router-link>
         </template>

            <template v-if="li.chidren">
                <div class="li">
                    <div>
                        <i class="icon" :class="li.icon"></i>
                        <span>{{ li.title }}</span>
                    </div>
                    <i v-if="li.chidren" class="colourless xialada"></i>
                </div>
                <ul class="chidren">
                    <li v-for="cd in  li.chidren">
                        <router-link :to="cd.href">
                            {{ cd.title }}
                        </router-link>
                    </li>
                </ul>
            </template>

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
import Mock from 'mockjs'
import { jsx } from 'vue/jsx-runtime';
const mock = (str) => { return Mock.mock(str) }
const isshow = ref(false)
const list = reactive([
    {
        id: 1, title: '首页', icon: 'colourless shouyeweixuanzhong', href: '/platform/home'
    },
    {
        id: 2, title: '内容管理', icon: 'colourless guanlishipin', href: mock('@url()'), show: false,
        chidren: [
            { id: mock('@id()'), title: '稿件管理', href: mock('@url()') },
            { id: mock('@id()'), title: '申诉管理', href: mock('@url()') },
            { id: mock('@id()'), title: '字幕管理', href: mock('@url()') },
        ],

    },
    {
        id: 3, title: '数据中心', icon: 'colourless _ico_backtokb', href: mock('@url()'),
    },
    {
        id: 4, title: '粉丝管理', icon: 'colourless wodeweixuanzhong', href: mock('@url()'),
    },
    {
        id: 5, title: '互动管理', icon: 'colourless _ico_reply', href: mock('@url()'),
        chidren: [
            { id: mock('@id()'), title: '评论管理', href: mock('@url()') },
            { id: mock('@id()'), title: '弹幕管理', href: mock('@url()') },
        ],
        show: false
    }
])
//#endregion
const show = (id) => {
    const li = list.find(li => {
        // console.log(li.id+'#'+id)
        return li.id == id;
    })
    li.show = !li.show
    // li.show=true
}
</script>
<style scoped>
.navlist {

    flex-shrink: 0;
    flex-grow: 0;
    /* height: 100%; */
    max-height: calc(100vh - 64px);
    background-color: goldenrod;
    width: 210px;

    overflow: auto;

}

.navlist .up {
    padding-left: 32px;
    padding-right: 40px;
    background-color: rebeccapurple;
    height: 46px;
    display: flex;
    align-items: center;
    padding-left: 32px;
    height: 46px;


    font-size: 14px;

    cursor: pointer;
}

.navlist .up a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    color: #fff;
    border-radius: 4px;
    background-color: #0aaee0;
    width: 100%;
}

.navlist .item {
    padding-left: 32px;
    height: 46px;
    min-height: 46px;
    padding-right: 24px;
    font-size: 14px;
    color: #000;
    cursor: pointer;
    overflow: hidden;
}

.navlist .item.show {
    height: auto;
}

.item .li {
    background-color: #fff;
    height: 46px;
    width: 100%;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.router-link-active .li {
    color: #0aaee0;
}

.item .li .icon {
    margin-right: 20px;
}

.chidren {
    background-color: cornflowerblue;
}

.chidren li {
    height: 46px;
    padding-left: calc(20px + 16px);
    display: flex;
    align-items: center;
}

.chidren li a {
    color: #000;
    font-size: 14px;
}
</style>
