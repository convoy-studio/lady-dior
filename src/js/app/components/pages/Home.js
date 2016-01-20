import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Helpers from 'Helpers'
import Utils from 'Utils'

export default class Home extends Page {
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
		
		this.pxVideo = Helpers.getPXVideo('video/Triptych - 2.mp4', 1920, 1080)
		this.pxVideo.anchor.x = this.pxVideo.anchor.y = 0.5
		this.container.addChild(this.pxVideo)

		super.componentDidMount()
	}
	update() {
		super.update()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h

		setTimeout(()=>{

			var videoViewport = [ windowW * 0.8, windowH * 0.8 ]
			var resizeVals = Utils.ResizePositionProportionally(videoViewport[0], videoViewport[1], AppConstants.MEDIA_GLOBAL_W, AppConstants.MEDIA_GLOBAL_H)

			this.pxVideo.x = windowW >> 1
			this.pxVideo.y = ( windowH >> 1 ) - ( windowH * 0.01 )
			this.pxVideo.scale.x = this.pxVideo.scale.y = resizeVals.scale

		}, 1000)


		super.resize()
	}
	destroy() {
		this.container.removeChild(this.pxVideo)
		Utils.DestroyVideoTexture(this.pxVideo.texture)
		this.pxVideo.texture.destroy()
	}
	componentWillUnmount() {
		this.destroy()
		super.componentWillUnmount()
	}
}

