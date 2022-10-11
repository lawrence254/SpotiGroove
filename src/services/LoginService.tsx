
import { AUTHORIZE_URL, AUTH_TOKEN, CLIENT_ID, RandomStateSeed, REDIRECT_URI } from "../constants/Constants";



let initScopes = ['user-read-email, user-library-read']
const axios = require('axios');
var qs = require('querystringify');

export let tokens:any
let cde: any;
let nPopUp: any;
// const authRequest = async () => {
//     let requestBody = {
//         response_type: 'code',
//         client_id: CLIENT_ID,
//         scope: initScopes,
//         redirect_uri: REDIRECT_URI,
//         state: RandomStateSeed,
//         show_dialog: false
//     };

//     try {
//         let auth_response = await axios.get(AUTHORIZE_URL, qs.stringify(requestBody)).then(async (res: any) =>
//              await createPopUp()
//         )
//         console.log(auth_response)
//         return auth_response;
//     } catch (e) {
//         console.log(e)
//     };
// }
const authCallback = async (str: string) => {
    var params = new URLSearchParams()
    params.append('code',str)
    params.append('redirect_uri',REDIRECT_URI);
    params.append('grant_type', 'authorization_code')

    await axios.post('https://accounts.spotify.com/api/token', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + AUTH_TOKEN
        }

    }).then((result: any) => {
        tokens = result.data;
        localStorage.setItem('access_token', result.data.access_token)
        localStorage.setItem('refresh_token', result.data.refresh_token)
        console.log(result, result.data.access_token)
    }).catch((err: string) => {
        console.log(err);
    })
}
export const createPopUp = async () => {
    nPopUp = window.open(`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${initScopes.join(
        "%20"
    )}&response_type=code&show_dialog=true&state=${RandomStateSeed}`, 'Login With Spotify', 'width=800, height=600')

    // return new URLSearchParams(window.location.search).get('code');
}
cde = new URLSearchParams(window.location.search).get('code');
authCallback(cde);
