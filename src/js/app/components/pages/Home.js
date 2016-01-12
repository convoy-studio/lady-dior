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
		this.videosContainer = new PIXI.Container()
		this.videoSprites = []
		var videoUrls = [ 'video/home_a_1_1.mp4', 'video/home_a_1_1.mp4', 'video/home_a_1_1.mp4' ]
		for (var i = 0; i < 3; i++) {
			var videoSprt = Helpers.getPXVideo(videoUrls[i], 320, 510)
			this.videoSprites[i] = videoSprt
			this.videosContainer.addChild(videoSprt);
		};

		this.container.addChild(this.videosContainer);

		super.componentDidMount()
	}
	update() {
		super.update()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h

		var videoH = this.videoSprites[0].height
		this.videosContainer.size = [ windowW * 0.8, videoH ]

		this.videosContainer.x = (windowW >> 1) - (this.videosContainer.size[0] >> 1)
		this.videosContainer.y = (windowH >> 1) - (this.videosContainer.size[1] >> 1) - (windowH * 0.01)

		this.videoSprites[1].x = (this.videosContainer.size[0] >> 1) - (this.videoSprites[1].width >> 1)
		this.videoSprites[2].x = this.videosContainer.size[0] - this.videoSprites[1].width

		super.resize()
	}
	destroy() {
		for (var i = 0; i < this.videoSprites.length; i++) {
			var videoSprt = this.videoSprites[i]
			this.videosContainer.removeChild(videoSprt)
			Utils.DestroyVideoTexture(videoSprt.texture)
			videoSprt.texture.destroy()
		};
	}
	componentWillUnmount() {
		this.destroy()
		super.componentWillUnmount()
	}
}

