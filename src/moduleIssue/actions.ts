import { createAction } from 'redux-act';

const loadingRequest = createAction<{ userName: string, projectName: string }>('ISSUES_LOADING_REQUEST');
const loadingSuccess = createAction<{ issues: IIssues[] }>('ISSUES_LOADING_SUCCESS');
const loadingFailure = createAction('ISSUES_LOADING_FAILURE');

export default {
	loadingRequest,
	loadingSuccess,
	loadingFailure,
};