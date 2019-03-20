import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import IssuesList from './issue/components/IssuesList';

ReactDOM.render(
	<Provider store={store}>
		<IssuesList />
	</Provider>,
	document.getElementById('root'),
);
