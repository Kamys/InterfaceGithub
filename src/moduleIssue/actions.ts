import { createAction } from 'redux-act';

const loadingRequest = createAction<IIssuesSearchParam>('ISSUES_LOADING_REQUEST');
const loadingSuccess = createAction<{ issues: IIssues[] }>('ISSUES_LOADING_SUCCESS');
const loadingFailure = createAction<{ error: string }>('ISSUES_LOADING_FAILURE');
const search = createAction<IIssuesSearchParam>('ISSUES_SEARCH');

export default {
	loadingRequest,
	loadingSuccess,
	loadingFailure,
	search,
};