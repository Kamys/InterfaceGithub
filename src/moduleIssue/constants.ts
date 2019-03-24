export const ISSUE_PAGE_ROUTE = {
	main: '/search-issue',
	issues: '/search-issue/:username/:projectName',
	goIssues: (username, projectName) => `/search-issue/${username}/${projectName}`,
};