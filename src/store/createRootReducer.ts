import { combineReducers } from 'redux';
import issue from '~/moduleIssue/reducer';
import { connectRouter } from 'connected-react-router';

const appReducers = history => combineReducers({
	router: connectRouter(history),
	issue,
});

export default appReducers;