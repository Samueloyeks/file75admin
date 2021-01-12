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
    getRequests,
    deployRequest,
    finishRequest,
    rejectRequest
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
    const reservations_url = `${baseURL}/reservation`;
    const bus_reg_url = `${baseURL}/businessReg`;
    const company_reg_url = `${baseURL}/companyReg`;


    try {
        const reservations_resp = await axios.get(reservations_url, config);
        const bus_reg_resp = await axios.get(bus_reg_url, config);
        const company_reg_resp = await axios.get(company_reg_url, config);

        // const resp = await axios.get(url, config);
        if (
            reservations_resp.data &&
            reservations_resp.data.data &&
            bus_reg_resp.data &&
            bus_reg_resp.data.data &&
            company_reg_resp.data &&
            company_reg_resp.data.data
        ) {
            let result  = [].concat(
                reservations_resp.data.data.result,
                bus_reg_resp.data.data.result,
                company_reg_resp.data.data.result)

            return result;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}

async function deployRequest(request, service) {
    const token = await getToken();
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const url = `${baseURL}/${service}/deploy/${request._id}`;

    try {
        const resp = await axios.put(url, request, config);
        if (resp.data) {
            return resp.data;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}

async function finishRequest(request, service) {
    const data = new FormData();
    const files = request.responseFiles;

    for (let i = 0; i < files.length; i++) {
        data.append(`responseFiles`, files[i], `${Date.now()}-${files[i].name}`);
    }

    const token = await getToken();
    const config = {
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'multipart/form-data'
        }
    }
    const url = `${baseURL}/${service}/finish/${request._id}`;

    try {
        const resp = await axios.put(url, data, config);
        if (resp.data) {
            return resp.data;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}

async function rejectRequest(request, service) {
    const data = new FormData();
    const files = request.responseFiles;

    for (let i = 0; i < files.length; i++) {
        data.append(`responseFiles`, files[i], `${Date.now()}-${files[i].name}`);
    }

    const token = await getToken();
    const config = {
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'multipart/form-data'
        }
    }
    const url = `${baseURL}/${service}/reject/${request._id}`;

    try {
        const resp = await axios.put(url, data, config);
        if (resp.data) {
            return resp.data;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}

function formData2Json(formData) {
    let ret = {};
    for (let pair of formData.entries()) {
        let val = ret[pair[0]];
        if (!val) {
            ret[pair[0]] = pair[1];
        }
        else {
            if (Array.isArray(val)) {
                val.push(pair[1]);
            }
            else {
                ret[pair[0]] = [val, pair[1]];
            }
        }
    }
    return ret;
}

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const token = await getToken();
    const config = {
        headers: {
            Authorization: "Bearer " + token,
            'Content-Type': 'application/pdf'
        }
    }
    const url = `${baseURL}/uploads/nameReservation`;

    try {
        const resp = await axios.post(url, formData, config);
        if (resp.data) {
            return resp.data;
        }
    } catch (error) {
        console.log(error)
        return error;
    }
}

