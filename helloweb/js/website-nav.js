/**
 * Created by hxsd on 2016/10/20.
 */
$.getJSON("data/website-nav.json",function(data){
    /*var website=data;*/
    var sidenavItem="";
    var cateItem="";

    for(var i=0;i<data.length;i++){

        sidenavItem+='<li class="row">'+data[i].category+'</li>';
        var website="";
        for(var j=0;j<data[i].item.length;j++){
            website+='<div class="col-lg-2 web-item clear">'+
                '<a href="'+data[i].item[j].url+'">'+
                    '<span>'+data[i].item[j].name+'</span>'+
                    '<p>'+data[i].item[j].desc+'</p>' +
                '</a></div>'
        }

        cateItem+='<li class="clear"><h3 class="col-lg-12 text-center cateTitle">'+data[i].category+'</h3>'+website+'</li>';
    }
    $(sidenavItem).appendTo($(".col-lg-2 .sideNav"));
    $(cateItem).appendTo($(".website-list"));


});
/*
$(function(){
    var i=1;
    $(window).scroll(function(){
        var website=$(".website-wrapper");
        var topfix=website.offset().top;
        var leftfix=website.offset().left;
        var widthfix=website.css("width")-$(".website-conten").css("width");
        if($(window).scrollTop()>topfix){

            $(".sideNav").css({"position":"fixed","left":leftfix,"top":0,"width":widthfix});
        }
        /!*console.log($(window).scrollTop());*!/
    });
});
*/

