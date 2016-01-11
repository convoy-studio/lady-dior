import React from 'react'
import BaseComponent from 'BaseComponent'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import Menu from 'Menu'

export default class FrontContainer extends BaseComponent {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
	}
	render() {
		return (
			<div id='front-container' ref='front-container'>
				<Menu />
			</div>
		)
	}
	didHasherChange() {
		// Update or highlight parts of interface depends the route
	}
}
