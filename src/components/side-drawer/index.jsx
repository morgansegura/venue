import React from 'react'
import { scroller } from 'react-scroll'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = ({ anchor, state, onClick }) => {
	const scrollToSection = el => {
		scroller.scrollTo(el, {
			duration: 1500,
			delay: 100,
			smooth: true,
		})
	}

	return (
		<Drawer anchor={anchor} open={state[anchor]} onClose={onClick}>
			<List components='nav'>
				<div className='font_righteous sidedrawer_logo_venue'>
					The Venue
				</div>
				<ListItem button onClick={() => scrollToSection('featured')}>
					Event Times
				</ListItem>
				<ListItem button onClick={() => scrollToSection('venue')}>
					Venue Info
				</ListItem>
				<ListItem button onClick={() => scrollToSection('highlights')}>
					Highlights
				</ListItem>
				<ListItem button onClick={() => scrollToSection('pricing')}>
					Pricing
				</ListItem>
				<ListItem button onClick={() => scrollToSection('location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	)
}

export default SideDrawer
