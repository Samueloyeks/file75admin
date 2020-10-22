import api from './api';
import db from '../utils/db';
import axios from 'axios';



const baseURL = process.env.API_LOCAL_URL


export const userService = {
    login,
    signup,
    forgotPassword, 
    logout
};

async function login(data) {
    const url = `${baseURL}/login`;

    try {
        const resp = await axios.post(url, data);
        if (resp.data) {
            const userToken = resp.data.token
            const user = resp.data.data.user
            const userData = {
                email: user.email,
                fullName: user.fullName,
                id: user._id,
                adminId: user.adminId
            }
            await db.set('userToken', userToken);
            await db.set('userData', JSON.stringify(userData));

            return resp.data;
        }
    } catch (error) {
        if (error.response && error.response.status == 401) {
            alert('Incorrect email or password')
        }
        return error;
    }
}

async function signup(data) {
    const url = `${baseURL}/signup`;

    try {
        const resp = await axios.post(url, data);
        if (resp.data) {
            const userToken = resp.data.token
            const user = resp.data.data.user
            const userData = {
                email: user.email,
                fullName: user.fullName,
                id: user._id,
                adminId: user.adminId
            }
            await db.set('userToken', userToken);
            await db.set('userData', JSON.stringify(userData));

            return resp.data;
        }
    } catch (error) {
        if (error.response && error.response.status == 409) {
            alert('Email has already been registered')
        }
        return error;
    }
}

async function forgotPassword(data) {
    const url = `${baseURL}/forgotPassword`;

    try {
        const resp = await axios.post(url, data);
        if (resp.data && resp.data.status == 'success') {
            return resp;
        }
    } catch (error) {
        alert('Error sending reset token')
        return error;
    }
}

async function logout() {
    // remove user from local storage to log user out
    // const url = `${baseURL}/logout`;
    // await axios.get(url);

    // await GoogleSignin.revokeAccess();
    // await GoogleSignin.signOut();
    await db.delete('userToken');
    await db.delete('userData');

    return;
}
