import React from 'react'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import FrontContainer from 'FrontContainer'
import PagesContainer from 'PagesContainer'

export default class AppTemplate extends React.Component {
	constructor(props) {
		super(props)
		this.resize = this.resize.bind(this)
		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize)
	}
	render() {
		return (
			<div id='app-template'>
				<FrontContainer ref='front-container' />
				<PagesContainer ref='pages-container' />
			</div>
		)
	}
	componentDidMount() {
		GlobalEvents.resize()
	}
	resize() {
		this.refs['front-container'].resize()
		this.refs['pages-container'].resize()
	}
}
