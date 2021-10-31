import {connect} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {
    changePageFieldValue,
    changeUsersPage, enterPress,
    follow,
    setUsers,
    unfollow,
} from "../../../redux/usersReducer";
import {UsersSideEffectContainer} from "./UsersSideEffectContainer";

const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pageFieldValue: state.usersPage.pageFieldValue,
    }
}
export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeUsersPage,
    changePageFieldValue,
    enterPress,
})(UsersSideEffectContainer)