define(['jquery'],function($){
	function bombBox(){
		this.cfg={
			width:200,
			height:150
		}
	}

	bombBox.prototype = {
		alert:function(content,fn,cfg){
			var bbox = $('<div class="bombbox_alert"></div>');
			bbox.appendTo('body');
			bbox.html(content);
			$.extend(this.cfg,cfg);
			bbox.css({
				width: this.cfg.width+"px",
				height: this.cfg.height+"px",
				top: (this.cfg.y || (window.innerHeight - this.cfg.height)/2 ) + "px",
				left:(this.cfg.x || (window.innerWidth - this.cfg.width)/2 ) + 'px'
			})
			var btn=$('<input class="bombbox_btn" type="button" value="确定" />');
			btn.appendTo(bbox);
			btn.click(function(){
				fn && fn();
				bbox.remove();
			})
		},
		confirm:function(){},
		prompt:function(){}
	}

	return  bombBox;
	
})