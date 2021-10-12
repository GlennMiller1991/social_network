import {Sidebar} from "./Sidebar";
import {connect} from "react-redux";
import {actionsType, stateType} from "../../../redux/redux_store";

const mapStateToProps = (state: stateType) => {
    return {
        state: state.sideBar
    }
}
const mapDispatchToProps = (dispatch: (action: actionsType) => void) => {

}
export const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)