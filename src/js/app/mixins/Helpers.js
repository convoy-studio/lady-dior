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
        
        var g = new PIXI.Graphics()
        g.beginFill(0xffffff, 0.1)
        g.lineStyle(1, 0x000000, 1)
        g.drawCircle(0, 0, radius)
        g.endFill()

        container.addChild(g)

        return {
            container: container,
            g: g
        }
    }, 

    getGravityRect: function(url, width, height) {
       var container = new PIXI.Container()
        
        var g = new PIXI.Graphics()
        g.beginFill(0xffffff, 0.1)
        g.lineStyle(1, 0x000000, 1)
        g.drawRect(-width / 2, -height / 2, width, height)
        g.endFill()

        container.addChild(g)

        return {
            container: container,
            g: g
        } 
    }

}

export default Helpers