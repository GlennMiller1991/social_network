import {filterMessages} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {DialogsSideEffectContainer} from "./DialogsSideEffectContainer";


const mapStateToProps = (state: stateType) => {
    return {
        state: state.dialogsPage
    }
}
export const DialogsContainer = connect(mapStateToProps, {filterMessages})(DialogsSideEffectContainer)