import api from './api';
import db from '../utils/db';
import { getToken } from '../helpers/auth';
import { encodeAssociations } from '../helpers/encode';
import axios from 'axios';
// import {
//     API_DEV_URL,
//     API_LOCAL_URL
// } from 'react-native-dotenv';


const baseURL = process.env.API_LOCAL_URL
// const baseURL = API_LOCAL_URL;

 
export const requestService = {
    getRequests
};

async function getRequests(params) {
    const token = await getToken();
    params.associations = await encodeAssociations(params.associations);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        },
        params
    }
    const url = `${baseURL}/reservation`;


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

