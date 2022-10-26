
import { AUTHORIZE_URL, AUTH_TOKEN, CLIENT_ID, RandomStateSeed, REDIRECT_URI } from "../constants/Constants";



let initScopes = ['user-read-email, user-library-read']
const axios = require('axios');
var qs = require('querystringify');
const refreshTime = Date.now() + 3599995;

export let tokens: any
let cde: any;
let nPopUp: any;

const authCallback = async (str: string) => {
    var params = new URLSearchParams()
    params.append('code', str)
    params.append('redirect_uri', REDIRECT_URI);
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
        localStorage.setItem('refresh_time', refreshTime.toString())
        console.log(result, result.data.access_token)
    }).catch((err: string) => {
        console.log(err);
    })
}

export const requestRefreshToken = async () => {
    await axios.post('https://accounts.spotify.com/api/token', {
        form: {
            grant_type: 'refresh_token',
            refresh_token: localStorage.getItem('refresh_token')
        }, json: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + AUTH_TOKEN
        }
    }).then((result: any) => {
        localStorage.setItem('access_token', result.data.access_token)
    }).catch((err: string) => {
        console.log('Fetcing Refresh Token Failed: ' + err)
    });
}

export const createPopUp = async () => {
    nPopUp = window.open(`${AUTHORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${initScopes.join(
        "%20"
    )}&response_type=code&show_dialog=true&state=${RandomStateSeed}`, 'Login With Spotify', 'width=800, height=600')

    // return new URLSearchParams(window.location.search).get('code');
}
cde = new URLSearchParams(window.location.search).get('code');
authCallback(cde);
