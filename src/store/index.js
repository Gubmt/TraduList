import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import translations from './reducers/translations'
import modais from './reducers/modais'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        translations,
        modais 
    }),
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store