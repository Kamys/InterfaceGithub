import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState } from 'src/store/rootReducer';
import moduleIssue from 'src/issue';
import { bindActionCreators } from 'redux';

export interface IState {

}

export interface IProps {

}

const mapStateToProps = (state: IRootState) => ({
	issues: state.issue.issues,
});

const mapDispatchToProps = dispatch => ({
	loadingRequest: bindActionCreators(moduleIssue.actions.loadingRequest, dispatch),
});

type injectProps = ReturnType<typeof mapStateToProps>;
type injectActions = ReturnType<typeof mapDispatchToProps>;

class IssuesList extends Component<IProps & injectProps & injectActions, IState> {

	state: IState = {};

	componentDidMount() {
		this.props.loadingRequest({
			issues: [
				{
					number: 1,
					title: 'issues 1',
					dateOpen: 'today',
				},
			],
		});
	}

	render() {

		const {issues} = this.props;

		return (
			<div>
				{
					issues.map(issue => (
						<div key={issue.number}>
							<div>
								{issue.number}
							</div>
							<div>
								{issue.title}
							</div>
							<div>
								{issue.dateOpen}
							</div>
						</div>
					))
				}
			</div>
		);
	}
}

export default connect<injectProps, injectActions, IProps>(mapStateToProps, mapDispatchToProps)(IssuesList);