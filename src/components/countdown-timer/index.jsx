import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
	const deadline = 'Jan, 18, 2021'
	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [hours, setHours] = useState(0)
	const [days, setDays] = useState(0)

	const getTimeUntil = deadline => {
		const time = Date.parse(deadline) - Date.parse(new Date())
		if (time < 0) {
			console.log('Done son')
		} else {
			const sec = Math.floor((time / 1000) % 60)
			const min = Math.floor((time / 1000 / 60) % 60)
			const hrs = Math.floor((time / (1000 * 60 * 60)) % 24)
			const ds = Math.floor(time / (1000 * 60 * 60 * 24))

			setSeconds(sec)
			setMinutes(min)
			setHours(hrs)
			setDays(ds)
		}
	}
	useEffect(() => {
		setInterval(() => getTimeUntil(deadline), 100)
	})

	return (
		<div className='countdown_wrapper'>
			<div className='countdown_top'>Event Starts in</div>
			<div className='countdown_bottom'>
				<div className='countdown_item'>
					<div className='countdown_time'>{days}</div>
					<div className='countdown_tag'>Days</div>
				</div>
				<div className='countdown_item'>
					<div className='countdown_time'>{hours}</div>
					<div className='countdown_tag'>Hrs</div>
				</div>
				<div className='countdown_item'>
					<div className='countdown_time'>{minutes}</div>
					<div className='countdown_tag'>Min</div>
				</div>
				<div className='countdown_item'>
					<div className='countdown_time'>{seconds}</div>
					<div className='countdown_tag'>Sec</div>
				</div>
			</div>
		</div>
	)
}

export default CountdownTimer
