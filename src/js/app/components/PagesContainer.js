import React from 'react'
import BasePager from 'BasePager'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import Router from 'Router'
import Home from 'Home'
import InspirationSpark from 'InspirationSpark'
import Architecture from 'Architecture'
import Quintaessence from 'Quintaessence'
import CreativityInnovation from 'CreativityInnovation'
import Style from 'Style'

export default class PagesContainer extends BasePager {
	constructor(props) {
		super(props)
		this.didHasherChange = this.didHasherChange.bind(this)
	}
	componentWillMount() {
		AppStore.on(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
		super.componentWillMount()
	}
	componentWillUnmount() {
		AppStore.off(AppConstants.PAGE_HASHER_CHANGED, this.didHasherChange)
		super.componentWillUnmount()
	}
	didHasherChange() {
		var hash = Router.getNewHash()
		var type = undefined

		switch(hash.parent) {
			case 'inspiration-spark':
				type = InspirationSpark
				break
			case 'architecture':
				type = Architecture
				break
			case 'quintaessence':
				type = Quintaessence
				break
			case 'creativity-innovation':
				type = CreativityInnovation
				break
			case 'style':
				type = Style
				break
			default:
				type = Home
		}
		this.setupNewComponent(hash.parent, type)
	}
}


