!function(){AniJS.getHelper().scrollReveal=function(t,i){animationContextBehaviorTargetList=i.behaviorTargetList,visibleBehaviorTargetList=[];for(var n=0;n<animationContextBehaviorTargetList.length;n++)element=animationContextBehaviorTargetList[n],e.isElementInViewport(element,.33)?element.isRevealed||(visibleBehaviorTargetList.push(element),element.isRevealed=1):element.isRevealed=0;i.behaviorTargetList=visibleBehaviorTargetList,i.run()};var e={viewportFactor:1,docElem:window.document.documentElement,isElementInViewport:function(e,t){var i=window.pageYOffset,n=i+this._getViewportH(),o=e.offsetHeight,r=this._getOffset(e).top;return r+o*(t=t||0)<=n&&r+o>=i||"fixed"==(e.currentStyle?e.currentStyle:window.getComputedStyle(e,null)).position},_getViewportH:function(){var e=this.docElem.clientHeight,t=window.innerHeight;return e<t?t:e},_getOffset:function(e){var t=0,i=0;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(i+=e.offsetLeft)}while(e=e.offsetParent);return{top:t,left:i}}}}(window);