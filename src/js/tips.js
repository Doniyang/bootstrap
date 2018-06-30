(function(win,factory,name){
      return factory(win.jQuery,name);
})(window,function($,plugin){
        $.fn[plugin] = function(){
        	this.fadeIn();
        	console.log(this.data());
        }
},'msg');