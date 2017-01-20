require ('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {Provider} from 'react-redux';
import CheeseList from './components/cheese-list';




ReactDOM.render(
	<Provider store={store}>
		<CheeseList  />
	</Provider>, document.getElementById('app')
	
);

console.log(`Client running in ${process.env.NODE_ENV} mode`);
