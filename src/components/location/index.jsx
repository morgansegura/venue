import React from 'react'

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				title='North Island Credit Union Amphitheatre'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.6917690598866!2d-117.00855378385954!3d32.58774338102969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94ec27431a30d%3A0x28f90b2f6e67e678!2sNorth%20Island%20Credit%20Union%20Amphitheatre!5e0!3m2!1sen!2sus!4v1610485557140!5m2!1sen!2sus'
				width='100%'
				height='500'
				frameBorder='0'
				style={{ border: 0 }}
				allowFullScreen=''
				aria-hidden='false'
				tabIndex='0'
			/>
			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	)
}

export default Location
