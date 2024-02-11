import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';
class AdminUserService
{

    public getUserIhm(email?: string, pseudo?: string)
    {
        let url: string = `${API_URL}/admin/customer/ihm`;
        if (email) {
            url.includes('?') ? url = `${url}&email=${email}` : url = `${url}?email=${email}`;
        }
        if (pseudo) {
            url.includes('?') ? url = `${url}&pseudo=@${pseudo}` : url = `${url}?pseudo=@${pseudo}`;
        }

        return axios.get(API_URL + '/admin/customer/ihm', {headers: {requiresAuth: true}}).then(
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

export default new AdminUserService();