import * as React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

interface IProps {
	issues: IIssues[];
}

const Issue = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding-bottom: 10px;
`;

const Title = styled.a`
 font-size: 16px;
 font-weight: 600;
 color: black;
 text-decoration: none;
`;

const SubText = styled.span`
 display: flex;
 justify-content: space-between;
 color: #586069;
`;

const IssuesList = (props: IProps) => {

	const { issues } = props;

	return (
		<>
			{
				issues.map(issue => (
					<Issue key={issue.number}>
						<Title target='_blank' href={issue.html_url}>
							{issue.title}
						</Title>
						<SubText>
							<div>#{issue.number}</div>
							<div>{moment(issue.created_at).format('YYYY-MM-DD')}</div>
						</SubText>
					</Issue>
				))
			}
		</>
	);
};

export default IssuesList;