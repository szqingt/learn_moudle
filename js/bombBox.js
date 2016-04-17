define(['jquery'],function($){
	function bombBox(){}

	bombBox.prototype = {
		alert:function(content,fn){
			var bbox = $('<div class="bombbox_alert"></div>');
			bbox.appendTo('body');
			bbox.html(content);
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