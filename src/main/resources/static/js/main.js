$(function(){

    // slide 사진
    setInterval(autoSlide, 3000);
    function autoSlide() {
      $("#slideBox > ul").animate({ "margin-left": "-1903px" }, 800, function () {
        $("#slideBox > ul").css({ "margin-left": "0" });
        $("#slideBox > ul > li:first-child").insertAfter("#slideBox > ul > li:last-child");
      });
    };
    // slide 하단바
    autoSlideBar();
    setInterval(autoSlideBar, 9000);
    function autoSlideBar() {
      setTimeout(function(){
        $("#slideBox > div > span").animate({ "width": "400px" }, 800);
      }, 3000);
      setTimeout(function(){
        $("#slideBox > div > span").animate({ "width": "600px" }, 800);
      }, 6000);
      setTimeout(function(){
        $("#slideBox > div > span").animate({ "width": "200px" }, 800);
      }, 9000);
    };
    // 신상품 slide
    setInterval(newBoxAutoSlide, 5000);
    function newBoxAutoSlide() {
      $("#newBox > .productBox").animate({ "margin-left": "-443px" }, 1000, function () {
        $("#newBox > .productBox").css({ "margin-left": "0" });
        $("#newBox > .productBox > div:first-child").insertAfter("#newBox > .productBox > div:last-child");
      });
    };
    // 화살표 클릭
    $("#arrowLeft").on("click", function() {
      $("#newBox > .productBox > div:last-child").insertBefore("#newBox > .productBox > div:first-child");
    });
    $("#arrowRight").on("click", function() {
      $("#newBox > .productBox > div:first-child").insertAfter("#newBox > .productBox > div:last-child");
    });

    // 신상품
    for(let i = 1; i <= $("#newBox > .productBox > div").length; i++) {
        let price = $("#newBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(1)").text();
        let sales = $("#newBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(2)").text();
        let discount = Math.floor((price-sales)/price*100); // 할인률 소수점 버림
        // 할인률 계산
        $("#newBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(3)").text(discount + "%");
        // 천단위 콤마
        $("#newBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(1)").text(price.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $("#newBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(2)").text(sales.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
    // 베스트
    for(let i = 1; i <= $("#bestBox > .productBox > div").length; i++) {
        let price = $("#bestBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(1)").text();
        let sales = $("#bestBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(2)").text();
        let discount = Math.floor((price-sales)/price*100); // 할인률 소수점 버림
        // 할인률 계산
        $("#bestBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(3)").text(discount + "%");
        // 천단위 콤마
        $("#bestBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(1)").text(price.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        $("#bestBox > .productBox > div:nth-child(" + i + ") > p:nth-of-type(3) > span:nth-child(2)").text(sales.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

});


