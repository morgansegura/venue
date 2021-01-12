import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const Header = () => {
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
					onClick={() => console.log('open')}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}

export default Header
