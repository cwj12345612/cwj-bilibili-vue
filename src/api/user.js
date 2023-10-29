//用户登录相关
import { useUserStore } from '@/pinia/userStore'
import axios from "@/utils/axios";
/**
 * 用户登录
 * @param {*} loginuser 
 */
export async function login(loginuser) {
  await axios.post('/api/user/login',
    loginuser
  ).then(req => {
    const user = req.data
    sessionStorage.setItem('userInfo', JSON.stringify(user))
    sessionStorage.setItem('Authorization', user.token)
    useUserStore().login(user)

  }).catch(e => {
    console.log(e);
    alert("用户名或密码错误")
  })

}
/**
 * 刷新页面时向后台查询是否更新了用户数据
 * 
 * @returns 
 */
export async function refresh() {


  // console.log('刷新')
  // console.log(user )
  if (!(sessionStorage.getItem('Authorization') && sessionStorage.getItem('userInfo'))) {
    // console.log('空')
    useUserStore().logout()
    return
  }
  const user = sessionStorage.getItem('userInfo');
  axios.get('/api/user/Refresh?id=' +
    JSON.parse(user).id
  ).then(req => {
    // console.log('刷新')
    const userInfo = req.data;
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo))
    sessionStorage.setItem('Authorization', userInfo.token)
    useUserStore().refresh(userInfo)
  }).catch(e => {
    const resp = e.response;
    console.log(resp)
    sessionStorage.removeItem("userInfo")
    sessionStorage.removeItem("Authorization")
    useUserStore().logout()
  })
}