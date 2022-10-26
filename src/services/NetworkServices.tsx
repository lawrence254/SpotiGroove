import axios from "axios";
import { BASE_URL } from "../constants/Constants";
import { Track } from "../constants/types/_Types";

const localAccessToken = localStorage.getItem('access_token');

export const getNewRealeases=async ()=>{
    await axios.get<Track>(`${BASE_URL}browse/new-releases`,{
        headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localAccessToken}
    }).then(async (result)=>{
        console.log(result.data)
        return result;
    })
}