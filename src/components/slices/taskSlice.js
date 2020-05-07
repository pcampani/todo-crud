import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../config';

const initialState = {
	loading: false,
	hasErrors: false,
	tasks: []
};

const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		getTasks(state) {
			state.loading = true;
		},
		getSuccess(state, {payload}) {
			state.loading = false;
			state.tasks = payload;
		},
		displayError(state, {payload}) {
			state.hasErrors = true;
			console.log('Error occurred: ', payload);
		}
	}
});

export const taskSelector = state => state;
export const { getTasks, getSuccess, displayError } = taskSlice.actions;
export default taskSlice.reducer;

export function fetch() {
	return async dispatch => {
		dispatch(getTasks());

		try {
			let tasksLists = [];
			const snapshot = await db.collection('todos').get();
			snapshot.docs.forEach(doc => tasksLists.push({...doc.data(), key:doc.id}));
			dispatch(getSuccess(tasksLists));
		}
		catch(error) {
			dispatch(displayError(error));
		}
	};
}
