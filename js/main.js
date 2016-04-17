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
						height:200,
						y:100
					});
			}
		)
})
