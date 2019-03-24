import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createGlobalStyle } from 'styled-components';

import configureStore, { history } from './store';
import App from '~/moduleApp/component/App';

const store = configureStore({});

const GlobalStyle = createGlobalStyle`
  * { 
   font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
		<GlobalStyle />
	</Provider>,
	document.getElementById('root'),
);
