import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
	const dispatch = useDispatch();
	const { names } = useSelector(state => state.names);
	const { song } = useSelector(state => state.songData);
	useEffect(() => {
		dispatch({type: 'SET_NAMES'});
		dispatch({type: 'SET_SONG'});
	}, [dispatch]);
	return (
		<div className='App'>
			<div style={{width: 300}}>
				{ names?.map(item => <li>{item.name}</li>) }
				<hr />
				{ song?.map(item => <li>{item.name}</li>) }
			</div>
		</div>
	);
}

export default App;
