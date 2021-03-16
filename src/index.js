import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootStore from './store'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootStore,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

