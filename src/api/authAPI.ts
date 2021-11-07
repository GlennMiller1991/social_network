import {serverApi} from "./serverApi";

type authResponseType = {
    data: {
        id: number,
        login: string,
        email: string,
    },
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}

export const authAPI = {
    checkAuth() {
        return serverApi
            .get<authResponseType>(`auth/me`)
            .then(response => response.data)
    }
}