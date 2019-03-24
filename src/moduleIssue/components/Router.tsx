import { Component } from 'react';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import Container from '~/common/Container';
import actions from '../actions';
import { ISSUE_PAGE_ROUTE } from '../constants';
import IssuesList from './IssuesList';
import IssuesSearch from './IssuesSearch';
import Issues from '~/moduleIssue/components/Issues';

export interface IState {

}

export interface IProps {

}

const mapStateToProps = (state: IRootState) => ({
	issues: state.issue.issues,
	error: state.issue.error,
});

const mapDispatchToProps = dispatch => ({
	issuesActions: bindActionCreators(actions, dispatch),
});

type injectProps = ReturnType<typeof mapStateToProps>;
type injectActions = ReturnType<typeof mapDispatchToProps>;

class Router extends Component<IProps & injectProps & injectActions, IState> {

	loadingIssues = searchValue => {
		this.props.issuesActions.search(searchValue);
	}

	render() {
		return (
			<Container>
				<Route
					path={ISSUE_PAGE_ROUTE.main}
					exact
					render={(props) => <IssuesSearch {...props} onSearch={this.loadingIssues}/>}
				/>
				<Route
					path={ISSUE_PAGE_ROUTE.issues}
					render={(props) => (
						<Issues
							{...props}
							render={(issues) => <IssuesList issues={issues}/>}
						/>
					)}
				/>
			</Container>
		);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(Router);