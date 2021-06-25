const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi.how are you', likesCount: 23 },
        { id: 2, message: 'How is your it?', likesCount: 26 },
        { id: 3, message: 'it\'s my first post', likesCount: 20 },
        { id: 4, message: 'Yo', likesCount: 0 },
        { id: 5, message: 'Yo', likesCount: 7 },
        { id: 6, message: 'Ivan.hi', likesCount: 2 },
    ],
    newPostText: ''

} 
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_POST: 
        let newPost = {
            id: 7,
            message: state.newPostText,
            likesCount: 1
        };
        return{
            ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
    };
        
    case  UPDATE_NEW_POST_TEXT: 
        return {
            ...state,
            newPostText: action.newText
        };
        
        default:
            return state; 
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
    
export default profileReducer;