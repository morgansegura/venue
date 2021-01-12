import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

import SideDrawer from '../side-drawer'

const useStyles = makeStyles({
	list: {
		width: 290,
	},
	fullList: {
		width: 'auto',
	},
})

const Header = () => {
	const anchor = 'right'
	const [state, setState] = React.useState({
		right: false,
	})
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
			position='fixed'
			style={{
				backgroundColor: '#2f2f2f',
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
