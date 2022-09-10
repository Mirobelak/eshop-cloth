import {compose, createStore, applyMiddleware} from "redux"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import logger from "redux-logger"
import { rootReducer } from "./root-reducer"
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from "./root-saga"


const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]

}

const middleWares = [logger, sagaMiddleware]


const persistedReducer = persistReducer(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
