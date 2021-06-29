/* eslint-disable no-unused-vars */


import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;