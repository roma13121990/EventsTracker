import React, {Component} from 'react';
import '../Tests/Styles/App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import HomePage from "../Containers/HomePage";
import {Provider} from "react-redux";
import {Reducer} from "../Reducers/Reducer";
import {createStore} from "redux";
import {loadState, saveState} from "../Utils/LocalStorage";

const persistedState = loadState();

const store = createStore(Reducer, persistedState)

store.subscribe(() => {
    saveState(store.getState())
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomePage} />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
