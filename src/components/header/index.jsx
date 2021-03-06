import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

import { SideDrawer } from '../../components'

const Header = () => {
	const anchor = 'right'
	const [state, setState] = useState({
		right: false,
	})
	const [scrollHeader, setScrollHeader] = useState(false)

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScrollHeader(true)
		} else {
			setScrollHeader(false)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	const toggleDrawer = (anchor, open) => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}
	return (
		<AppBar
			style={{
				backgroundColor: scrollHeader
					? 'rgba(0,0,0,0.5)'
					: 'transparent',
				transition: 'background-color 0.3s ease-out',
				boxShadow: 'none',
				padding: '0.75rem 0',
			}}>
			<Toolbar>
				<IconButton />
				<div className='header_logo'>
					<div className='font_righteous header_logo_venue'>
						The Venue
					</div>
					<div className='header_logo_title'>Musical Events</div>
				</div>
				<IconButton
					arial-label='Menu'
					color='inherit'
					onClick={toggleDrawer(anchor, true)}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
			<SideDrawer
				state={state}
				anchor={anchor}
				onClick={toggleDrawer(anchor, false)}
			/>
		</AppBar>
	)
}

export default Header
