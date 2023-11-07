import axios  from "@/utils/axios";
const prevurl='/api/video/'
export async function GetVideoPath(id,index) {
    return await axios.get(prevurl+'/videosrc/'+id+'/'+index)
    .then(req=>req.data)
}

export async  function createVideoRedis(id) {
    //初始化redis弹幕池
    return await axios.get(prevurl+'/createVideoRedis/'+id)
}