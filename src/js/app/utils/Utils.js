class Utils {
	static NormalizeMouseCoords(e, objWrapper) {
		var posx = 0;
		var posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft
				+ document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop
				+ document.documentElement.scrollTop;
		}
		objWrapper.x = posx
		objWrapper.y = posy
		return objWrapper
	}
	static ResizePositionProportionally(windowW, windowH, contentW, contentH) {
		var aspectRatio = contentW / contentH
		var scale = ((windowW / windowH) < aspectRatio) ? (windowH / contentH) * 1 : (windowW / contentW) * 1
		var newW = contentW * scale
		var newH = contentH * scale
		var css = {
			width: newW,
			height: newH,
			left: (windowW >> 1) - (newW >> 1),
			top: (windowH >> 1) - (newH >> 1),
			scale: scale
		}
		
		return css
	}
	static DestroyVideo(video) {
        video.pause();
        video.src = '';
        var children = video.childNodes
        for (var i = 0; i < children.length; i++) {
        	var child = children[i]
        	child.setAttribute('src', '');
        	// Working with a polyfill or use jquery
        	child.remove()
        }
    }
    static DestroyVideoTexture(texture) {
    	var video = texture.baseTexture.source
        Utils.DestroyVideo(video)
    }
    static IsEven(n) {
	   return n % 2 == 0;
	}
	static Rand(min, max, decimals) {
        var randomNum = Math.random() * (max - min) + min
        if(decimals == undefined) {
        	return randomNum
        }else{
	        var d = Math.pow(10, decimals)
	        return ~~((d * randomNum) + 0.5) / d
        }
	}
	static TranformArrayFromMiddleAndOut(array) {
        var newArray = []
        var i = Math.ceil(array.length/2)
        var j = i - 1
        while(j >= 0) {
        	newArray.push(array[j--])
            if(i < array.length) {
            	newArray.push(array[i++])
            }
        }
        return newArray
    }
    static Set(element, vars, animationClass) {
		animationClass = animationClass || 'animate'
		dom(element).removeClass(animationClass)
		TweenLite.set(element, vars)
	}
	static Animate(element, vars, animationClass) {
		animationClass = animationClass || 'animate'
		dom(element).addClass(animationClass)
		vars['force3D'] = true
		TweenLite.set(element, vars)
	}
	static SpringTo(item, toPosition, index, springConfig) {
    	var dx = toPosition.x - item.x
    	var dy = toPosition.y - item.y
		var angle = Math.atan2(dy, dx)
		var targetX = toPosition.x - Math.cos(angle) * (springConfig.length * index)
		var targetY = toPosition.y - Math.sin(angle) * (springConfig.length * index)
		item.velocity.x += (targetX - item.x) * springConfig.spring
		item.velocity.y += (targetY - item.y) * springConfig.spring
		item.velocity.x *= springConfig.friction
		item.velocity.y *= springConfig.friction
    }
    static SpringVal(fromVal, toVal, velocity, angle, friction, spring, length) {
    	var distance = toVal - fromVal
		var target = toVal - Math.cos(angle) * length
		velocity += (target - fromVal) * spring
		velocity *= friction
    }
}

export default Utils
