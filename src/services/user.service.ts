import type { LoginResponse } from "@/types/ResponseTypes";
import axios from "axios";

const API_URL: string = 'http://localhost:3000/api/customer';
class UserService
{

    public getPersonalInfos()
    {
        
        return axios.get(API_URL + '/personal-infos/:userId', {headers: {requiresAuth: true}}).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }
}

export default new UserService();