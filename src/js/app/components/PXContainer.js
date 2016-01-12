import React from 'react'
import dom from 'domquery'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'

export default class PXContainer extends React.Component {
	constructor(props) {
		super(props)
		this.add = this.add.bind(this)
		this.remove = this.remove.bind(this)
		AppStore.on(AppConstants.ADD_PX_CHILD, this.add)
		AppStore.on(AppConstants.REMOVE_PX_CHILD, this.remove)
	}
	render() {
		return (
			<canvas className="canvas-holder"></canvas>
		)
	}
	componentDidMount() {
		var stage = new PIXI.Container()
		var canvas = dom(this.parent).select('.canvas-holder')[0]
		var renderer = new PIXI.CanvasRenderer(0, 0, { view:canvas })
		renderer.backgroundColor = 0xFFFFFF

		this.pixi = {
			canvas: canvas,
			renderer: renderer,
			stage: stage
		}
	}
	add(item) {
		this.pixi.stage.addChild(item.child)
	}
	remove(item) {
		this.pixi.stage.removeChild(item.child)
	}
	resize() {
		var scale = 1
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		this.pixi.canvas.style.width = windowW + 'px'
		this.pixi.canvas.style.height = windowH + 'px'
		this.pixi.renderer.resize(windowW * scale, windowH * scale)
	}
	update() {
		this.pixi.renderer.render(this.pixi.stage)
	}
}
