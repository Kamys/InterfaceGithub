import { Action } from 'redux-act';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { push } from 'connected-react-router';

import api from '~/api';
import moduleIssue from '~/moduleIssue';
import { ISSUE_PAGE_ROUTE } from '~/moduleIssue/constants';

function* loadingIssues(action: Action<IIssuesSearchParam>) {
	try {
		const { userName, projectName } = action.payload;
		const response: AxiosResponse = yield call(api.issues.loading, userName, projectName);
		yield put(moduleIssue.actions.loadingSuccess({ issues: response.data }));
		yield put(moduleIssue.actions.loadingSuccess({ issues: response.data }));
	} catch (error) {
		yield put(moduleIssue.actions.loadingFailure({ error: error.response.data.message }));
	}
}

function* search(action: Action<IIssuesSearchParam>) {
	const { userName, projectName } = action.payload;
	yield put(push(ISSUE_PAGE_ROUTE.goIssues(userName, projectName)));
}

function* watcher() {
	yield all([
		takeEvery(moduleIssue.actions.loadingRequest, loadingIssues),
		takeEvery(moduleIssue.actions.search, search),
	]);
}

export default [watcher];