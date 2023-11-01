// 路由守卫
import static_routes from './static'
import  {usepageconfigStore} from '@/pinia/pageconfig'
import { createRouter,createWebHistory } from "vue-router";
import  Pinia  from 'pinia'; 
import { useUserStore} from '@/pinia/userStore'
const router= createRouter({
    history:createWebHistory(),
    routes:static_routes
})
router.beforeEach((to,from,next)=>{

  //延迟50ms
  setTimeout(() => {
    next()
   }, 50);
  }
)
//设置页面状态守卫
router.beforeEach((to,from,next)=>{
    const pageconfig=usepageconfigStore()
  const list= to.matched
//  list.forEach(li=>{
//   console.log(li.name)
//  })
  let i;
  for( i=list.length,i>=0 ;i--;){
   if(list[i]?.name){  
    // console.log('你好'+list[i].name)
    pageconfig.setpagename(list[i].name)
   }
  }
    next()
})
router.beforeEach((to,from,next)=>{
  // console.log("验证是否需要登录")

  const userStore=useUserStore()
  if(to.meta?.needLogin&&!userStore.isLogin){
    alert("需要登录")
    next({name:'homepage'})
  }else{
    next()
  }
})
export default router
