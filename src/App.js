import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/Layout/NavBar';
import MainContent from './components/Layout/MainContent';
import Footer from './components/Layout/Footer';

import './App.css';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		// flexDirection: 'column',
		// minHeight: '100vh',
	},
}));

function App() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CssBaseline />
			<NavBar />
			<MainContent />

			{/* <Footer /> */}
		</div>
	);
}

export default App;
