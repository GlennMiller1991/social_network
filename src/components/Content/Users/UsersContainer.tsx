import {connect} from "react-redux";
import {Users} from "./Users";
import {actionsType, stateType} from "../../../redux/redux_store";
import {
    changePageFieldValueAC,
    changeUsersPageAC, enterPressAC,
    followAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../../redux/usersReducer";

const mapStateToProps = (state: stateType) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pageFieldValue: state.usersPage.pageFieldValue,
    }
}
const mapDispatchToProps = (dispatch: (action: actionsType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: userType[], totalUsersCount: number) => {
            dispatch(setUsersAC(users, totalUsersCount))
        },
        changeUsersPage: (pageNumber: number) => {
            dispatch(changeUsersPageAC(pageNumber))
        },
        changePageFieldValue: (value: string) => {
            dispatch(changePageFieldValueAC(value))
        },
        onEnterPressHandler: (value: string) => {
            dispatch(enterPressAC(value))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)