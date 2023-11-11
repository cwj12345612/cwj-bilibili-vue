import axios from "@/utils/axios";
const prevurl = '/api/video/'
export async function GetVideoListvideos(id) {
    return await axios.get(prevurl + '/VideoListvideos/' + id)
        .then(req => req.data)
}
