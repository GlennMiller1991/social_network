import {serverApi} from "./serverApi";

type followResponseType = {
    data: {},
    messages: string[],
    fieldsErrors: string[],
    resultCode: number,
}

export const followAPI = {
    follow(userId: number) {
        return serverApi
            .post<followResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return serverApi
            .delete<followResponseType>(`follow/${userId}`)
    },
}