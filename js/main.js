require.config({
	paths:{
		jquery:'jquery.main'
	}
});


require(['jquery' , 'bombBox'],function($,bombBox){
	$('#btn').click(function(){
				var bbox=new bombBox();
					bbox.alert("hello world",function(){
						alert("handler test")
					});
			}
		)
})
