import React from 'react'
import BasePage from 'BasePage'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import dom from 'domquery'

export default class Page extends BasePage {
	constructor(props) {
		super(props)
		this.resize = this.resize.bind(this)
		this.animate = this.animate.bind(this)
	}
	componentWillMount() {
		AppStore.on(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillMount()
	}
	componentDidMount() {

		var canvas = dom(this.parent).select('.canvas-holder')[0]
		var renderer = new PIXI.CanvasRenderer(0, 0, { view:canvas })
		var stage = new PIXI.Container()
		renderer.backgroundColor = 0xFFFFFF

		this.pixi = {
			canvas: canvas,
			renderer: renderer,
			stage: stage
		}

		super.componentDidMount()

		this.animate()
	}
	setupAnimations() {
		super.setupAnimations()
	}
	getBasePageDom(html) {
		var content = AppStore.getCurrentPageMenuItem()
		var id = content.id + '-page'

		return (
			<div id={id} ref='page-wrapper' className='page-wrapper'>

				<canvas className="canvas-holder"></canvas>
				<div className="elements-holder">{html}</div>

			</div>
		)
	}
	animate() {
		this.rAF = requestAnimationFrame(this.animate)

		this.pixi.renderer.render(this.pixi.stage)
	}
	resize() {
		var scale = 1
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		this.pixi.canvas.style.width = windowW + 'px'
		this.pixi.canvas.style.height = windowH + 'px'
		this.pixi.renderer.resize(windowW * scale, windowH * scale)

		super.resize()
	}
	componentWillUnmount() {
		cancelAnimationFrame(this.rAF)
		AppStore.off(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillUnmount()
	}
}
