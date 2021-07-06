import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Posts } from './reducers/posts';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: Posts
        }),
       applyMiddleware(thunk, logger)
    );
    return store;
}