import React from 'react'
import AppStore from 'AppStore'
import size from 'element-size'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Utils from 'Utils'

export default class Menu extends React.Component {
	constructor(props) {
		super(props)

		this.mouseEnter = this.mouseEnter.bind(this)
		this.mouseLeave = this.mouseLeave.bind(this)
		this.click = this.click.bind(this)
	}
	render() {
		var menuData = AppStore.menuContent()
		var menuItems = menuData.map((item, index)=>{
			var pathUrl = '#' + item.url
			return(
				<li id={item.id} key={index}>
					<a href={pathUrl}>
						<div className="latin-num">{item['latin-num']}</div>
						<div className="title">{item.name}</div>
						<div className="line"></div>
					</a>
				</li>
			)
		})
		return (
			<div ref='menu' id='menu'> 
				{menuItems}
			</div>
		)
	}
	componentDidMount() {
		this.parent = React.findDOMNode(this.refs['menu'])
		
		this.items = []
		var btns = dom(this.parent).select('li')
		for (var i = 0; i < btns.length; i++) {
			var btn = btns[i]
			var title = dom(btn).select('.title')[0]
			var chars = Utils.TranformArrayFromMiddleAndOut(new SplitText(title, { type:'chars' }).chars)
			
			var tl = new TimelineLite()
			tl.staggerFrom(chars, 1, { opacity:0, y:10, scaleY:0.8, force3D:true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.01, 0)
			tl.pause(0)

			var tlHome = new TimelineLite()
			tlHome.staggerTo(chars, 1, { y:-10, force3D:true, transformOrigin: '50% 0%', ease: Expo.easeOut }, 0.01, 0)
			tlHome.pause(0)

			dom(btn).on('mouseenter', this.mouseEnter)
			dom(btn).on('mouseleave', this.mouseLeave)
			dom(btn).on('click', this.click)

			this.items[i] = {
				el: btn,
				id: btn.id,
				tl: tl,
				tlHome: tlHome,
				highlight: false
			}
		}
	}
	mouseEnter(e) {
		e.preventDefault()
		var item = this.getItemById(e.currentTarget.id)
		var currentPageId = AppStore.getCurrentPageMenuItem().id

		if(currentPageId != 'home') {
			if(!item.highlight) {
				dom(item.el).addClass('hovered')
				dom(item.el).removeClass('disable')
				item.tl.timeScale(1.6).play(0)
			}
		}else{
			dom(item.el).addClass('hovered-home')
			item.tlHome.timeScale(2).play(0)
		}

	}
	mouseLeave(e) {
		e.preventDefault()
		var item = this.getItemById(e.currentTarget.id)
		var currentPageId = AppStore.getCurrentPageMenuItem().id

		if(currentPageId != 'home') {
			if(!item.highlight) {
				dom(item.el).removeClass('hovered')
				dom(item.el).addClass('disable')
				item.tl.timeScale(2).reverse()
			}
		}else{
			dom(item.el).removeClass('hovered-home')
			item.tlHome.timeScale(3).reverse()
		}
	}
	click(e) {
		var item = this.getItemById(e.currentTarget.id)
		item.tl.timeScale(1.6).reverse()
		item.tlHome.timeScale(1.6).reverse()
	}
	highlightByItem(item) {

		// if Home remove all highlights and return
		if(item.id == 'home') {
			for (var i = 0; i < this.items.length; i++) {
				var btn = this.items[i]
				this.highlightToHomeState(btn)
			};
			return
		}

		for (var i = 0; i < this.items.length; i++) {
			var btn = this.items[i]
			if(btn.id == item.id) this.addHighlight(btn)
			else this.removeHighlight(btn)
		};
	}
	addHighlight(item) {
		setTimeout(()=>{
			dom(item.el).addClass('enable')
			dom(item.el).removeClass('disable')
			dom(item.el).removeClass('hovered-home')
			item.highlight = true
			item.tl.timeScale(2).reverse()
		}, 1000)
	}
	removeHighlight(item) {
		dom(item.el).removeClass('enable')
		dom(item.el).addClass('disable')
		dom(item.el).removeClass('hovered-home')
		item.highlight = false
		item.tl.timeScale(2).reverse()
	}
	highlightToHomeState(item) {
		setTimeout(()=>{
			dom(item.el).removeClass('enable')
			dom(item.el).removeClass('disable')
			item.tl.timeScale(1).play(0)
		}, 1000)
		item.highlight = false
	}
	getItemById(id) {
		for (var i = 0; i < this.items.length; i++) {
			var item = this.items[i]
			if(item.id == id) {
				return item
			}
		};
	}
	transitionIn() {
		dom(this.parent).addClass('transition-in')
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		var parentSize = size(this.parent)
		var parentCss = {
			left: (windowW >> 1) - (parentSize[0] >> 1) + 'px',
			top: windowH - (parentSize[1]) - AppConstants.OVERALL_MARGIN + 'px'
		}
		dom(this.parent).style(parentCss)
	}
}