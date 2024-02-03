import axios from "axios";
import { useAuthStore } from "@/store/authStore";

axios.interceptors.request.use(request => {
    const authStore = useAuthStore();
    if (request.headers.requiresAuth) {
        request.headers.Authorization = 'Bearer ' + authStore.user?.token;
    }
    if (request.url?.includes(':userId') && authStore.user?.user_id) {
        request.url = request.url.replace(':userId', authStore.user?.user_id.toString())
    }
    return request;
    }
)