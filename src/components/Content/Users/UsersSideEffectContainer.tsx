import React from "react";
import {Users, UsersPropsType} from "./Users";
import {PageLoader} from "../../common/visual/PageLoader/PageLoader";

type UsersSideEffectContainerPropsType = UsersPropsType & {
    usersIsLoaded: boolean,
}

type stateProps = {
    intervalId: number,
}

export class UsersSideEffectContainer extends React.Component<UsersSideEffectContainerPropsType, stateProps> {
    constructor(props: UsersSideEffectContainerPropsType) {
        super(props);
        this.state = {
            intervalId: -1,
        }
    }

    //life cycle
    componentDidMount() {
        document.title = 'Users page'
        this.setState({intervalId: this.props.getUsers(this.props.pageSize, this.props.currentPage)})
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }

     render() {
        console.log('from usersSideEffectContainer')
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
                               authState={this.props.authState}
                        />
                }
            </>
        )
    }
}