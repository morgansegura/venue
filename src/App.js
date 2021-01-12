import React from 'react'
import {
	Featured,
	Footer,
	Header,
	Highlights,
	Location,
	Pricing,
	Venue,
} from './components'
import './resources/styles.css'

function App() {
	return (
		<div className='main'>
			<Header />
			<Featured />
			<Venue />
			<Highlights />
			<Pricing />
			<Location />
			<Footer />
		</div>
	)
}

export default App
