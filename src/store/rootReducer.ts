import { combineReducers } from 'redux';
import issue, { IStateIssues } from 'src/issue/reducer';

export interface IRootState {
	issue: IStateIssues;
}

const appReducers = combineReducers({
	issue,
});

export default appReducers;