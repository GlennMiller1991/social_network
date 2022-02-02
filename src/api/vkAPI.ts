import {vkPostType} from "../redux/postsReducer";

export enum vkErrors {
    bannedUser = 18,
    blockedContent = 19,
    privateProfile = 30,
}

export type vkUserType = {
    domain: string,
    first_name: string,
    href: string,
    id: string,
    last_name: string,
    nickname: string,
}
export type vkSessionType = {
    session: {
        expire: number,
        mid: string,
        secret: string,
        sid: string,
        sig: string,
        user: vkUserType,
    }
    status: 'connected' | 'not_authorized' | 'unknown',
}

export type successResponseType = {
    response: {
        count: number,
        items: Array<vkPostType>
    }
}
export type errorResponseType = {
    error: {
        error_code: number,
        error_msg: string,
        request_params: {
            [key: string]: string,
            value: string,
        }
    }
}
export type vkWallGetResponseType = successResponseType | errorResponseType