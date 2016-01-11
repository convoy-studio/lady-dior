import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'

export default class Eclectic extends Page {
	constructor(props) {
		super(props)
	}
	render() {

		var html = (
			<div>
			</div>
		)

		return this.getBasePageDom(html)

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

