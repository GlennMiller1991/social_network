import React from "react";
import {fakeState, userType} from "../../../redux/usersReducer";
import axios from "axios";
import {Users, UsersPropsType} from "./Users";

export type responseType = {
    items: userType[]
    error: number | null
    totalCount: number
}

export class UsersSideEffectContainer extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
    }

    //life cycle
    componentDidMount() {
        axios
            .get<responseType>(
                `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
            ).then((res) => {
            this.props.setUsers(res.data.items, res.data.totalCount)
        }).catch(() => {
            this.props.setUsers(fakeState.users, fakeState.totalUsersCount)
        })
    }

//callbacks
    render() {
        return (
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
                   enterPress={this.props.enterPress}/>
        )
    }
}