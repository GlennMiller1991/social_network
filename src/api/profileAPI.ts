import {serverApi} from "./serverApi";
import {fullUserType} from "../redux/profileReducer";

type responseProfileType = fullUserType
type putStatusResponseType = {
    resultCode: number,
}

export const profileAPI = {
    getProfile(userId: number) {
        return serverApi
            .get<responseProfileType>(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: number) {
        return serverApi
            .get<string>(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    renewStatus(newStatus: string) {
        return serverApi
            .put<putStatusResponseType>(`/profile/status`, {status: newStatus})
            .then(response => response.data)
    },
}