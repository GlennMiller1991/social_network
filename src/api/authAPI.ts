import {serverApi} from "./serverApi";

// type authResponseType = {
//     data: {
//         id: number,
//         login: string,
//         email: string,
//     },
//     messages: string[],
//     fieldsErrors: string[],
//     resultCode: number,
// }

export const authAPI = {
    checkAuth() {
        return serverApi
            .get<authResponseType<{id: number, email: string, login: string}>>(`auth/me`)
            .then(response => response.data)
    },
    log(login: boolean, params?: {email: string, password: string}) {
        if (login) return serverApi
            .post<authResponseType>('auth/login', {...params})
            .then(response => response.data)
        else return serverApi
            .delete<authResponseType>('auth/login')
            .then(response => response.data)
    },
}

export enum responseCodes {
    success,
}

type authResponseType<T = {}> = {
    resultCode: responseCodes,
    messages: string[],
    data: T,
}

