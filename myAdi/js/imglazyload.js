!function(t,e){"use strict";t.fn.imgLazyLoad=function(n){var o=this,r=t.extend({container:e,effect:"fadeIn",speed:600,delay:400,callback:function(){}},n),a=t(r.container),i=function(){if(!o.length)return a.off("scroll.lazyLoad");var n=a.outerHeight(),i=a.scrollTop();r.container!==e&&(i=a.offset().top),o.each(function(){var e=t(this),a=e.offset().top;if(i+n>a&&a+e.outerHeight()>i){o=o.not(e);var c=e.attr("data-src");t(new Image).prop("src",c).load(function(){e.hide().attr("src",c)[r.effect](r.speed,function(){r.callback.call(this)}).removeAttr("data-src")})}})},c=function(t,e){if(!e)return t;var n;return function(){clearTimeout(n),n=setTimeout(function(){t()},e)}};if(!a.length)throw r.container+" is not defined";return i(),a.on("scroll.imgLazyLoad",c(i,r.delay)),this}}(jQuery,window);