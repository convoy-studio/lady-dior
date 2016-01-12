import AppConstants from 'AppConstants'
import AppDispatcher from 'AppDispatcher'

var AppActions = {
    pageHasherChanged: function(pageId) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.PAGE_HASHER_CHANGED,
            item: pageId
        })  
    },
    windowResize: function(windowW, windowH) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.WINDOW_RESIZE,
            item: { windowW:windowW, windowH:windowH }
        })
    },
    addPXChild: function(child) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_PX_CHILD,
            item: { child:child }
        })    
    },
    removePXChild: function(child) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_PX_CHILD,
            item: { child:child }
        })    
    }
}

window.AppActions = AppActions

export default AppActions


      
