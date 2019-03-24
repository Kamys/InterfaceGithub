import { createReducer } from 'redux-act';

import actions from './actions';

const defaultState: IStateIssues = {
	issues: [],
	error: null,
};

const reducer = createReducer({}, defaultState);

reducer.on(actions.loadingRequest, (state, payload) => (defaultState));

reducer.on(actions.loadingSuccess, (state, payload) => ({
	...state,
	...payload,
}));

reducer.on(actions.loadingFailure, (state, payload) => ({
	...state,
	...payload,
}));

export default reducer;