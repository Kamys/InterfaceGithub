import { createReducer } from 'redux-act';

import actions from './actions';

const defaultState: IStateIssues = {
	issues: [],
	error: null,
	isLoading: false,
};

const reducer = createReducer({}, defaultState);

reducer.on(actions.loadingRequest, (state, payload) => ({
	...defaultState,
	isLoading: true,
}));

reducer.on(actions.loadingSuccess, (state, payload) => ({
	...state,
	...payload,
	isLoading: false,
}));

reducer.on(actions.loadingFailure, (state, payload) => ({
	...state,
	...payload,
	isLoading: false,
}));

export default reducer;