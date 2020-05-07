import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './slices/taskSlice';
import Dashboard from './Dashboard';

const store = configureStore({reducer});


export default function App() {
	return (
			<Provider store={store}>
				<Dashboard />
			</Provider>
	);
}