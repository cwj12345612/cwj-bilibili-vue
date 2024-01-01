import axios from "@/utils/axios";
import md5 from "js-md5";
import { useUserStore} from '@/pinia/userStore'
const prurl='/api/Channelpage/'
//#region navlist
export  const GetAllChannel_types=async ()=> {
  return await  axios.get(prurl+'AllChannel_types')
    .then(req=>{
       
       return req.data
       
    })
}
//#endregion

//#region channel_types
export const GetChannelsByChannel_typesId=async(id,count)=>{
 return await   axios.get(prurl+'ChannelsByChannel_typesId/'+id+'/'+count)
    .then(req=>{
        // console.log(req.data)
        return req.data
    })
}
//#endregion

//#region home
export const GetHotChannels= async(count)=>{
 return await axios.get(prurl+'hotchannels/'+count)
  .then(req=>{
    // console.log(req.data)
    return req.data
  })
}
//#endregion