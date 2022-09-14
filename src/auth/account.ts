import axios from "axios";
import { loginCredentials, registrationCredentials } from "./global";
import { forage } from '@tauri-apps/tauri-forage';

/**
 * 
 * @returns [isOK, errorMessage, pointOfError]
 */
export async function attemptLogin(creds: loginCredentials): Promise<[boolean, string, string]> {

    let res = await axios.post('http://localhost:7000/auth/login', creds, {
        headers: {
            "Content-Type": "application/json"
        },
        validateStatus: (status: number) => status < 500
    })

    if (res.status === 200) {
        forage.setItem({
            key: 'nue-token',
            value: res.headers['nue-token'],
        })
        return [true, 'OK', 'OK'];
    }
    else if (res.status === 400) {
        return [false, res.data.errorMsg, res.data.pointOfError]
    }
    else {
        throw new Error(`unhandled status code ${res.status}`)
    }
}

export async function attemptRegister(creds: registrationCredentials): Promise<[boolean, string, string]> {
    
    let res = await axios.post('http://localhost:7000/auth/create', creds, {
        headers: {
            "Content-Type": "application/json"
        },
        validateStatus: (status: number) => status < 500
    })

    if (res.status === 200) {
        return [true, 'OK', 'OK']
    }
    else if (res.status === 400) {
        return [false, res.data.errorMsg, res.data.pointOfError]
    }
    else {
        throw new Error(`unhandled status code ${res.status}`)
    }
}