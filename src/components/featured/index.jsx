import React from 'react'

import { Carousel } from '..'

const Featured = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Carousel />
			<div className='artist_name'>
				<div className='wrapper'>The Roots</div>
			</div>
		</div>
	)
}

export default Featured
