import { createAction } from 'redux-act';
import { IIssues } from './interfaces';

const loadingRequest = createAction<{issues: IIssues[]}>('ISSUES_LOADING_REQUEST');
const loadingSuccess = createAction('ISSUES_LOADING_SUCCESS');
const loadingFailure = createAction('ISSUES_LOADING_FAILURE');

export default {
	loadingRequest,
	loadingSuccess,
	loadingFailure,
};