import React, { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Footer = () => {
	const footerDetails = () => (
		<ScrollAnimation animateIn='fadeIn' delay={250}>
			<div className='font_righteous footer_logo_venue'>The Venue</div>
			<div className='footer_copyright'>
				The Venue. {new Date().getFullYear()} All Rights Reserved
			</div>
		</ScrollAnimation>
	)

	useEffect(() => {
		footerDetails()
	})
	return (
		<footer className='bck_red'>
			<div className='font_righteous footer_logo_venue'>The Venue</div>
			<div className='footer_copyright'>
				The Venue. {new Date().getFullYear()} All Rights Reserved
			</div>
		</footer>
	)
}

export default Footer
