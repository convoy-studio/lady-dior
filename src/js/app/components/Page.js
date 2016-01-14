import React from 'react'
import BasePage from 'BasePage'
import AppStore from 'AppStore'
import AppConstants from 'AppConstants'
import dom from 'domquery'
import Helpers from 'Helpers'
import size from 'element-size'
import scrolltop from 'simple-scrolltop'

export default class Page extends BasePage {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		super.componentWillMount()

		setTimeout(()=>{ AppActions.addPXChild(this.container) }, 0)
	}
	componentDidMount() {
		this.parent = React.findDOMNode(this.refs['page-wrapper'])
		this.elementsHolder = dom(this.parent).select('.elements-holder')[0]
		this.introSlide = dom(this.parent).select('.intro-slide')[0]
		this.frontHolder = dom(this.introSlide).select('.front-holder')[0]
		
		super.componentDidMount()
	}
	willTransitionIn() {
		setTimeout(()=>{
			scrolltop(0)
		}, 1000)
		super.willTransitionIn()
	}
	setupAnimations() {
		// transition In
		this.tlIn.fromTo(this.introSlide, 1, { opacity:0, ease:Expo.easeInOut }, { opacity:1, ease:Expo.easeInOut }, 0)
		this.tlIn.to(this.introSlide, 1, { opacity:0, ease:Expo.easeInOut }, 3)
		this.tlIn.from(this.elementsHolder, 1, { opacity:0, ease:Expo.easeInOut }, 2)
		this.tlIn.from(this.container, 1, { alpha:0, ease:Expo.easeInOut }, 2)

		// transition Out
		this.tlOut.to(this.elementsHolder, 1, { opacity:0, ease:Expo.easeInOut }, 0)
		this.tlOut.to(this.container, 1, { alpha:0, ease:Expo.easeInOut }, 0)

		super.setupAnimations()
	}
	getBasePageDom(html) {
		var content = AppStore.getCurrentPageMenuItem()
		var id = content.id + '-page'

		var frontHolder;
		if(content.id == 'home') {
			frontHolder = 'home'
		}else{
			frontHolder = <div className='title'>{content.name}</div>
		}

		return (
			<div id={id} ref='page-wrapper' className='page-wrapper'>

				<div className="elements-holder">{html}</div>

				<div className="intro-slide">
					<div className="front-holder">{frontHolder}</div>
					<div className="background"></div>
				</div>

			</div>
		)
	}
	update() {
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h

		var titleSize = size(this.frontHolder)
		this.frontHolder.style.left = (windowW >> 1) - (titleSize[0] >> 1) + 'px'
		this.frontHolder.style.top = (windowH >> 1) - (titleSize[1] >> 1) + 'px'

		super.resize()
	}
	componentWillUnmount() {
		
		Helpers.removeChildrenFromContainer(this.container)

		setTimeout(()=>{ AppActions.removePXChild(this.container) }, 0)

		AppStore.off(AppConstants.WINDOW_RESIZE, this.resize)
		super.componentWillUnmount()
	}
}
