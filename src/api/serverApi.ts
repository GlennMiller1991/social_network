import axios from "axios";

export const serverApi = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '686ffc4e-9713-4acd-8b49-1b6f4dcbd337',
    },
})