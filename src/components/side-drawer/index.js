import React from 'react'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = ({ anchor, state, onClick }) => {
	return (
		<Drawer
			anchor={anchor}
			open={state[anchor]}
			onClose={onClick}
			style={{ backgroundColor: '#393939', width: '290' }}>
			<List components='nav'>
				<ListItem button onClick={() => console.log('Event Times')}>
					Event Times
				</ListItem>
				<ListItem button onClick={() => console.log('Venue Info')}>
					Venue Info
				</ListItem>
				<ListItem button onClick={() => console.log('Highlights')}>
					Highlights
				</ListItem>
				<ListItem button onClick={() => console.log('Pricing')}>
					Pricing
				</ListItem>
				<ListItem button onClick={() => console.log('Location')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	)
}

export default SideDrawer
