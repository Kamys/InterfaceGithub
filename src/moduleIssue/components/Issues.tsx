import { Component, ElementType } from 'react';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';

import actions from '../actions';

export interface IState {

}

export interface IProps extends RouteComponentProps<IssuesSearchParam> {
	render: (issues: IIssues[]) => JSX.Element;
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

const Mian = styled.div`
  margin: 1rem;
`;

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
		const {projectName} = this.props.match.params;

		return (
			<Mian>
				<h2>Project: {projectName}</h2>
				{
					error &&
					<Error>{error}</Error>
					||
					render(issues)
				}
			</Mian>
		);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(Issues);