import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk"
const stringEnchancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        if(typeof action === "string") {
            return originalDispatch({
                type: action
            })
        }
        return originalDispatch(action)
    }
    return store;
}
const logEnchancer = (createStore) => (...args) => {
    const store = createStore(...args)
    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log(action.type)
        return originalDispatch(action)
    }
    return store;
}

const logMiddleware = ({getState}) => (next) => (action) => {
    console.log(action.type, getState())
    return next(action)
}

const stringMiddleware = () => (next) => (action)  => {
        if(typeof action === "string"){
            return next({
                type: action
            })
        }

        return next(action)
}



const store = createStore(reducer, applyMiddleware(thunkMiddleware,stringMiddleware, logMiddleware));


const delayedAction = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION',
    }),timeout)
}
store.dispatch(delayedAction(3000))


export default store
