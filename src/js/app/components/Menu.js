import React from 'react'
import AppStore from 'AppStore'
import size from 'element-size'
import dom from 'domquery'
import AppConstants from 'AppConstants'

export default class Menu extends React.Component {
	constructor(props) {
		super(props)
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
			this.items[i] = {
				el: btn,
				id: btn.id
			}
		};
	}
	highlightByItem(item) {

		if(item.id == 'home') {
			for (var i = 0; i < this.items.length; i++) {
				var btn = this.items[i]
				dom(btn.el).removeClass('enable')
				dom(btn.el).removeClass('disable')
			};
			return
		}

		for (var i = 0; i < this.items.length; i++) {
			var btn = this.items[i]
			if(btn.id == item.id) {
				dom(btn.el).addClass('enable')
				dom(btn.el).removeClass('disable')
			} else {
				dom(btn.el).removeClass('enable')
				dom(btn.el).addClass('disable')	
			} 
		};
	}
	removeHighlight() {

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