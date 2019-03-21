import { Action } from 'redux-act';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '~/api';
import moduleIssue from '~/moduleIssue';

function* loadingIssues(action: Action<{userName: string, projectName: string}>) {
	try {
		const {userName, projectName} = action.payload;
		const response: AxiosResponse = yield call(api.issues.loading, userName, projectName);
		yield put(moduleIssue.actions.loadingSuccess({ issues: response.data }));
	} catch (error) {
		console.log('loadingIssues error: ', error);
	}
}

function* watcher() {
	yield all([
		takeEvery(moduleIssue.actions.loadingRequest, loadingIssues),
	]);
}

export default [watcher];