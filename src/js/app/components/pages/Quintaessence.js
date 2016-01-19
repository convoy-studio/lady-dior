import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Helpers from 'Helpers'
import Utils from 'Utils'

export default class Quintaessence extends Page {
	constructor(props) {
		super(props)

		this.mouseMove = this.mouseMove.bind(this)
		this.mouseDown = this.mouseDown.bind(this)
		this.mouseUp = this.mouseUp.bind(this)
		this.stageMouseOut = this.stageMouseOut.bind(this)
		this.mouse = { x:0, y:0 }
		this.currentScrollPos = 0
		this.dragVars = {
			startPos: 0,
			force: 0.1,
			direction: 1,
			active: false
		}
	}
	render() {

		var html = (
			<div>
			</div>
		)

		return this.getBasePageDom(html)

	}
	componentDidMount() {

		this.parent = React.findDOMNode(this.refs['page-wrapper'])

		var totalFrames = 159
	    var bagImages = Helpers.getFrameImagesArray(totalFrames, 'image/threesixty/turn_', 'jpg')
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

	    dom(this.parent).on('mousedown', this.mouseDown)
	    dom(this.parent).on('mouseup', this.mouseUp)
	    dom(document).on('mouseout', this.stageMouseOut)

		super.componentDidMount()
	}
	mouseDown(e) {
		dom(window).on('mousemove', this.mouseMove)
		this.dragVars.active = true
		this.dragVars.startPos = e.clientX
	}
	mouseUp() {
		this.disableDrag()
	}
	stageMouseOut(e) {
		e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (!from || from.nodeName == "HTML") {
			this.disableDrag()
        }
	}
	mouseMove(e) {
		var windowW = AppStore.Window.w
		this.mouse.x = e.clientX
		this.mouse.y = e.clientY

		this.dragVars.direction = ( this.mouse.x > this.dragVars.startPos ) ? 1 : -1
		var distance = Math.abs(this.mouse.x - this.dragVars.startPos) / windowW

		this.dragVars.force += (8 * this.dragVars.direction) * Math.min(distance, 100)
	}
	disableDrag() {
		dom(window).off('mousemove', this.mouseMove)
		this.dragVars.active = false
	}
	update() {
		var windowW = AppStore.Window.w

		this.dragVars.force += (0.000001 - this.dragVars.force) * 0.4
	    	
	    // update mc current frame
	    var newFrame = Math.floor(this.bg.currentFrame + this.dragVars.force)
	    this.bg.currentFrame = newFrame
	    if(this.bg.currentFrame > this.bg.totalFrames) this.bg.currentFrame = 0
	    if(this.bg.currentFrame < 0) this.bg.currentFrame = this.bg.totalFrames
	    this.bg.mc.gotoAndStop(this.bg.currentFrame)

		super.update()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		var resizeVals = Utils.ResizePositionProportionally(windowW, windowH, AppConstants.MEDIA_GLOBAL_W, AppConstants.MEDIA_GLOBAL_H)

		this.bg.mc.x = windowW >> 1
		this.bg.mc.y = windowH >> 1
		this.bg.mc.scale.x = this.bg.mc.scale.y = resizeVals.scale

		super.resize()
	}
}

