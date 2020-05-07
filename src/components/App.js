import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Switch, Route } from 'react-router-dom';
import reducer from './slices/taskSlice';
import Dashboard from './Dashboard';
import Navbar from './Navigation/Navbar';

const store = configureStore({reducer});


export default function App() {
	return (
			<Provider store={store}>
				<div>
					<Navbar />
					<Switch>
						<Route path='/' exact component={Dashboard} />
					</Switch>
				</div>
			</Provider>
	);
}