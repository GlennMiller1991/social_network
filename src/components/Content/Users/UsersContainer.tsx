import {connect} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {
    changePageFieldValue,
    followUser, getUsers, renewUsers,
    unfollowUser,
} from "../../../redux/usersReducer";
import {UsersSideEffectContainer} from "./UsersSideEffectContainer";

const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pageFieldValue: state.usersPage.pageFieldValue,
        usersIsLoaded: state.usersPage.usersIsLoaded,
        authState: state.authState,
    }
}
export const UsersContainer = connect(mapStateToProps, {
    changePageFieldValue,
    getUsers,
    renewUsers,
    followUser,
    unfollowUser,
})(UsersSideEffectContainer)