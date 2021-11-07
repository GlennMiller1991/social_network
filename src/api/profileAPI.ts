import {serverApi} from "./serverApi";
import {fullUserType} from "../redux/profileReducer";

type responseProfileType = fullUserType


export const profileAPI = {
    getProfile(userId: number) {
        return serverApi
            .get<responseProfileType>(`profile/${userId}`)
            .then(response => response.data)
    }
}