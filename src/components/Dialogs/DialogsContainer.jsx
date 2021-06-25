/* eslint-disable no-unused-vars */


import React from 'react';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { sendMessageCreator } from '../../redux/dialogs-reducer';
// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage;
    
    // let dialogsElements = state.dialogsData.map(dialog =>
    //     <DialogsItems name={dialog.name} id={dialog.id} />);

    // let messagesElements = state.messagesData.map(message =>
    //     <Messages message={message.message} id={message.id} />);
    // let newMessageBody = state.newMessageBody;


//     let onSendMessageClick = () => {
//         store.dispatch(sendMessageCreator());
//     }
//     let onMessageChange = (body) => {
        
//         store.dispatch(updateNewMessageBodyCreator(body));
//     }
//     return (

//        <Dialogs updateNewMessageBody={onMessageChange}
//        sendMessage={onSendMessageClick}
//        dialogsPage={state}/>
//     )
// }

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