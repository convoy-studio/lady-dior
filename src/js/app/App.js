import AppStore from 'AppStore'
import AppActions from 'AppActions'
import AppTemplate from 'AppTemplate'
import React from 'react'
import Router from 'Router'
import GEvents from 'GlobalEvents'
import Preload from 'Preloader'

class App {
	constructor() {
		this.onMainDataLoaded = this.onMainDataLoaded.bind(this)
	}
	init() {

		// Init global events
		window.GlobalEvents = new GEvents()
		GlobalEvents.init()

		window.Preloader = new Preload()
		Preloader.load({id:'main-data', src: 'data/data.json'}, this.onMainDataLoaded)
		
	}

	onMainDataLoaded() {

		AppStore.Data = Preloader.getContentById('main-data')
		
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
    	
