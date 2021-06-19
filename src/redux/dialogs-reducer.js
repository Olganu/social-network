const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    
    dialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Kira' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Vita' },
        { id: 5, name: 'Tamara' },
        { id: 6, name: 'Ivan' }
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it?' },
        { id: 3, message: 'How is your it?' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
        { id: 6, message: 'Ivan.hi' }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type ) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messagesData.push({id: 7, message: body});
            return state   
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type:UPDATE_NEW_MESSAGE_BODY, body: body })  

export default dialogsReducer;