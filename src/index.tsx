import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '~/store';
import Issues from '~/moduleIssue/components/Issues';

ReactDOM.render(
	<Provider store={store}>
		<Issues />
	</Provider>,
	document.getElementById('root'),
);
