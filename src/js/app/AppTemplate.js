import React from 'react'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import FrontContainer from 'FrontContainer'
import PagesContainer from 'PagesContainer'
import PXContainer from 'PXContainer'

export default class AppTemplate extends React.Component {
	constructor(props) {
		super(props)
		this.animate = this.animate.bind(this)
		this.resize = this.resize.bind(this)
		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize)
	}
	render() {
		return (
			<div id='app-template'>
				<FrontContainer ref='front-container' />
				<PagesContainer ref='pages-container' />
				<PXContainer ref='px-container' />
			</div>
		)
	}
	componentDidMount() {
		GlobalEvents.resize()
		this.animate()
	}
	animate() {
		requestAnimationFrame(this.animate)
		this.refs['px-container'].update()
		this.refs['pages-container'].update()
	}
	resize() {
		this.refs['front-container'].resize()
		this.refs['pages-container'].resize()
		this.refs['px-container'].resize()
	}
}
