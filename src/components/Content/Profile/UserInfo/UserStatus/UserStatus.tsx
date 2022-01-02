import React, {ChangeEvent} from "react";
import {profileAPI} from "../../../../../api/profileAPI";

type UserStatusPropsType = {
    userId: number,
    status: string,
    isYourStatus: boolean,
    changeStatusHandler: (status: string) => void,
}

export class UserStatus extends React.Component<UserStatusPropsType, any> {
    constructor(props: UserStatusPropsType) {
        super(props);
    }

    state = {
        editMode: false,
        status: this.props.status
    }

    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    toggleChangeMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        })
    }

    onBlurStatusHandler = () => {
        this.toggleChangeMode()
        profileAPI.renewStatus(this.state.status)
            .then(data => {
                if (data.resultCode) {
                    throw new Error('error occurs during renewStatus')
                }
            })
            .catch((err) => {
                console.log(err.message)
                this.setState({
                    status: this.props.status,
                })
            })
    }

    render() {
        console.log('from user status')
        if (this.props.isYourStatus) {
            return (
                <React.Fragment>
                    <li>
                        {
                            this.state.editMode ?
                                <input autoFocus
                                       value={this.state.status}
                                       onBlur={this.onBlurStatusHandler}
                                       onChange={this.onChangeStatusHandler}/> :
                                <span onDoubleClick={this.toggleChangeMode}>
                                    {
                                        this.state.status ?
                                            this.state.status :
                                            'change your status'
                                    }
                                </span>
                        }

                    </li>
                    <hr/>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    {
                        this.state.status &&
                        <React.Fragment>
                            <li>{this.state.status}</li>
                            <hr/>
                        </React.Fragment>
                    }
                </React.Fragment>
            )
        }
    }
}