import {connect} from "react-redux";
import {Users} from "./Users";
import {actionsType, stateType} from "../../redux/redux_store";
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/usersReducer";

const mapStateToProps = (state: stateType) => {
    return {
        state: state.usersPage
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
        setUsers: (users: userType[]) => {
            dispatch(setUsersAC(users))
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)