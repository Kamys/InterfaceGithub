interface IStateIssues {
	issues: IIssues[];
	error: string;
	isLoading: boolean;
}

interface IIssuesSearchParam {
	userName: string;
	projectName: string;
}
