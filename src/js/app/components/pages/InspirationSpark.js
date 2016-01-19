import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'

export default class InspirationSpark extends Page {
	constructor(props) {
		super(props)
	}
	render() {

		return this.getBasePageDom(
			<div>

			</div>
		)

	}
	componentDidMount() {
		super.componentDidMount()
	}
	animate() {
		super.animate()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}
}

