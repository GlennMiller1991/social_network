import React from "react";
import {Users, UsersPropsType} from "./Users";
import {PageLoader} from "../../common/PageLoader/PageLoader";
import {usersAPI} from "../../../api/usersAPI";

export class UsersSideEffectContainer extends React.Component<UsersPropsType> {

    //life cycle
    componentDidMount() {
        document.title = 'Users Page'
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(data => {
                this.props.setUsers(data.items.map(item => {
                    return {...item, waitForChangingStatus: false}
                }), data.totalCount)
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
                               changeLoadStatus={this.props.changeLoadStatus}
                               changeSubBtn={this.props.changeSubBtn}/>}
            </>
        )
    }
}