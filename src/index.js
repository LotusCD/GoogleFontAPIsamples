import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//import middlewares
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import actions
import { fetchGoogleApi } from './actions/index';
//import reducers
import rootReducer from './reducers/index'
//import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchGoogleApi());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
