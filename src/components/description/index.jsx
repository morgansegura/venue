import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Description = () => {
	return (
		<ScrollAnimation animateIn='fadeIn' delay={250}>
			<div className='center_wrapper'>
				<h2>Band Highlights</h2>
				<div className='highlight_description'>
					One of the most prolific rap groups, the Roots were also
					among the most progressive acts in contemporary music, from
					their 1993 debut through their conceptual 2010s releases.
					Despite the seemingly archaic practice of functioning as a
					rap band with several instrumentalists -- from 2007 onward,
					their lineup even featured a sousaphonist -- they were
					ceaselessly creative, whether with their own material or
					through their varied assortment of collaborations. They went
					platinum and gold with successive studio releases and won a
					handful of Grammy Awards. After they gained a nightly
					nationwide audience through a close partnership with
					television host Jimmy Fallon, they continued to challenge
					listeners with works free of genre restrictions.
				</div>
			</div>
		</ScrollAnimation>
	)
}

export default Description
