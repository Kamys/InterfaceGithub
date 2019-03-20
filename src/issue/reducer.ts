import { createReducer } from 'redux-act';
import actions from './actions';
import { IIssues } from './interfaces';

export interface IStateIssues {
	issues: IIssues[];
}

const defaultState: IStateIssues = {
	issues: [],
};

const counterReducer = createReducer({}, defaultState);

counterReducer.on(actions.loadingRequest, (state, payload) => ({
	...state,
	...payload,
}));

export default counterReducer;