import React from 'react'
import { Element } from 'react-scroll'

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
			<Element name='featured'>
				<Featured />
			</Element>
			<Element name='venue'>
				<Venue />
			</Element>
			<Element name='highlights'>
				<Highlights />
			</Element>
			<Element name='pricing'>
				<Pricing />
			</Element>
			<Element name='location'>
				<Location />
			</Element>
			<Footer />
		</div>
	)
}

export default App
