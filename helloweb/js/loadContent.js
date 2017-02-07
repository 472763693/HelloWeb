	
function loadCont(dataArr,fn){
	    	/*具体分析：
	    	 看的见是数据：页面，前几页都是显示固定页数，最后一页可能会显示不完全；所以只能时时加载
	    	 按钮：默认固定有7个，分类少于7页的 肯定会显示     是否大于等于7页？   7；或者是 小于7的书
	    	 
	    	 是否显示 标签的徽章？？？  传入实参  没有 没有实参的去除
	    	 * */
	    	
	    	var ifBadge="";//是否显示标签徽章
			var rusultData=dataArr;//过滤之后的数据
			if(fn){
				rusultData=fn;
			}else{
				rusultData=dataArr;
			}
			
	        var showPageNum=15;//每页显示15个
	        var btnCount=5;//界面显示按钮的个数
	        
	        var current=0;//当前显示的页码号；状态量，也是 当前显示在中间的按钮数，大于4-pageConut-4，一直显示在中间
	                      
	        var pageCount=Math.ceil(rusultData.length/showPageNum);//总页数；向上取整
	            //静态的
	            if(pageCount>=btnCount){
	            	btnCount=5;
	            }else{
	            	btnCount=pageCount;
	            }	            
		        showPage(current);//显示每页的Item
		        //插入固定的按钮
		    var btnText="";    
		         btnText+='<a class="firstBtn prevBtn" href="">上一页</a>';	         
	
	            for(var i=1;i<=btnCount;i++){
	                btnText+="<a class='codeBtn' href='#'>"+i+"</a>";
	            };
	            btnText+=' <a class="firstBtn nextBtn" href="">下一页</a>';
	               
	            $(".cardsBtn").append($(btnText)).find(".codeBtn").eq(0).addClass("current-page");  	            
	        
	        //动态一：数据按钮,就第一次点击可以，
	        $(".cardsBtn a").click(function(){
	        	var topFirst=$(".sectionCard").offset();
	        	$("html body").animate({"scrollTop":topFirst.top},1000);
	        });
	        
	        $(".cardsBtn .codeBtn").each(function(){//绑定的点击事件，
	                $(this).on("click", function () {
	                    current=parseInt($(this).text())-1;
	                    showPage(current);
	                    changeBtn(current);//重现开始，empty，会去掉所有的事件，
	                    return false;
	                });
	            }
	        );
	        //上一页
	        $(".cardsBtn .prevBtn").click(function(){	        	
				current= current==0? 0:current-1;
				showPage(current);
				changeBtn(current);
				return false;
	        });
	        //下一页
	        $(".cardsBtn .nextBtn").click(function(){
	        	current= current==pageCount? pageCount:current+1;
	        	showPage(current);
	        	changeBtn(current);
	        	return false;
	        });
	        
	        
	        //前提是把所有的，按钮，或已经显示的按钮，必须绑定上click事件
	
	        
	        function showPage(n){
	            $(".main .cards").empty();
	            var html="";//显示内容的拼接
	        	var start=n*showPageNum;
	        	var end=start+showPageNum;   //数组中start--end显示

	        	if(n<pageCount-1){
	        		start=n*showPageNum;
	        		end=start+showPageNum;
	        	}else{
	        		start=(pageCount-1)*showPageNum;
	        		end=rusultData.length;
	        	}
	        	
	        	/*console.log(rusultData.length);
	        	console.log(start);
	        	console.log(end);
	        	console.log(rusultData[300].category);*/
	        	
    	
	        	for(var i=start;i<end;i++){//倒序排列
	        		if(!fn){
	        			ifBadge='<a class="category" href="#">'+rusultData[i].category+'</a>';	        			
	        		}
	             html+=
	                '<div class="contentItem">' +
	                    '<h2 class="itemTitle">'+ifBadge+'<a href="#">'+rusultData[i].title+'</a></h2>'+
	                    '<div class="itemTeletext clear">'+
	                        '<div class="itemImg pull-left">'+
	                            '<a href="#"><img src="img/'+rusultData[i].imgSrc+'" alt=""></a>'+
	                        '</div>'+
	                        '<div class="itemInfo pull-right">'+
	                            '<p class="text">'+rusultData[i].desc+'</p>'+
	                        '</div>'+
	                    '</div>'+
	                    '<div class="tickle">'+
	                        '<ul class="clear">'+
	                            '<li class="time"><i class="fa fa-clock-o"></i> '+rusultData[i].time+'</li>'+
	                            '<li class="hot"><i class="fa fa-eye"></i> '+rusultData[i].hot+'</li>'+
	                            '<li class="chat"><a href="#"><i class="fa fa-comments-o"></i>暂无评论</a></li>'+
	                            '<li class="heart"><i class="fa fa-heart-o"></i> '+rusultData[i].love+'<span>喜欢</span></li>'+
	                        '</ul>'+
	                    '</div>'+
	                '</div>';
		        };
		        $(".main .cards").html(html);
	        } 
	
	
	        function changeBtn (n){	   
				n = n+1;
	        	var firstCode=1;
	        	var endCode=6;
	        	if(btnCount<pageCount){//实际的按钮多于5个
	        		if(n<=(btnCount+1)/2){//如果d当前小于4，（1--8）
		               	firstCode=1;
		                endCode=firstCode+btnCount;//按钮组，firstCode--endCode,显示
		            }else if(n<pageCount-(btnCount+1)/2){
		                firstCode=n-3;
		                endCode=firstCode+btnCount;
		            }else {//最后一组   如（20-7   20）
		                firstCode=pageCount-btnCount;
		                endCode=pageCount;
		            }
		            var codeBtn=$(".cardsBtn .codeBtn");
	        		for(var i=0;i<btnCount;i++){
						firstCode++;
	        			codeBtn.eq(i).text(firstCode);
	        		}
	        	}
	           //或许数组的方法可以一试
	           	
	            //最好使用，属性选择器来，，选择数字为n+1的按钮
	            $(".cardsBtn .codeBtn:contains("+n+")").addClass("current-page").siblings().removeClass("current-page");
	            
        	}
 

    };
