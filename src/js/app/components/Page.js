import React from 'react'
import BasePage from 'BasePage'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import dom from 'domquery'
import Helpers from 'Helpers'

export default class Page extends BasePage {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		super.componentWillMount()

		this.container = new PIXI.Container()
		setTimeout(()=>{ AppActions.addPXChild(this.container) }, 0)
	}
	componentDidMount() {
		super.componentDidMount()
	}
	setupAnimations() {
		super.setupAnimations()
	}
	getBasePageDom(html) {
		var content = AppStore.getCurrentPageMenuItem()
		var id = content.id + '-page'

		return (
			<div id={id} ref='page-wrapper' className='page-wrapper'>

				<div className="elements-holder">{html}</div>

			</div>
		)
	}
	update() {
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		super.resize()
	}
	componentWillUnmount() {
		
		Helpers.removeChildrenFromContainer(this.container)

		setTimeout(()=>{ AppActions.removePXChild(this.container) }, 0)

		AppStore.off(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillUnmount()
	}
}
