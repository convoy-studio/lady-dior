import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
import Helpers from 'Helpers'

export default class InspirationSpark extends Page {
	constructor(props) {
		super(props)

		this.mouse = { x:0, y:0 }
		this.mouseMove = this.mouseMove.bind(this)
	}
	render() {

		return this.getBasePageDom(
			<div>
			</div>
		)

	}
	componentDidMount() {

		this.colorGraphic = new PIXI.Graphics()
		this.container.addChild(this.colorGraphic)

		var totalFrames = 20
	    var bagImages = Helpers.getFrameImagesArray(totalFrames, 'image/sculptures/turn_', 'jpg')
	    var mc = PIXI.extras.MovieClip.fromImages(bagImages)
        mc.anchor.x = 0.5
        mc.anchor.y = 0.5
	    mc.gotoAndStop(0)
	    this.container.addChild(mc)
	    
	    this.bg = {
	    	mc: mc,
	    	totalFrames: totalFrames,
	    	currentFrame: 0
	    }

	    dom(window).on('mousemove', this.mouseMove)

		super.componentDidMount()
	}
	update() {
		var windowW = AppStore.Window.w

	    // update mc current frame
	    var currentFrame = Math.floor( ( this.mouse.x / windowW ) * this.bg.totalFrames )
	    if(currentFrame > this.bg.totalFrames) currentFrame = this.bg.totalFrames
	    if(currentFrame < 0) currentFrame = 0
	    this.bg.mc.gotoAndStop(currentFrame)

		super.update()
	}
	mouseMove(e) {
		e.preventDefault()
		this.mouse.x = e.clientX
		this.mouse.y = e.clientY
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		var resizeVals = Utils.ResizePositionProportionally(windowW, windowH, AppConstants.MEDIA_GLOBAL_W, AppConstants.MEDIA_GLOBAL_H)

		this.bg.mc.x = windowW >> 1
		this.bg.mc.y = windowH >> 1
		this.bg.mc.scale.x = this.bg.mc.scale.y = resizeVals.scale

		var g = this.colorGraphic
		g.clear()
		g.beginFill(0x000000, 1)
		g.drawRect(0, 0, windowW, windowH)
		g.endFill()

		super.resize()
	}
	componentWillUnmount() {
		super.componentWillUnmount()
		dom(window).off('mousemove', this.mouseMove)
		this.bg.mc.destroy()
	}
}

