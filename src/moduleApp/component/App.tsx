import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { ISSUE_PAGE_ROUTE } from '~/moduleIssue/constants';
import Issues from '~/moduleIssue/components/Router';
import NotFound from '~/moduleApp/component/NotFound';

const App = () => {
	return (
		<Switch>
			<Route
				path={'/'}
				exact
				render={props => (
					<Redirect
						to={{
							pathname: ISSUE_PAGE_ROUTE.main,
							state: { from: props.location },
						}}
					/>
				)}
			/>
			<Route
				path={ISSUE_PAGE_ROUTE.main}
				component={Issues}
			/>
			<Route component={NotFound}/>
		</Switch>
	);
};

export default App;