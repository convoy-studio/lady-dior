import React from 'react'
import Page from 'Page'
import AppStore from 'AppStore'
import dom from 'domquery'
import AppConstants from 'AppConstants'
import Helpers from 'Helpers'
import Utils from 'Utils'

export default class CreativityInnovation extends Page {
	constructor(props) {
		super(props)

		this.time = 0
		this.debugMode = false
		this.bodies = []

		this.M = {
			Engine: Matter.Engine,
		    World: Matter.World,
		    Body: Matter.Body,
		    Bodies: Matter.Bodies,
		    Common: Matter.Common,
		    Composites: Matter.Composites,
		    Composite: Matter.Composite,
		    Events: Matter.Events,
		    Mouse: Matter.Mouse,
		    MouseConstraint: Matter.MouseConstraint
		}

		this.explosion = this.explosion.bind(this)
		this.onCollision = this.onCollision.bind(this)
	}
	render() {

		var html = (
			<div>
			</div>
		)

		return this.getBasePageDom(html)

	}
	componentDidMount() {

		this.parent = React.findDOMNode(this.refs['page-wrapper'])

		var el = this.debugMode ? this.parent : undefined
		var engine = this.engine = this.M.Engine.create(el, {
			render: {
				options: {
					showAngleIndicator: true,
					wireframes: true
				}
			}
		});

		engine.world.gravity.x = 0
		engine.world.gravity.y = 0

		this.bg = {
			colors: [
				0xffffff,
				0xf57474,
				0x4A90E2
			],
			springConfig: {
				spring: 0.8,
				friction: 0.7,
				length: 0,
				angle: 0,
			},
			colorGraphic: new PIXI.Graphics(),
			bags: [],
			bagsContainer: new PIXI.Container()
		}
		var content = AppStore.pageContent()
		var bagUrls = content.bagUrls
		for (var i = 0; i < bagUrls.length; i++) {
			var url = 'image/creativity-bags/' + bagUrls[i] + '.png'
			var sprite = new PIXI.Sprite.fromImage(url)
			sprite.anchor.x = sprite.anchor.y = 0.5
			sprite.alpha = 0
			sprite.toPosition = new PIXI.Point(0, 0)
			sprite.velocity = new PIXI.Point(0, 0)
			this.bg.bagsContainer.addChild(sprite)
			this.bg.bags[i] = sprite
		};

		this.container.addChild(this.bg.colorGraphic)
		this.container.addChild(this.bg.bagsContainer)

		var bodyOptions = {
		    frictionAir: 0, 
		    friction: 0,
		    restitution: 0.6
		}

		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h

		var patternPath = 'image/patterns/'
		var patternUrls = [
			'brown-x-pattern.jpg',
			'pattern.jpg',
			'brown-x-pattern.jpg',
			'pattern.jpg',
		]
		var circleRadius = 60

		// Add circles
		for (var i = 0; i < 4; i++) {
			var c = this.M.Bodies.circle(windowW >> 1, windowH >> 1, circleRadius, bodyOptions)
			this.M.World.add(engine.world, c)

			var circle = Helpers.getGravityCircle(patternPath + patternUrls[i], circleRadius)
			this.container.addChild(circle.container)

			circle.body = c

			this.bodies.push(circle)
		}

		var rectW = 200
		var rectH = 60

		// Add rects
		for (var i = 0; i < 4; i++) {
			var r = this.M.Bodies.rectangle(windowW >> 1, windowH >> 1, rectW, rectH, bodyOptions)
			this.M.World.add(engine.world, r)

			var rect = Helpers.getGravityRect(patternPath + patternUrls[i], rectW, rectH)
			this.container.addChild(rect.container)

			rect.body = r

			this.bodies.push(rect)
		};

		// Add Walls
		this.addWalls()

		// run the engine
		this.M.Engine.run(engine)

		this.intervalId = setInterval(this.explosion, 5000)

		this.explosion()

        this.M.Events.on(engine, 'collisionStart', this.onCollision)

		super.componentDidMount()
	}
	onCollision(event) {

		if(this.collisionEnable == false) return
		this.collisionEnable = false
		setTimeout(()=>{ this.collisionEnable = true }, 200)

        var pairs = event.pairs;
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            if(pair.bodyA.isStatic || pair.bodyB.isStatic) return
        	this.updateBgColor()
        	this.updateBag()
        }
	}
	updateBag() {
		var bags = this.bg.bags
		for (var i = 0; i < bags.length; i++) {
			var bag = bags[i]
			bag.alpha = 0
			bag.x = 0
			bag.y = 10
		};
		this.bg.springConfig.length = 60
		var randIndex = Utils.Rand(0, bags.length - 1, 0)
		bags[randIndex].alpha = 1
	}
	updateBgColor() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		var randIndex = Utils.Rand(0, this.bg.colors.length - 1, 0)
		var color = this.bg.colors[randIndex]
		var g = this.bg.colorGraphic
		
		g.clear()
		g.beginFill(color, 1)
		g.drawRect(0, 0, windowW, windowH)
		g.endFill()
	}
	addWalls() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h
		var size = 50
		var wallW = windowW
		var wallH = windowH
		this.M.World.add(this.engine.world, [
			this.M.Bodies.rectangle(0, -size / 2, wallW * 2, size, { isStatic: true }),
			this.M.Bodies.rectangle(-size / 2, 0, size, wallH * 2, { isStatic: true }),
			this.M.Bodies.rectangle(0, windowH + size / 2, wallW * 2, size, { isStatic: true }),
			this.M.Bodies.rectangle(windowW + size / 2, 0, size, wallH * 2, { isStatic: true }),
		]);
	}
	explosion() {
	    var bodies = this.M.Composite.allBodies(this.engine.world);

	    for (var i = 0; i < bodies.length; i++) {
	        var body = bodies[i];

	        if (!body.isStatic) {
	            var forceMagnitude = 0.001 * body.mass;

	            // apply extra force
	            this.M.Body.applyForce(body, { x: 0, y: 0 }, { 
	                x: (forceMagnitude + Math.random() * forceMagnitude) * this.M.Common.choose([1, -1]), 
	                y: -forceMagnitude + Math.random() * -forceMagnitude
	            });

	            // add bounds to velocity
	            var bound = 0.5
	            if(Matter.Vector.magnitude(body.velocity) > bound) {
					this.M.Body.setVelocity(body, { x: Math.min(bound, body.velocity.x), y: Math.min(bound, body.velocity.x) } )
	            }

	            // add bounds to rotation
				if(body.angularSpeed > 0.02) {
		            this.M.Body.setAngularVelocity(body, body.angularVelocity*-0.1);
				}

	        }
	    }
	}
	update() {

		this.time += 0.005
		this.engine.world.gravity.y = Math.sin(this.time) * 0.02

		for (var i = 0; i < this.bodies.length; i++) {
			var body = this.bodies[i]
			body.container.x = body.body.position.x
			body.container.y = body.body.position.y
			body.container.rotation = body.body.angle
		};


		var config = this.bg.springConfig
		var angle = config.angle
		var bags = this.bg.bags
		config.angle += 0.1
		for (var i = 0; i < bags.length; i++) {
			var bag = bags[i]
			Utils.SpringTo(bag, bag.toPosition, i, config)
			bag.x += bag.velocity.x
			bag.y += bag.velocity.y
		};

		config.length += (0.01 - config.length) * 0.5

		super.update()
	}
	resize() {
		var windowW = AppStore.Window.w
		var windowH = AppStore.Window.h

		var resizeVals = Utils.ResizePositionProportionally(windowW, windowH, AppConstants.MEDIA_GLOBAL_W * 0.8, AppConstants.MEDIA_GLOBAL_H * 0.8)

		this.bg.bagsContainer.x = windowW >> 1
		this.bg.bagsContainer.y = ( windowH >> 1 ) - ( windowH * 0.02 )
		this.bg.bagsContainer.scale.x = this.bg.bagsContainer.scale.y = resizeVals.scale

		if(this.debugMode) {
			var canvas = this.engine.render.canvas
			canvas.style.width = windowW + 'px'
			canvas.style.height = windowH + 'px'
			canvas.width = windowW
			canvas.height = windowH
		}

		super.resize()
	}
	componentWillUnmount() {
		super.componentWillUnmount()
		this.M.Events.off(this.engine, 'collisionStart', this.onCollision)
		this.M.Engine.clear(this.engine)
		Helpers.removeChildrenFromContainer(this.bg.bagsContainer)
		for (var i = 0; i < this.bg.bags.length; i++) {
			var bag = this.bg.bags[i]
			bag.destroy()
		};
		clearInterval(this.intervalId)
	}
}

