import type { ErrorResponse, SexResponse } from "@/types/ResponseTypes";
import axios from "axios";

const API_URL: string = 'http://localhost:3000/api';

class SexService
{
    public getSexes()
    {
        return axios.get(`${API_URL}/sex`).then(
            response => {
                return response.data as SexResponse[];
            }
        ).catch(
            err => {
                return Promise.reject(err.response.data as ErrorResponse);
            }
        )
    }
}

export default new SexService;