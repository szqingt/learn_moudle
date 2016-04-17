define(['jquery'],function($){
	function bombBox(){}

	bombBox.prototype = {
		alert:function(content){
			var boudingBox = $('<div class="window_alert"></div>');
			boudingBox.appendTo('body');
			boudingBox.html(content);
		},
		confirm:function(){},
		prompt:function(){}
	}

	return  bombBox;
	
})