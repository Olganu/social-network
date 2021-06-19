import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi.how are you', likesCount: 23 },
                { id: 2, message: 'How is your it?', likesCount: 26 },
                { id: 3, message: 'it\'s my first post', likesCount: 20 },
                { id: 4, message: 'Yo', likesCount: 0 },
                { id: 5, message: 'Yo', likesCount: 7 },
                { id: 6, message: 'Ivan.hi', likesCount: 2 },
            ],
            newPostText: ''


        },
        dialogsPage: {

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
        },
        sidebar: {
            sidebar: [
                { id: 1, name: 'Andrey', surname: ' Neszelskiy' },
                { id: 2, name: 'Vita ', surname: ' Dimetova' },
                { id: 3, name: 'Toma', surname: ' Zavalnaja' },
                { id: 4, name: 'Kira ', surname: ' Nedzelskaya' },
                { id: 5, name: 'Nina ', surname: ' Melnik' },
                { id: 6, name: 'Tanja ', surname: ' Javchenko' }
            ]
        }
    },
    _callSubscriber() {
        console.log("State changes");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

// export const addPost = () => {
//     let newPost = {
//         id: 6,
//         message: state.profilePage.newPostText,
//         likesCount: 1
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rendereEntireTree(state);
// }
// export const updateNewPostText = (newText) => {

//     state.profilePage.newPostText = newText;
//     rendereEntireTree(state);
// }

// export const addMessage = () => {
//     let newMess = {

//         message: state.dialogsPage.newMessage
//     }
//     state.dialogsPage.messagesData.push(newMess);
//     state.dialogsPage.newMessage = '';
//     rendereEntireTree(state);
// }
// export const updateNewMessageText = (newText) => {
//     state.dialogsPage.newMessage = newText;
//     rendereEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rendereEntireTree = observer;
// }



