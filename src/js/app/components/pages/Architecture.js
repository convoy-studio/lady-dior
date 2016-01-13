import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
import scrolltop from 'simple-scrolltop'
import size from 'element-size'
import Helpers from 'Helpers'

export default class Architecture extends Page {
	constructor(props) {
		super(props)

		this.pageHeight = 1000
		this.currentScrollPos = 0
	}
	render() {

		var content = AppStore.pageContent()
		var videos = content.videos.map((item, index)=>{
			
			var side = Utils.IsEven(index) ? 'left' : 'right'
			var classes = 'video-item clear-float ' + side
			var screenshotPath = 'image/video-screens/' + item.imgname
			return(
				<div key={index} className={classes}>
					<div className="title">{item.title}</div>
					<div className="screenshot"><img src={screenshotPath} /></div>
					<div className="description">{item.description}</div>
				</div>
			)
		})

		return this.getBasePageDom(
			<div className='inside-wrapper'>
				<div className="videos-container">
					{videos}
				</div>
			</div>
		)

	}
	componentDidMount() {

	    var totalFrames = 159
	    var bagImages = Helpers.getFrameImagesArray(totalFrames, 'image/bag-sequence/turn_', 'jpg')
	    var mc = PIXI.extras.MovieClip.fromImages(bagImages)
        mc.anchor.x = 0.5
        mc.anchor.y = 0.5
	    mc.gotoAndStop(0)
	    this.container.addChild(mc)
	    
	    this.bg = {
	    	mc: mc,
	    	totalFrames: totalFrames
	    }

	    this.videoItems = []
	    var items = dom(this.parent).select('.video-item')
	    for (var i = 0; i < items.length; i++) {
	    	var item = items[i]
	    	this.videoItems[i] = {
    			el: item
    		}
	    };

		super.componentDidMount()
	}
	update() {
		var windowH = AppStore.Window.h
	    
	    // get scrolltop position
	    this.currentScrollPos = scrolltop()

	    // update mc current frame
	    var currentFrame = Math.floor( ( this.currentScrollPos / ( this.pageHeight + windowH ) ) * this.bg.totalFrames )
	    this.bg.mc.gotoAndStop(currentFrame)

		super.update()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		var parentSize = size(this.parent)
		var resizeVals = Utils.ResizePositionProportionally(windowW, windowH, AppConstants.MEDIA_GLOBAL_W, AppConstants.MEDIA_GLOBAL_H)

		this.bg.mc.x = windowW >> 1
		this.bg.mc.y = windowH >> 1
		this.bg.mc.scale.x = this.bg.mc.scale.y = resizeVals.scale

		this.pageHeight = 0
		for (var i = 0; i < this.videoItems.length; i++) {
			var item = this.videoItems[i]
			var h = item.el.clientHeight
			this.pageHeight += h
		};

		super.resize()
	}
}

