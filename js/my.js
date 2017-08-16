$(function(){
	new WOW().init();  //动画初始化
	/*向下翻动的距离
    $('.nav').singlePageNav({
        offset:200
    });*/


    /*顶部导航tab切换*/
    $(".head .menu > li").click(function(){
		$(this).children("a").addClass('selected');
		$(this).siblings().children("a").removeClass('selected');
	});

	/*滚动出现锚点*/
	var oTop = document.getElementById('top');
	var oPage = document.documentElement.clientHeight;
	var timer = null;

	window.onscroll = function(){
		$(".head .menu > li a").removeClass('selected');
        var backtop = document.body.scrollTop;
        if(backtop >= oPage){
            oTop.style.display = "block";
        }else{
            oTop.style.display = "none";
        }
	}

	oTop.onclick = function () {
    	timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            document.body.scrollTop = backtop*(9/10);  //控制向上滚动的速度
            if(backtop ==0){
                clearInterval(timer);
            }
        }, 10);
	}


	/*每一屏都充满浏览器窗口*/
	var clientHeight = $(window).height();
    $(".introduce").height(clientHeight);
    $(".technology").height(clientHeight);
    $(".project").height(clientHeight);
    $(".contact").height(clientHeight);
});
