interface IStateIssues {
	issues: IIssues[];
	error: string;
}

type IssuesSearchParam = { userName: string, projectName: string };
