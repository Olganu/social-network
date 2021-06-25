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


    // let stateCopy; 
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                // messagesData:
                // [...state.messagesData]
                newMessageBody: action.body
            };
        // stateCopy.newMessageBody = action.body;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData:
                    [...state.messagesData, { id: 8, message: body }]
            };

        // stateCopy.newMessageBody = '';
        // stateCopy.messagesData.push();
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;