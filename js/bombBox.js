define(['jquery','jsDrg','widget'],function($,a,widget){
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
			dragable:true,
			draghandle:null
		},
		this.handlers={

		};
	}

	bombBox.prototype = $.extend({},new widget(),{
		// alert:function(cfg){
		// 	var config = $.extend(this.cfg,cfg),
		// 		bbox = $('<div class="bombbox_alert"><div class="bombbox_alert_title">'+config.title+'</div><div class="bombbox_alert_body">'+config.content+'</div><input type="button" class="bombbox_alert_footer" value='+config.btnvalue+' ></div>'),
		// 		mask=$("<div class='allmask'>sss</div>");
		// 	mask.appendTo('body');		
		// 	bbox.appendTo('body');
		// 	bbox.css({
		// 		width: config.width+"px",
		// 		height: config.height+"px",
		// 		top: (config.y || (window.innerHeight - config.height)/2 ) + "px",
		// 		left:(config.x || (window.innerWidth - config.width)/2 ) + 'px'
		// 	});
		// 	var then=this;
		// 	$('.bombbox_alert_footer').click(function(){
		// 		config.fn && config.fn();
		// 		then.fire('alert');
		// 		bbox.remove();
		// 		mask && mask.remove();
		// 	});
		// 	if(config.hasclosebtn){
		// 		var closebtn=$("<span class='bombbox_alert_closebtn'></span>");
		// 		closebtn.appendTo(bbox);
		// 		closebtn.click(function(){
		// 			then.fire('close');
		// 			bbox.remove();
		// 			mask && mask.remove();
		// 		})
		// 		}
		// 	if(config.skinclassname){
		// 		bbox.addClass(config.skinclassname);
		// 	}
		// 	if(config.dragable){
		// 		var drag=new a();
		// 		drag.Sdrag(bbox,bbox.find(".bombbox_alert_title"));
		// 	}
		// 	return this;
		// },
		confirm:function(){},
		prompt:function(){},
		renderUI:function(){
			this.bbox = $('<div class="bombbox_alert"><div class="bombbox_alert_title">'+this.cfg.title+'</div><div class="bombbox_alert_body">'+this.cfg.content+'</div><input type="button" class="bombbox_alert_footer" value='+this.cfg.btnvalue+' ></div>');
			if(this.cfg.hasmask){
				this.mask=$("<div class='allmask'>sss</div>");
				this.mask.appendTo('body');
			}
			if(this.cfg.hasclosebtn){
				this.closebtn=$("<span class='bombbox_alert_closebtn'></span>");
				this.closebtn.appendTo(this.bbox);
			}
			this.bbox.appendTo('body');
		},
		bindUI:function(){
			var that = this;
			this.bbox.delegate('.bombbox_alert_footer','click',function(){
				that.fire('alert');
				that.destroy();
			}).delegate('.bombbox_alert_closebtn', 'click', function() {
				that.fire('close');
				that.destroy();
			});
			if(this.cfg.fn){
				this.on('alert',this.cfg.fn);
			}
		},
		syncUI:function(){
			this.bbox.css({
				width: this.cfg.width+"px",
				height: this.cfg.height+"px",
				top: (this.cfg.y || (window.innerHeight - this.cfg.height)/2 ) + "px",
				left:(this.cfg.x || (window.innerWidth - this.cfg.width)/2 ) + 'px'
			});
			if(this.cfg.skinclassname){
				this.bbox.addClass(this.cfg.skinclassname);
			};
			if(this.cfg.dragable){
				var drag=new a();
				if(this.cfg.draghandle){
					drag.Sdrag(this.bbox,this.bbox.find(this.cfg.draghandle))	
				}else{
					drag.Sdrag(this.bbox)
				}
			}
		},
		destructor:function(){
			this.mask && this.mask.remove();
		},
		alert:function(cfg){
			$.extend(this.cfg,cfg);
			this.render();
			return this;
		}
	})

	return  bombBox;
	
})
/*https://github.com/DevYan/WebComponents/blob/master/12.2%20%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E5%AE%9E%E7%8E%B0(%E4%B8%80)/js/main.js*/