/**
 * Created by hxsd on 2016/10/19.
 */
/*
{
    "id":1,
    "category":"ui",
    "title":"智能电视用户体验设计分享－焦点篇",
    "imgSrc":"images/ui01.png",
    "desc":"分享些实用的设计经验，科普电视用户体验的基础知识...",
    "time":"8个月前 (01-11)",
    "hot":239,
    "chat":0,
    "love":62
},*/
$(function(){
    var excerpt=$(".excerpt");
    //alert(excerpt.length);
    var webData=[];

    excerpt.each(function(index){//单个的
        var dataObj={};
        dataObj.category=$(this).find(".label-important").text();

        //console.log(category);
        dataObj.title=$(this).find("header h2 a").text();
        //console.log(title);
        dataObj.imgSrc=$(this).find(".focus img.thumb").attr("src").slice(41);
        //console.log(imgSrc);
        dataObj.desc=$(this).find(".note").text();

        dataObj.time=$(this).find(".auth-span .muted").eq(0).text();
        //console.log(time);
        dataObj.hot=$(this).find(".auth-span .muted").eq(1).text();
        //console.log(hot);
        dataObj.chat=$(this).find(".auth-span .muted").eq(2).text();
        //console.log(chat);
        dataObj.love=$(this).find(".auth-span .muted").eq(3).text();
        //console.log(love);
        webData.push(dataObj);
    });
    console.log(JSON.stringify(webData));
});






