import { Component, PropsWithRef } from 'react';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

import Container from '~/common/Container';
import actions from '../actions';
import { ISSUE_PAGE_ROUTE } from '../constants';
import IssuesList from './IssuesList';
import IssuesSearch from './IssuesSearch';
import { RouteComponentProps } from 'react-router';

export interface IState {

}

export interface IProps extends RouteComponentProps<IssuesSearchParam> {
	render: (issues: IIssues[]) => React.Component;
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

const Error = styled.div`
  color: red;
`;

class Issues extends Component<IProps & injectProps & injectActions, IState> {

	componentDidMount() {
		const searchValue = this.props.match.params;
		this.props.issuesActions.loadingRequest(searchValue);
	}

	render() {

		const { issues, error, render } = this.props;

		if (error) {
			return <Error>{error}</Error>;
		}

		return render(issues);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(Issues);