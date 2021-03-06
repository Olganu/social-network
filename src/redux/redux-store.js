
import  { combineReducers, createStore } from "redux";
import profieReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';


let reducers = combineReducers({
    profilePage: profieReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer, 
    usersPage: usersReducer, 
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;

