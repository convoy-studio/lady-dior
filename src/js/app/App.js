import AppStore from 'AppStore'
import AppActions from 'AppActions'
import AppTemplate from 'AppTemplate'
import React from 'react'
import Router from 'Router'
import GEvents from 'GlobalEvents'
import Preload from 'Preloader'
import Data from 'Data'

class App {
	constructor() {
	}
	init() {

		// Init global events
		window.GlobalEvents = new GEvents()
		GlobalEvents.init()

		if ('scrollRestoration' in history) {
			// Back off, browser, I got this...
			history.scrollRestoration = 'manual';
		}

		this.onMainDataLoaded()
	}

	onMainDataLoaded() {

		AppStore.Data = Data
		
		// Init router
		var router = new Router()
		router.init()

		// Render react
		React.render(
			<AppTemplate />,
			document.getElementById('app-container')
		)

		// Start routing
		router.beginRouting()

	}
}

export default App
    	
