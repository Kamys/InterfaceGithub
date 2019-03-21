import { fork } from 'redux-saga/effects';
import moduleIssue from '~/moduleIssue';

export default function* rootSaga() {
	yield [
		...moduleIssue.saga.map(fork),
	];
}
