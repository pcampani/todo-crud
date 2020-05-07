import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { taskSelector, fetch } from './slices/taskSlice';

export default function Dashboard() {
	const { loading, tasks } = useSelector(taskSelector);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetch());
	},[dispatch]);

	return(
		<>
			<h1>Hello World!!!</h1>
			{console.log(tasks)};
		</>
	);
}
