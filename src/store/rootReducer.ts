import { combineReducers } from 'redux';

export interface IState {
}

const appReducers = combineReducers({
 app: () => ({}),
});

export default appReducers;