import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';
class AdminUserService
{

    public async getUserIhm(email?: string, pseudo?: string, limit: number = 20, offset?: number)
    {
        let url: string = `${API_URL}/admin/customer/ihm`;

        url.includes('?') ? url += `&limit=${limit}` : url += `?limit=${limit}`;
        if (offset) {
            url.includes('?') ? url += `&offset=${offset}` : url += `?offset=${offset}`;
        }

        if (email) {
            url.includes('?') ? url += `&email=${email}` : url += `?email=${email}`;
        }
        if (pseudo) {
            url.includes('?') ? url += `&pseudo=@${pseudo}` : url += `?pseudo=@${pseudo}`;
        }

        return axios.get(url , {headers: {requiresAuth: true}}).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }

    public async getUser(id: number)
    {
        return axios.get(API_URL + '/admin/customer/' + id , {headers: {requiresAuth: true}}).then(
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