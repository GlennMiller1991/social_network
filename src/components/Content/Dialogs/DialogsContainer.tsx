import {filterMessages} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {stateType} from "../../../redux/redux_store";
import {DialogsSideEffectContainer} from "./DialogsSideEffectContainer";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state: stateType) => {
    return {
        dialogState: state.dialogsPage,
        authState: state.authState,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {filterMessages}),
    withAuthRedirect,
)(DialogsSideEffectContainer)