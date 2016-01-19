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

		this.pageHeight = 0
		this.currentScrollPos = 0
	}
	render() {

		var content = AppStore.pageContent()
		var videos = content.videos.map((item, index)=>{
			
			var side = Utils.IsEven(index) ? 'left' : 'right'
			var classes = 'video-item clear-float ' + side
			var screenshotPath = 'image/video-screens/' + item.imgname
			var videoPath = 'video/architecture/' + item.filename
			var src_mp4 = videoPath + '.mp4'
			return(
				<div key={index} className={classes}>
					<div className="title">{item.title}</div>
					<div className="media">
						<video width='100%'>
							<source type='video/mp4' src={src_mp4} autoPlay></source>
						</video>
					</div>
					<div className="description" dangerouslySetInnerHTML={ { __html:item.description } }></div>
				</div>
			)
		})

		return this.getBasePageDom(
			<div className='inside-wrapper'>
				<div ref='videos-container' className="videos-container">
					{videos}
				</div>
			</div>
		)

	}
	componentDidMount() {

		this.videosContainer = React.findDOMNode(this.refs['videos-container'])

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
	    	var video = dom(item).select('video')[0]
	    	this.videoItems[i] = {
    			el: item,
    			video: video,
    			mediaEl: dom(item).select('.media')[0],
    			titleEl: dom(item).select('.title')[0],
    			descriptionEl: dom(item).select('.description')[0],
    			isPlaying: false,
    			index: i
    		}
	    };

  		super.componentDidMount()
	}
	checkVideosViewportFocus() {
		var windowH = AppStore.Window.h
		var scrollt = scrolltop()
		var margin = windowH * 0.1
		for (var i = 0; i < this.videoItems.length; i++) {
			var item = this.videoItems[i]
			if(scrollt + windowH > item.top + ( margin * 2 ) && scrollt < item.top + item.size[1] - margin) {
				if(item.isPlaying != true) {
					item.video.play()
					item.tl.play(0)
					item.isPlaying = true
				}
			}else{
				if(item.isPlaying != false) {
					item.video.pause()
					item.video.currentTime = 0
					item.tl.reverse()
					item.isPlaying = false
				}
			}
		};
	}
	update() {
		var windowH = AppStore.Window.h
	    
	    // get scrolltop position
	    this.currentScrollPos = scrolltop()

	    // update mc current frame
	    var currentFrame = Math.floor( ( this.currentScrollPos / this.pageHeight ) * this.bg.totalFrames )
	    if(currentFrame > this.bg.totalFrames) currentFrame = this.bg.totalFrames
	    if(currentFrame < 0) currentFrame = 0
	    this.bg.mc.gotoAndStop(currentFrame)

	    this.checkVideosViewportFocus()

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

		setTimeout(()=>{
			this.pageHeight = 0
			var scrollt = scrolltop()
			var marginTop = 240
			var marginBottom = 240
			for (var i = 0; i < this.videoItems.length; i++) {
				var item = this.videoItems[i]
				var itemSize = size(item.el)
				var h = itemSize[1] + (marginTop + marginBottom)
				item.size = itemSize
				item.top = this.pageHeight + marginTop
				item.el.style.top = (this.pageHeight + marginTop) + 'px'
				if(dom(item.el).hasClass('right')) item.el.style.left = this.videosContainer.offsetWidth - itemSize[0] + 'px'
				item.y = 0
				
				item.pLines = new SplitText(item.descriptionEl, { type:'lines' }).lines
				item.titleChars = Utils.TranformArrayFromMiddleAndOut(new SplitText(item.titleEl, { tyle:'chars' }).chars)

				item.tl = new TimelineLite()
				item.tl.staggerFrom(item.titleChars, 1, { opacity:0, y:20, scaleY:0.8, force3D:true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.05, 0.3)
				item.tl.from(item.video, 1, { opacity:0, y:20, scaleY:2, force3D:true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.5)
				item.tl.staggerFrom(item.pLines, 1, { opacity:0, y:20, scaleY:0.8, force3D:true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.05, 0.8)
				item.tl.pause(0)

				item.isPlaying = false

				this.pageHeight += h
			};
			this.videosContainer.style.height = this.pageHeight + 'px'
			this.pageHeight -= windowH

		}, 0)

		super.resize()
	}
}

