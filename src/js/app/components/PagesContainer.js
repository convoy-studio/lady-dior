import React from 'react'
import BasePager from 'BasePager'
import AppConstants from 'AppConstants'
import AppStore from 'AppStore'
import Router from 'Router'
import Home from 'Home'
import WorkOfArt from 'WorkOfArt'
import Architecture from 'Architecture'
import Quintessentially from 'Quintessentially'
import Eclectic from 'Eclectic'
import Stylish from 'Stylish'

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
			case 'work-of-art':
				type = WorkOfArt
				break
			case 'architecture':
				type = Architecture
				break
			case 'quintessentially':
				type = Quintessentially
				break
			case 'eclectic':
				type = Eclectic
				break
			case 'stylish':
				type = Stylish
				break
			default:
				type = Home
		}
		this.setupNewComponent(hash.parent, type)
	}
}


