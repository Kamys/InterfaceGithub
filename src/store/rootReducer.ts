import { combineReducers } from 'redux';
import issue from '~/moduleIssue/reducer';

const appReducers = combineReducers({
	issue,
});

export default appReducers;