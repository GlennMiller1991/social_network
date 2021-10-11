import React from "react";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../../redux/StoreContext";
import {filterMessagesActionCreator} from "../../../redux/dialogsReducer";

export const DialogsContainer = () => {
    //return
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const setFilter = (filterValue: string) => {
                        store.dispatch(filterMessagesActionCreator(filterValue))
                    }
                    return <Dialogs state={store.getState().dialogsPage} setFilter={setFilter}/>
                }
            }
        </StoreContext.Consumer>
    )
}