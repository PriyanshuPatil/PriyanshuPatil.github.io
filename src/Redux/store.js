import { applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux' ;
import { ThemeReducer } from './ThemeReducer/theme.reducer';
import thunk from 'redux-thunk'
const reducer=combineReducers({
    Theme:ThemeReducer
})
const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
export const Store=legacy_createStore(reducer,composer(applyMiddleware(thunk)))