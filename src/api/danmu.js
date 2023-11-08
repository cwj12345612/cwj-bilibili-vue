import axios  from "@/utils/axios";
const prevurl='/api/video/'
export async function GetVideoPath(id,index) {
    return await axios.get(prevurl+'/videosrc/'+id+'/'+index)
    .then(req=>req.data)
}
//通知后台把视频弹幕全部放入redis
export async  function createVideoRedis(id) {
    //初始化redis弹幕池
    return await axios.get(prevurl+'/createVideoRedis/'+id)
}

export async function GetDanmu(id,start,end,danmusection) {
    // return []
    return await axios.get(prevurl+`/Danmu/${id}/${start}/${end}/${danmusection}`)
                    .then(req=>req.data)
}