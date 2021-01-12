import React from 'react'

import Drawer from '@material-ui/core/Drawer'

const SideDrawer = ({ anchor, state, onClick }) => {
	return (
		<Drawer anchor={anchor} open={state[anchor]} onClose={onClick}>
			Some navigation here
		</Drawer>
	)
}

export default SideDrawer
