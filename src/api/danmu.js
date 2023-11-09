import axios from "@/utils/axios";
const prevurl = '/api/video/'
export async function GetVideoListvideos(id) {
    return await axios.get(prevurl + '/VideoListvideos/' + id)
        .then(req => req.data)
}
//通知后台把视频弹幕全部放入redis
export async function createVideoRedis(id) {
    //初始化redis弹幕池
    return await axios.get(prevurl + '/createVideoRedis/' + id)
}

export async function GetDanmuBymoment(id, start, end) {
    // return []
    return await axios.get(prevurl + `/DanmuBymoment/${id}/${start}/${end}`)
        .then(req => req.data)
}