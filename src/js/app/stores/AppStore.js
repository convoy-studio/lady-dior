import AppDispatcher from 'AppDispatcher'
import AppConstants from 'AppConstants'
import {EventEmitter2} from 'eventemitter2'
import assign from 'object-assign'
import Router from 'Router'

function _pageRouteIdChanged(id) {
}
function _getPageContent() {
    var hashObj = Router.getNewHash()
    var hash = hashObj.hash.length < 1 ? '/' : hashObj.hash
    var content = AppStore.Data.routing[hash]
    return content
}
function _getMenuContent() {
    return AppStore.Data.menu
}
function _getMenuItemById(id) {

    var menuItems = AppStore.Data.menu
    for (var i = 0; i < menuItems.length; i++) {
        if(menuItems[i].id == id) {
            return item
        }
    };

}
function _getCurrentPageMenuItem() {

    var hashObj = Router.getNewHash()
    var id = hashObj.hash == '' ? 'home' : hashObj.hash

    var menuItems = AppStore.Data.menu
    var item;
    for (var i = 0; i < menuItems.length; i++) {
        if(menuItems[i].id == id) {
            item = menuItems[i]
        }
    };
    
    return (item == undefined) ? { id: 'home' } : item
}
function _getAppData() {
    return AppStore.Data
}
function _getDefaultRoute() {
    return AppStore.Data['default-route']
}
function _getGlobalContent() {
    return AppStore.Data.content
}
function _windowWidthHeight() {
    return {
        w: window.innerWidth,
        h: window.innerHeight
    }
}

var AppStore = assign({}, EventEmitter2.prototype, {
    emitChange: function(type, item) {
        this.emit(type, item)
    },
    pageContent: function() {
        return _getPageContent()
    },
    menuContent: function() {
        return _getMenuContent()
    },
    getCurrentPageMenuItem: function() {
        return _getCurrentPageMenuItem()
    },
    getMenuItemById: function(id) {
        return _getMenuItemById(id)
    },
    appData: function() {
        return _getAppData()
    },
    defaultRoute: function() {
        return _getDefaultRoute()
    },
    globalContent: function() {
        return _getGlobalContent()
    },
    Window: function() {
        return _windowWidthHeight()
    },
    Orientation: AppConstants.LANDSCAPE,
    Parent: undefined,
    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action
        switch(action.actionType) {
            case AppConstants.PAGE_HASHER_CHANGED:
                _pageRouteIdChanged(action.item)
                AppStore.emitChange(action.actionType)
                break
            case AppConstants.WINDOW_RESIZE:
                AppStore.Window.w = action.item.windowW
                AppStore.Window.h = action.item.windowH
                AppStore.Orientation = (AppStore.Window.w > AppStore.Window.h) ? AppConstants.LANDSCAPE : AppConstants.PORTRAIT
                AppStore.emitChange(action.actionType)
                break
            default:
                AppStore.emitChange(action.actionType, action.item)
        }
        return true
    })
})

window.AppStore = AppStore

export default AppStore

