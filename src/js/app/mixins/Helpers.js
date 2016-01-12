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
    }

}

export default Helpers