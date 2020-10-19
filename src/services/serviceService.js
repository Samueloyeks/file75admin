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


export const serviceService = {
    getServices
};

async function getServices() {
    const token = await getToken();
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const url = `${baseURL}/services`;


    try {
        const resp = await axios.get(url, config);
        if (resp.data) {
            return resp.data;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}

