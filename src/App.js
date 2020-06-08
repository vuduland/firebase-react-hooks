import React from 'react';
import './App.css';

import TimesList from './components/times-list';
import AddTimeEntryForm from './components/add-time-entry-form';

function App() {
	return (
		<div className='App'>
			<h1>Just Clock It</h1>
			<TimesList />
			<AddTimeEntryForm />
		</div>
	);
}

export default App;
