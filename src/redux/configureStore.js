import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Posts } from './reducers/posts';
import { Users } from './reducers/users';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            posts: Posts,
            users: Users
        }),
       applyMiddleware(thunk, logger)
    );
    return store;
}