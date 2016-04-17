define(['jquery'],function($){
	function bombBox(){
		this.cfg={
			title:"弹出框",
			content:"",
			fn:null,
			width:200,
			height:150,
			y:100,
			hasclosebtn:false,
			skinclassname:null
		}
	}

	bombBox.prototype = {
		alert:function(cfg){
			var config = $.extend(this.cfg,cfg);	
			var bbox = $(
				'<div class="bombbox_alert"><div class="bombbox_alert_title">'+config.title+'</div><div class="bombbox_alert_body">'+config.content+'</div><input type="button" class="bombbox_alert_footer" value="确定"</div>'
				);
			bbox.appendTo('body');
			bbox.css({
				width: config.width+"px",
				height: config.height+"px",
				top: (config.y || (window.innerHeight - config.height)/2 ) + "px",
				left:(config.x || (window.innerWidth - config.width)/2 ) + 'px'
			})
			$('.bombbox_alert_footer').click(function(){
				config.fn && config.fn();
				bbox.remove();
			})
			if(config.hasclosebtn){
				var closebtn=$("<span class='bombbox_alert_closebtn'></span>");
				closebtn.appendTo(bbox);
				closebtn.click(function(){
					bbox.remove();
				})
			if(config.skinclassname){
				bbox.addClass(config.skinclassname)
			}
			}
		},
		confirm:function(){},
		prompt:function(){}
	}

	return  bombBox;
	
})