import {Dialogs} from "./Dialogs";
import {filterMessagesActionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {actionsType, stateType} from "../../../redux/redux_store";


const mapStateToProps = (state: stateType) => {
    return {
        state: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: actionsType) => void) => {
    return {
        setFilter: (filterValue: string) => {
            dispatch(filterMessagesActionCreator(filterValue))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)