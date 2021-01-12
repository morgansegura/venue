import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import EventIcon from '@material-ui/icons/Event'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const Venue = () => {
	return (
		<div className='bck_black'>
			<div className='center_wrapper'>
				<div className='vn_wrapper'>
					<ScrollAnimation
						animateIn='zoomIn'
						duration={0.5}
						className='vn_item'>
						<div className='vn_outer'>
							<div className='vn_inner'>
								<div className='vn_icon_square bck_red'></div>
								<div className='vn_icon'>
									<EventIcon style={{ fontSize: '4.5rem' }} />
								</div>
								<div className='vn_title'>
									Event Date & Time
								</div>
								<div className='vn_desc'>
									January 18, 2021 @10.00 pm
								</div>
							</div>
						</div>
					</ScrollAnimation>
					<ScrollAnimation
						animateIn='zoomIn'
						duration={0.5}
						delay={500}
						className='vn_item'>
						<div className='vn_outer'>
							<div className='vn_inner'>
								<div className='vn_icon_square bck_yellow'></div>
								<div className='vn_icon'>
									<LocationOnIcon
										style={{ fontSize: '4.5rem' }}
									/>
								</div>
								<div className='vn_title'>Event Location</div>
								<div className='vn_desc'>
									2050 Entertain Cir, Chula Vista, CA
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	)
}

export default Venue
