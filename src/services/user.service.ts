import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';
class UserService
{

    public getPersonalInfos()
    {
        
        return axios.get(API_URL + '/customer/personal-infos/:userId', {headers: {requiresAuth: true}}).then(
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