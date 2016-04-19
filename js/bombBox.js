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
			btnalertvalue:"确定",
			btncanclevalue:"取消",
			btnpromptvalue:'输入',
			promptinputpassword:false,
			promptinputplaceholder:'',
			maxpromptlength:6,
			hasmask:true,
			dragable:true,
			draghandle:null,
			maskclose:false
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
		renderUI:function(){
			var footer_btn='';
			switch(this.cfg.wintype){
				case 'alert':footer_btn='<div class="bombbox_footer"><input type="button" class="bombbox_alert_btn" value='+this.cfg.btnalertvalue+' ></div>' 
					 break;
				case 'confirm':footer_btn='<div class="bombbox_footer"><input type="button" class="bombbox_alert_btn" value='+this.cfg.btnalertvalue+' ><input type="button" class="bombbox_cancle_btn" value='+this.cfg.btncanclevalue+' ></div>'
					 break;
				case 'prompt':this.cfg.content+=' <input class="prompt_input" type='+(this.cfg.promptinputpassword ? "password":"text")+' maxlength='+this.cfg.maxpromptlength+' placeholder='+this.cfg.promptinputplaceholder+' >';
					footer_btn='<div class="bombbox_footer"><input type="button" class="bombbox_prompt_btn" value='+this.cfg.btnpromptvalue+' ><input type="button" class="bombbox_cancle_btn" value='+this.cfg.btncanclevalue+' ></div>'
					break;
			}
			this.bbox = $('<div class="bombbox_alert"><div class="bombbox_alert_body">'+this.cfg.content+'</div>'+footer_btn+'</div>');
			if(this.cfg.wintype != "common"){
				this.bbox.prepend('<div class="bombbox_alert_title">'+this.cfg.title+'</div>')
				this.bbox.append(footer_btn)
			};
			if(this.cfg.hasmask){
				this.mask=$("<div class='allmask'></div>");
				this.mask.appendTo('body');
			}
			if(this.cfg.hasclosebtn){
				this.closebtn=$("<span class='bombbox_alert_closebtn'></span>");
				this.closebtn.appendTo(this.bbox);
			}
			this.bbox.appendTo('body');
			this.promptinput=this.bbox.find('.prompt_input');
		},
		bindUI:function(){
			var that = this;
			this.bbox.delegate('.bombbox_alert_btn','click',function(){
				that.fire('alert');
				that.destroy();
			}).delegate('.bombbox_alert_closebtn', 'click', function() {
				that.fire('close');
				that.destroy();
			}).delegate('.bombbox_cancle_btn', 'click', function() {
				that.fire('cancle');
				that.destroy();
			}).delegate('.bombbox_prompt_btn', 'click', function() {
				that.fire('prompt',that.promptinput.val())
			});
			if(this.cfg.maskclose){
			$('.allmask').on('click', function() {
				that.fire('maskclose')
				that.destroy();
			});
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
			$.extend(this.cfg,cfg,{wintype:"alert"});
			this.render();
			return this;
		},
		confirm:function(cfg){
			$.extend(this.cfg,cfg,{wintype:"confirm"});	
			this.render();
			return this;
		},
		prompt:function(cfg){
			$.extend(this.cfg,cfg,{wintype:"prompt"});	
			this.render();
			this.promptinput.focus();
			return this;
		},
		common:function(cfg){
			$.extend(this.cfg,cfg,{wintype:"common"});	
			this.render();
			return this;
		}
	})

	return  bombBox;
	
})
/*https://github.com/DevYan/WebComponents/blob/master/12.2%20%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6%E5%AE%9E%E7%8E%B0(%E4%B8%80)/js/main.js*/