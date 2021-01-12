import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'

const ButtonDefault = props => (
	<Fragment>
		{props.href && (
			<Button
				className={props.className}
				startIcon={props.startIcon}
				endIcon={props.endIcon}
				color={props.color}
				variant={props.variant}
				size={props.color}
				style={props.style}
				href={props.href}>
				{props.children}
			</Button>
		)}
		{props.to && (
			<Button
				className={props.className}
				startIcon={props.startIcon}
				endIcon={props.endIcon}
				color={props.color}
				variant={props.variant}
				size={props.color}
				style={props.style}
				to={props.to}>
				{props.children}
			</Button>
		)}
		{props.onClick && (
			<Button
				className={props.className}
				startIcon={props.startIcon}
				endIcon={props.endIcon}
				color={props.color}
				variant={props.variant}
				size={props.color}
				style={props.style}
				onClick={props.onClick}>
				{props.children}
			</Button>
		)}
	</Fragment>
)

export default ButtonDefault
