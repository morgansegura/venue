import React from 'react'
import { Featured, Header, Highlights, Venue } from './components'
import './resources/styles.css'

function App() {
	return (
		<div className='main'>
			<Header />
			<Featured />
			<Venue />
			<Highlights />
		</div>
	)
}

export default App
