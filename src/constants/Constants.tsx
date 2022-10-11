var Buffer = require('buffer/').Buffer

export const BASE_URL = 'https://api.spotify.com/v1/'
export const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'

export const CLIENT_ID ='d111f39084d7479bb21cae60b73b5b14';
export const CLIENT_SECRET = '2bea09dda7924945ac5ab3d8d480e59e';

export const AUTH_TOKEN = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

export const REDIRECT_URI='http://localhost:3001/';
export const RANDOM_SEED_LENGTH = 16;

const generateRandomString=(seedLentgh: number)=>{
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, RANDOM_SEED_LENGTH);
}

export const RandomStateSeed = generateRandomString(16);