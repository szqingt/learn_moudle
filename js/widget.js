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
		},
		render:function(){
			this.renderUI();
			this.handlers={};
			this.bindUI();
			this.syncUI();
		},
		destroy:function(){
			this.destructor();
			this.bbox.off();
			this.bbox.remove();
		},
		renderUI:function(){},	//接口：添加dom节点
		bindUI:function(){},	//接口：监听事件
		syncUI:function(){},	//接口：初始化组件属性
		destructor:function(){} //接口：销毁前的处理函数
	}
	return widget;
})