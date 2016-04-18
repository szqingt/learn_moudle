define(function(){
	function widget(){};
	widget.prototype= {
		on:function(type,handler){
			if(typeof this.handlers[type] == 'undefined'){
				this.handlers[type]=[];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire:function(type,data){
			if(	this.handlers[type] instanceof Array){
				$.each(this.handlers[type],function(index,value){
					value(data);
				})
			}
		}
	}
	return widget;
})