export const ISSUE_PAGE_ROUTE = {
	main: '/',
	issues: '/:userName/:projectName/issue',
	goIssues: (username, projectName) => `/${username}/${projectName}/issue`,
};