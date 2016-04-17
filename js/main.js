require.config({
	paths:{
		jquery:'jquery.main'
	}
});

require(['jquery' , 'bombBox'],function($,bombBox){
	$('#btn').click(function(){
				var bbox=new bombBox();
					bbox.alert({
						content:"hello world",
						fn:function(){
							alert("handler test")
						},
						width:300,
						height:150,
						y	:100,
						hasclosebtn:true,
						skinclassname:"skin_a",
						btnvalue:"知道了",
					});
			}
		)
})
