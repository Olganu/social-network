import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

// let rendereEntireTree = (state) => {
    ReactDOM.render(
        
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App
                        // state={state}
                        // dispatch={store.dispatch.bind(store)}
                        // store={store}
                    />
                </React.StrictMode>,
                </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }
// rendereEntireTree(store.getState());

// store.subscribe(() => {
//     let state = store.getState();
//     rendereEntireTree(state);
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
