import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItems from './DialogItem/DialogItem';
import Messages from './Message/Message';
// import { updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
// import { sendMessageCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogsItems name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.messagesData.map(message =>
        <Messages message={message.message} key={message.id} id={message.id} />);
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
       
    }


    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                            onChange={onMessageChange}
                            placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Dialogs;