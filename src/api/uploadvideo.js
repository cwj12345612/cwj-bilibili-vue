import axios from "@/utils/axios";

export async function GetCategoryAndSubarea() {
   return await axios.get('/api/uploadvideo/CategoryAndSubarea').then(req=>{
       return req.data;
    }).catch(e=>{
        console.log(e);
    })

}
