define(['jquery','jsDrg','widget'],function($,a,lisent){
	function bombBox(){
		this.cfg={
			title:"弹出框",
			content:"",
			fn:null,
			width:200,
			height:150,
			y:100,
			hasclosebtn:false,
			skinclassname:null,
			btnvalue:"确定",
			hasmask:true,
			dragable:true
		},
		this.handlers={

		};
	}

	bombBox.prototype = $.extend({},new lisent(),{
		alert:function(cfg){
			var config = $.extend(this.cfg,cfg),
				bbox = $('<div class="bombbox_alert"><div class="bombbox_alert_title">'+config.title+'</div><div class="bombbox_alert_body">'+config.content+'</div><input type="button" class="bombbox_alert_footer" value='+config.btnvalue+' ></div>'),
				mask=$("<div class='allmask'>sss</div>");
			mask.appendTo('body')		
			bbox.appendTo('body');
			bbox.css({
				width: config.width+"px",
				height: config.height+"px",
				top: (config.y || (window.innerHeight - config.height)/2 ) + "px",
				left:(config.x || (window.innerWidth - config.width)/2 ) + 'px'
			})
			var then=this;
			$('.bombbox_alert_footer').click(function(){
				config.fn && config.fn();
				then.fire('alert');
				bbox.remove();
				mask && mask.remove();
			})
			if(config.hasclosebtn){
				var closebtn=$("<span class='bombbox_alert_closebtn'></span>");
				closebtn.appendTo(bbox);
				closebtn.click(function(){
					then.fire('close');
					bbox.remove();
					mask && mask.remove();
				})
				}
			if(config.skinclassname){
				bbox.addClass(config.skinclassname);
			}
			if(config.dragable){
				var drag=new a();
				drag.Sdrag(bbox,bbox.find(".bombbox_alert_title"));
			}
			return this;
		},
		confirm:function(){},
		prompt:function(){}
	})

	return  bombBox;
	
})
/*https://github.com/DevYan/WebComponents/blob/master/12.2%20%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E5%AE%9E%E7%8E%B0(%E4%B8%80)/js/main.js*/