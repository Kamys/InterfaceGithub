import { Component } from 'react';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import actions from '../actions';
import IssuesList from './IssuesList';
import IssuesSearch from './IssuesSearch';

export interface IState {

}

export interface IProps {

}

const mapStateToProps = (state: IRootState) => ({
	issues: state.issue.issues,
	error: state.issue.error,
});

const mapDispatchToProps = dispatch => ({
	loadingRequest: bindActionCreators(actions.loadingRequest, dispatch),
});

type injectProps = ReturnType<typeof mapStateToProps>;
type injectActions = ReturnType<typeof mapDispatchToProps>;

const Error = styled.div`
  color: red;
`;

const Container = styled.div`
	max-width: 280px;
	margin: 40px auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class Issues extends Component<IProps & injectProps & injectActions, IState> {

	state: IState = {};

	loadingIssues = searchValue => {
		this.props.loadingRequest(searchValue);
	}

	render() {

		const { issues, error } = this.props;

		return (
			<>
				<Container>
					<IssuesSearch onSearch={this.loadingIssues}/>
				</Container>
				<Container>
					<IssuesList issues={issues}/>
					<Error>{error}</Error>
				</Container>
			</>
		);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(Issues);