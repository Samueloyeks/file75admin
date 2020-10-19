import api from './api';
import db from '../utils/db';
import { getToken } from '../helpers/auth';
import axios from 'axios';
// import {
//     API_DEV_URL,
//     API_LOCAL_URL
// } from 'react-native-dotenv';


const baseURL = process.env.ADMIN_API_DEV_URL
// const baseURL = API_LOCAL_URL;




export const reservationService = {
    reserveName
};

async function reserveName(data) {
    const token = await getToken()
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const url = `${baseURL}/reservation`;


    try {
        const resp = await axios.post(url, data, config);
        if (resp.data) {
            return resp.data;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}



