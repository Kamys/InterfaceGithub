import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
import createRootReducer from './createRootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const index = preloadedState => {
	const store = createStore(
		createRootReducer(history),
		preloadedState,
		composeWithDevTools(applyMiddleware(
			routerMiddleware(history),
			sagaMiddleware,
		)),
	);

	sagaMiddleware.run(rootSaga);

	return store;

};

export default index;