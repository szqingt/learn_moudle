require.config({
	paths:{
		jquery:'jquery.main'
	}
});

require(['jquery' , 'bombBox'],function($,bombBox){
	$('#btn').click(function(){
				var bbox=new bombBox();
					bbox.prompt({
						title:"hello",
						content:"hello world",
						fn:function(){
							alert("回调函数")
						},
						width:300,
						height:150,
						y	:100,
						hasclosebtn:true,
						skinclassname:"skin_a",
						promptinputplaceholder:"写点什么",
						btnalertvalue:"知道了",
						btncanclevalue:'不要了',
					}).on('alert',function(){alert('for on lisent')}).on('close',function(){alert('for on close')}).on('cancle',function(){alert('confirm cancle')}).on('prompt',function(data){alert('输入框输入的是：'+data)})
			}
		);
	$("#btn-common").click(function(){
		var bbox =new bombBox();
		bbox.common({
			content:"common alert",
			width:100,
			height:50,
			y:50,
			hasclosebtn:true,
			fn:function(){
				alert("回调")
			},
			maskclose:true
		})
	})
})
