import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[800],
	},
}));

function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Container maxWidth='sm'>
				<Typography variant='body1'>
					My sticky footer can be found here.
				</Typography>
				<Copyright />
			</Container>
		</footer>
	);
}

export default Footer;
