import React from "react";
import {userType} from "../../../redux/usersReducer";
import axios from "axios";
import {Users, UsersPropsType} from "./Users";
import {PageLoader} from "../../common/PageLoader/PageLoader";

export type responseType = {
    items: userType[]
    error: number | null
    totalCount: number
}

export class UsersSideEffectContainer extends React.Component<UsersPropsType> {

    //life cycle
    componentDidMount() {
        document.title = 'Users Page'
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
                {
                    withCredentials: true,
                    headers: {
                        'API-KEY': '686ffc4e-9713-4acd-8b49-1b6f4dcbd337',
                    }
                }
            ).then((res) => {
            this.props.setUsers(res.data.items, res.data.totalCount)
        })

    }

//callbacks
    render() {
        return (
            <>
                {
                    this.props.usersIsLoaded ?
                        <PageLoader/> :
                        <Users users={this.props.users}
                               totalUsersCount={this.props.totalUsersCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               pageFieldValue={this.props.pageFieldValue}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}
                               setUsers={this.props.setUsers}
                               changeUsersPage={this.props.changeUsersPage}
                               changePageFieldValue={this.props.changePageFieldValue}
                               enterPress={this.props.enterPress}
                               usersIsLoaded={this.props.usersIsLoaded}
                               changeLoadStatus={this.props.changeLoadStatus}/>}
            </>
        )
    }
}