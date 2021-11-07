import {userType} from "../redux/usersReducer";
import {serverApi} from "./serverApi";

type usersGetType = {
    items: userType[]
    error: number | null
    totalCount: number
}

export const usersAPI = {
    getUsers(pageSize: number, currentPage: number) {
        return serverApi
            .get<usersGetType>(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    }
}