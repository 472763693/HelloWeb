/**
 * Created by hxsd on 2016/10/12.
 */
$(function(){
    /*   banner 定位，js让父级盒子height*/
    window.onresize=function(){
        $(".tabBox .banList").css("height",$(".banList li").eq(0).css("height"));
    };

    /* screen-mini  */
    $(".screen-mini .screen-nav").click(function(){
        $("#header").find(".nav").slideToggle();
    });

    //header-nav-sub-menu-animate
    $(".nav .has-sub").each(function(i){
        $(this).hover(
            function(){
                /*  $(".has-sub ").eq(i).find(".sub-menu .menu-item")*/
                var timer=null;
                var index=2;
                clearInterval(timer);
                function overFn(){
                    if(index>=0){
                        $(".has-sub ").eq(i).find(".sub-menu .menu-item").eq(index).addClass("is-show");
                        index--;
                    }else {
                        clearInterval(timer);
                    }
                }
                timer=setInterval(overFn,100);
            },
            function(){
                var timer=null;
                var index=2;
                clearInterval(timer);
                function outFn (){
                    if(index>=0){
                        $(".has-sub ").eq(i).find(".sub-menu .menu-item").eq(index).removeClass("is-show");
                        index--;
                    }
                    else {
                        clearInterval(timer);
                    }
                }
                setInterval(outFn,100);
        });
    });


    //Ajax请求
    $.getJSON("data/sections.json",function(dataArr){
        var html="";
        var showNum=20
        
        
        
        for(var i=dataArr.length-1;i>=0;i--){
             html+=
                '<div class="contentItem">' +
                    '<h2 class="itemTitle"><a href="#">'+dataArr[i].title+'</a></h2>'+
                    '<div class="itemTeletext clear">'+
                        '<div class="itemImg pull-left">'+
                            '<a href="#"><img src="'+dataArr[i].imgSrc+'" alt=""></a>'+
                        '</div>'+
                        '<div class="itemInfo pull-right">'+
                            '<p class="text">'+dataArr[i].desc+'</p>'+
                        '</div>'+
                    '</div>'+
                    '<div class="tickle">'+
                        '<ul class="clear">'+
                            '<li class="time"><i class="fa fa-clock-o"></i> '+dataArr[i].time+'</li>'+
                            '<li class="hot"><i class="fa fa-eye"></i> '+dataArr[i].hot+'<span>℃</span></li>'+
                            '<li class="chat"><a href="#"><i class="fa fa-comments-o"></i>暂无评论</a></li>'+
                            '<li class="heart"><i class="fa fa-heart-o"></i> '+dataArr[i].love+'<span>喜欢</span></li>'+
                        '</ul>'+
                    '</div>'+
                '</div>';
        };
        $(".main .cards").html(html);

    })

	/*   rollTop*/
	$(window).scroll(function(){
		var showSeaEdge=$(".banner").offset().top;
		var showRollTopEdge=$(".newest").offset().top;
		var docTop=$(document).scrollTop();
		
		if(docTop>showSeaEdge){
			$(".baiduSea").fadeIn();
		}else{
			$(".baiduSea").fadeOut();
		}
		if(docTop>showRollTopEdge){
			$(".rollTop").fadeIn();
		}else{
			$(".rollTop").fadeOut();
		}
	});
	$(".rollTop .backBtn").click(function(){
		$("html body").animate({"scrollTop":0},1000);
	});
	/*  close百度搜索*/
	$(".baiduSea .close-btn").click(function(){
		$(".baiduSea").remove();
	});


});