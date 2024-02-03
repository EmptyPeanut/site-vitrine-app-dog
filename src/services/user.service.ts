import axios from "axios";
import authHeader from "./auth-header";

const API_URL: string = 'http://localhost:3000/customer';

class UserService
{
    public getPersonalInfos()
    {
        return axios.get(API_URL + '/personal-infos', {headers: authHeader()})
    }
}

export default new UserService();