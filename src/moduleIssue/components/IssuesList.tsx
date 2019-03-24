import * as React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';

interface IProps {
	issues: IIssues[];
}

const Card = styled.div`
  padding: 1rem;
  width: 400px;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem 1rem 0;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  :hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Title = styled.a`
 font-size: 16px;
 font-weight: 600;
 color: black;
 text-decoration: none;
`;

const SubText = styled.span`
 margin-top: 10px;
 display: flex;
 justify-content: space-between;
 color: #586069;
`;

const List = styled.span`
 display: flex;
 flex-wrap: wrap;
`;

const IssuesList = (props: IProps) => {

	const { issues } = props;

	return (
		<List>
			{
				issues.map(issue => (
					<Card key={issue.number}>
						<Title target='_blank' href={issue.html_url}>
							{issue.title}
						</Title>
						<SubText>
							<div>#{issue.number} opened on {moment(issue.created_at).format('MMM DD, YYYY')}</div>
						</SubText>
					</Card>
				))
			}
		</List>
	);
};

export default IssuesList;