import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from "./reducers"

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const enhancer = composeWithDevTools(applyMiddleware(thunk, createLogger({ collapsed: true })))
const store = createStore(reducers, enhancer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))
registerServiceWorker();
