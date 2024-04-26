import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';

class AdminEventService {

    getAllEvents(title?: string, description?:string,limit: number = 20, offset?: number) {
        let url = API_URL + '/admin/event/all';
        url.includes('?') ? url += `&limit=${limit}` : url += `?limit=${limit}`;

        if (offset) {
            url.includes('?') ? url += `&offset=${offset}` : url += `?offset=${offset}`;
        }

        if (title) {
            url.includes('?') ? url += `&title=${title}` : url += `?title=${title}`;
        }

        if (description) {
            url.includes('?') ? url += `&description=${description}` : url += `?description=${description}`;
        }

        return axios.get(url, { headers: { requiresAuth: true } }).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }

    getAllAdminEvents() {
        return axios.get(API_URL + '/admin/event', { headers: { requiresAuth: true } }).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }

    getFutureAdminEvents() {
        return axios.get(API_URL + '/admin/event/future', { headers: { requiresAuth: true } }).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }

    getPastAdminEvents() {
        return axios.get(API_URL + '/admin/event/past', { headers: { requiresAuth: true } }).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }

    getMyAdminEvents() {
        return axios.get(API_URL + '/admin/event', { headers: { requiresAuth: true } }).then(
            response => {
                return response.data;
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data);
            }
        )
    }

    deleteUserEventAdmin(userId: number, eventId: number) {
        return axios.delete(API_URL + `/admin/user/${userId}/event/${eventId}`, { headers: { requiresAuth: true } }).then(
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
export default new AdminEventService();