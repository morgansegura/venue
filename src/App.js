import React from 'react'
import { Featured, Header, Highlights, Pricing, Venue } from './components'
import './resources/styles.css'

function App() {
	return (
		<div className='main'>
			<Header />
			<Featured />
			<Venue />
			<Highlights />
			<Pricing />
		</div>
	)
}

export default App
