import {connect} from "react-redux";
import {Best} from "./Best";
import {actionsType, stateType} from "../../../redux/redux_store";

const mapStateToProps = (state: stateType) => {

}
const mapDispatchToProps = (dispatch: (action: actionsType) => void) => {

}
export const BestContainer = connect(mapStateToProps, mapDispatchToProps)(Best)