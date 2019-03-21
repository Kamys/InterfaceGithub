import { Component } from 'react';
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import IssuesList from './IssuesList';
import actions from '../actions';

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

	componentDidMount() {
		this.props.loadingRequest({
			userName: 'kamys',
			projectName: 'actions-preloader',
		});
	}

	render() {

		const { issues } = this.props;

		return (
			<>
				<IssuesList issues={ issues }/>
			</>
		);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(Issues);