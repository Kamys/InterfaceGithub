import { createReducer } from 'redux-act';

import actions from './actions';

const defaultState: IStateIssues = {
	issues: [],
};

const reducer = createReducer({}, defaultState);

reducer.on(actions.loadingSuccess, (state, payload) => ({
	...state,
	...payload,
}));

export default reducer;