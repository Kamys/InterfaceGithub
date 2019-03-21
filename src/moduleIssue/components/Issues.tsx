import { Component } from 'react';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IssuesList from './IssuesList';
import actions from '../actions';
import IssuesSearch from './IssuesSearch';

export interface IState {

}

export interface IProps {

}

const mapStateToProps = (state: IRootState) => ({
	issues: state.issue.issues,
});

const mapDispatchToProps = dispatch => ({
	loadingRequest: bindActionCreators(actions.loadingRequest, dispatch),
});

type injectProps = ReturnType<typeof mapStateToProps>;
type injectActions = ReturnType<typeof mapDispatchToProps>;

class Issues extends Component<IProps & injectProps & injectActions, IState> {

	state: IState = {};

	loadingIssues = searchValue => {
		this.props.loadingRequest(searchValue);
	}

	render() {

		const { issues } = this.props;

		return (
			<>
				<IssuesSearch onSearch={this.loadingIssues}/>
				<IssuesList issues={ issues }/>
			</>
		);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(Issues);