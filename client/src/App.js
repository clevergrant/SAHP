import React, { Component } from 'react'

import { Logo, AppContainer } from './styles.js'

class App extends Component {
	render() {
		return (
			<AppContainer>
				<h3 className='display'>Welcome to Sahp</h3>
				<Logo />
				<p>Sahp - Simple As Humanly Possible</p>
				<p>Sahp is a robust Content Management System that's not only easy for any end-user to pick up and use to create fully functioning websites, but easy for beginner coders to modify from the inside as well.</p>
			</AppContainer>
		)
	}
}

export default App
