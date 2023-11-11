import axios from "@/utils/axios";
import dataUtils from "@/utils/dataUtils";
const prevurl = '/api/video/'
export async function GetVideoListvideos(vlid) {
    return await axios.get(prevurl + '/VideoListvideos/' + vlid)
        .then(req => 
            {
                const list=req.data
                list.sort((a,b)=>a.index-b.index)

                return list
            }
            )
}

export async function CreateVideoDanmuRedis(vid) {
    return await axios.get(prevurl+'/CreateVideoRedis/'+vid)
}

export async function GetVideoDanmuAll(vid) {
    return await axios.get(prevurl+'/VideoDanmuAll/'+vid)
    .then(req=>{
        const list=req.data;
       
        // return list
      return  list.map((li)=>{
        
            return dataUtils.toCommentAJax(li)
        })
       
    })
}

export async function GetVideoDanmuByMoment(vid,moment,uuid) {
    // console.log(vid)
    return await axios.get(prevurl+'/VideoDanmuByMoment/'+vid+'/'+moment+'/'+uuid)
    .then(req=>{
        const list=req.data;
       
        // return list
      return  list.map((li)=>{
        
            return dataUtils.toCommentAJax(li)
        })
    })
}