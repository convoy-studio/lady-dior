import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Utils from 'Utils'
import Helpers from 'Helpers'

export default class Style extends Page {
	constructor(props) {
		super(props)

		this.onMouseMove = this.onMouseMove.bind(this)
		this.removeSprite = this.removeSprite.bind(this)

		this.textures = []
		this.mouse = { x:0, y:0 }
		this.activeSprites = []
		this.addSpriteIsActive = true
	}
	render() {

		var html = (
			<div>
			</div>
		) 	

		return this.getBasePageDom(html)

	}
	componentDidMount() {

		this.imagesContainer = new PIXI.Container()
		this.bg = new PIXI.Sprite(PIXI.Texture.fromImage('image/bag-static.jpg'))

		this.bg.anchor.x = 0.5
		this.bg.anchor.y = 0.5

		this.container.addChild(this.bg)
		this.container.addChild(this.imagesContainer)

		this.intervalId = setInterval(this.removeSprite, 75)
		dom(window).on("mousemove", this.onMouseMove)
		this.counter = 0

		this.loadImages()

		super.componentDidMount()
	}
	loadImages() {
		var pageContent = AppStore.pageContent()
		var imageSrcs = pageContent.images
		for (var i = 0; i < imageSrcs.length; i++) {
			var filename = imageSrcs[i]
			var texture = PIXI.Texture.fromImage('image/style-images/' + filename);
			this.textures.push(texture)
		};
	}
	addSprite() {
		var randomNum = Utils.Rand(0, this.textures.length-1, 0)
		var texture = this.textures[randomNum]
		if(texture == undefined) return
		var sprite = new PIXI.Sprite(texture)
		var container = new PIXI.Container()
		var shape = new PIXI.Graphics()
		var size = 25
		shape.lineStyle(1, 0x0000ff, 1)
		shape.drawRect(-size/2, -size/2, size, size)
		container.addChild(sprite)
		container.addChild(shape)
		sprite.anchor.x = 0.5
		sprite.anchor.y = 0.5
		sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY
		container.position.x = this.mouse.x
		container.position.y = this.mouse.y
		this.activeSprites.push({
			sprite: sprite,
			container: container
		})
		this.imagesContainer.addChild(container)
	}
	removeSprite() {
		if(this.activeSprites.length <= 1) return
		var spriteToRemove = this.activeSprites.shift()
		this.imagesContainer.removeChild(spriteToRemove.container)
		spriteToRemove.container.destroy()
		spriteToRemove.sprite.destroy()
	}
	onMouseMove(e) {
		e.preventDefault()
		var windowH = AppStore.Window.h
		if(e.clientY > windowH * 0.8) return 
		this.mouse.x = e.clientX
		this.mouse.y = e.clientY
		if(this.addSpriteIsActive) {
			this.addSpriteIsActive = false
			setTimeout(()=>{
				this.addSpriteIsActive = true
				this.addSprite()
			}, 60)
		}
	}
	update() {
		for (var i = 0; i < this.activeSprites.length; i++) {
			var active = this.activeSprites[i]
			var container = active.container
			container.position.y -= 1
		};
		super.update()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h

		var resizeVals = Utils.ResizePositionProportionally(windowW, windowH, AppConstants.MEDIA_GLOBAL_W, AppConstants.MEDIA_GLOBAL_H)

		this.bg.x = windowW >> 1
		this.bg.y = windowH >> 1
		this.bg.scale.x = this.bg.scale.y = resizeVals.scale

		super.resize()
	}
	componentWillUnmount() {
		super.componentWillUnmount()	
		Helpers.removeChildrenFromContainer(this.imagesContainer)
		dom(window).off("mousemove", this.onMouseMove)
		clearInterval(this.intervalId)
	}
}

