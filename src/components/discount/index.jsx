import React, { useState, useEffect, useCallback } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import LocalActivityIcon from '@material-ui/icons/LocalActivity'

import { Button } from '..'

const Discount = () => {
	const [count, setCount] = useState(0)

	const handlePercentage = useCallback(() => {
		let start = 0
		const end = 30
		if (start === end) return

		let timer = setInterval(() => {
			start += 1
			setCount(String(start))
			if (start === end) clearInterval(timer)
		}, 50)
	}, [])

	useEffect(() => {
		handlePercentage()
	}, [handlePercentage])

	return (
		<div className='center_wrapper'>
			<div className='discount_wrapper'>
				<ScrollAnimation
					onReveal={handlePercentage}
					animateIn='fadeIn'
					delay={500}>
					<div className='discount_percentage'>
						<span className=''>{count}%</span>
						<span className=''>OFF</span>
					</div>
				</ScrollAnimation>
				<ScrollAnimation animateIn='slideInRight'>
					<div className='discount_description'>
						<h3>Purchase Tickets before Jan 18th</h3>
						<p>
							Tickets only available online. All delivery of
							tickets will be mobile only, there are no exceptions
							and no printed tickets are available. The delivery
							of the mobile tickets will be delayed and will not
							be in your account...
						</p>
						<Button
							className='button_primary'
							size='large'
							variant='contained'
							startIcon={<LocalActivityIcon />}
							href='https://morgansegura.com'>
							Get Tickets
						</Button>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	)
}

export default Discount
