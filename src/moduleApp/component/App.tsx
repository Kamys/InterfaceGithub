import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ISSUE_PAGE_ROUTE } from '~/moduleIssue/constants';
import Issues from '~/moduleIssue/components/Router';
import NotFound from '~/moduleApp/component/NotFound';

const App = () => {
	return (
		<Switch>
			<Route
				path={ISSUE_PAGE_ROUTE.main}
				component={Issues}
			/>
			<Route component={NotFound}/>
		</Switch>
	);
};

export default App;