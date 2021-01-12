import React from 'react'

import { Carousel, CountdownTimer } from '..'

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carousel />
			<div className='artist_name'>
				<div className='wrapper'>The Roots</div>
			</div>
			<CountdownTimer />
		</div>
	)
}

export default Featured
