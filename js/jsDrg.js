define(['jquery'],function($){
    function drag(){};
    drag.prototype = {
        Sdrag:function (ele,handler){
            function smove(event){
                var MouseWithBoxX= event.clientX-ele.offset().left,
                MouseWithBoxY= event.clientY-ele.offset().top;
                document.onmousemove=function (event){
                    Dmove(event,ele,MouseWithBoxX,MouseWithBoxY)
                };
                document.onmouseup=function (){
                document.onmousemove=null;
                document.onmouseup=null;
                }
            }
            function Dmove(event,ele,x,y){
            var MX= event.clientX- x,
                MY= event.clientY- y,
                MaxMX=document.documentElement.clientWidth-ele.outerWidth() ,
                MaxMY=document.documentElement.clientHeight-ele.outerHeight();

                if(MX<0){
                    MX=0;
                    if(MY<0){
                        MY=0;
                    }else if(MY>MaxMY){
                        MY=MaxMY;
                    }
                }else if(MX>MaxMX){
                MX=MaxMX;
                    if(MY<0){
                        MY=0;
                    }else if(MY>MaxMY){
                        MY=MaxMY;
                    }
                }else if(MY<0){
                    MY=0;
                }else if(MY>MaxMY){
                    MY=MaxMY;
                }
                ele.css({
                'position':'absolute',
                'top':MY+'px',
                'left':MX+ 'px'
            })
            }
            if(handler){
                handler.on('mousedown',smove);
            }else{
                ele.on('mousedown',smove)
            }
            
            }
    }
    return drag;
})