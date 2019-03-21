import * as React from 'react';

interface IProps {
	issues: IIssues[];
}

const IssuesList = (props: IProps) => {

	const { issues } = props;

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
							{issue.created_at}
						</div>
					</div>
				))
			}
		</div>
	);
};

export default IssuesList;