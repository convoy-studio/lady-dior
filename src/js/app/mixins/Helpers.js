var Helpers = {

    getPXVideo: function(url, width, height, vars) {
        var texture = PIXI.Texture.fromVideo(url)
        texture.baseTexture.source.setAttribute("loop", true)
        var videoSprite = new PIXI.Sprite(texture)
        videoSprite.width = width
        videoSprite.height = height
        return videoSprite
    },

    removeChildrenFromContainer: function(container) {
        var children = container.children
        for (var i = 0; i < children.length; i++) {
            var child = children[i]
            container.removeChild(child)
        };
    },

    getFrameImagesArray: function(frames, baseurl, ext) {
        var array = []
        for (var i = 0; i <= frames; i++) {
            var url = baseurl + i + '.' + ext
            array[i] = url
        };
        return array
    }, 

    getGravityCircle: function(url, radius) {
        var container = new PIXI.Container()
        
        var sprite = new PIXI.Sprite.fromImage(url)
        sprite.anchor.x = sprite.anchor.y = 0.5

        var mask = new PIXI.Graphics()
        mask.beginFill(0x000000, 1)
        mask.drawCircle(0, 0, radius)
        mask.endFill()

        sprite.mask = mask
        
        container.addChild(sprite)
        container.addChild(mask)

        return {
            container: container,
            sprite: sprite,
            mask: mask
        }
    }, 

    getGravityRect: function(url, width, height) {
       var container = new PIXI.Container()
        
        var sprite = new PIXI.Sprite.fromImage(url)
        sprite.anchor.x = sprite.anchor.y = 0.5

        var mask = new PIXI.Graphics()
        mask.beginFill(0x000000, 1)
        mask.drawRect(-width / 2, -height / 2, width, height)
        mask.endFill()

        sprite.mask = mask
        
        container.addChild(sprite)
        container.addChild(mask)

        return {
            container: container,
            sprite: sprite,
            mask: mask
        } 
    }

}

export default Helpers