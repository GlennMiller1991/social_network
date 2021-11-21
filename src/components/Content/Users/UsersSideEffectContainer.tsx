import React from "react";
import {Users, UsersPropsType} from "./Users";
import {PageLoader} from "../../common/PageLoader/PageLoader";

type UsersSideEffectContainerPropsType = UsersPropsType & {
    usersIsLoaded: boolean,
}
export class UsersSideEffectContainer extends React.Component<UsersSideEffectContainerPropsType> {

    //life cycle
    componentDidMount() {
        document.title = 'Users Page'
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
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
                               changePageFieldValue={this.props.changePageFieldValue}
                               getUsers={this.props.getUsers}
                               renewUsers={this.props.renewUsers}
                               followUser={this.props.followUser}
                               unfollowUser={this.props.unfollowUser}
                        />
                }
            </>
        )
    }
}