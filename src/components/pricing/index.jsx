import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import LocalActivityIcon from '@material-ui/icons/LocalActivity'
import { Button } from '..'

const Pricing = () => {
	const boxData = [
		{
			price: '$100',
			seating: 'General',
			description:
				'General Admission (GA) refers to seating or standing areas that are not assigned or reserved, and are occupied on a first-come, first-served basis',
			link: 'https://morgansegura.com',
			delay: 500,
		},
		{
			price: '$200',
			seating: 'Preferred',
			description:
				'Preferred seating option secures access to events before tickets go on sale to the general public.',
			link: 'https://morgansegura.com',
			delay: 0,
		},
		{
			price: '$250',
			seating: 'Platinum',
			description:
				'Official Platinum Seats are premium tickets to concerts and other events made available by artists and Event Organizers through Ticketmaster.',
			link: 'https://morgansegura.com',
			delay: 500,
		},
	]

	const showBoxes = () => {
		return boxData.map(
			({ delay, description, link, price, seating }, i) => (
				<ScrollAnimation
					animateIn='zoomIn'
					delay={delay}
					key={i}
					className='pricing_item'>
					<div className='pricing_inner_wrapper'>
						<div className='pricing_title'>
							<span>{price}</span>
							<span>{seating}</span>
						</div>
						<div className='pricing_description'>{description}</div>
						<div className='pricing_buttons'>
							<Button
								className='button_primary'
								size='large'
								variant='contained'
								startIcon={<LocalActivityIcon />}
								href={link}>
								Purchase Tickets
							</Button>
						</div>
					</div>
				</ScrollAnimation>
			)
		)
	}

	useEffect(() => {
		showBoxes()
	})

	return (
		<div className='bck_black'>
			<div className='center_wrapper pricing_section'>
				<h2>Pricing</h2>
				<div className='pricing_wrapper'>{showBoxes()}</div>
			</div>
		</div>
	)
}

export default Pricing
