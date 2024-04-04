<script>
// 배너 이미지 슬라이더
  var mySwiper = new Swiper ('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

// 공지사항 탭메뉴
  var tabMenu = $(".notice") ;
//콘텐츠 내용을 숨겨주세요
  tabMenu.find("ul > li > ul").hide();
  tabMenu.find("li.active > ul").show();
  
  
  function tabList(e) {
    e.preventDefault(); //#의 기능을 차단시켜줌
    var target = $(this);
    target.next().show().parent("li ").addClass("active").siblings("li").removeClass("active").find("ul").hide();

    //함수 tabList() 버튼을 클릭하면 ~ul을 보여주고
    //부모 클래스에 li태그에 active를 추가하고 
    //형제 클래스에 active 를 제거하고
    //제거한 자식의 ul을 숨겨준다
  }


  tabMenu.find("ul > li > a").click(tabList).focus(tabList);






// 영화 차트 메뉴
 
  var movBtn = $(".movie_title > ul > li")
  var movCont = $(".movie_chart > div")

  movCont.hide().eq(0).show();

  movBtn.click(function(e){
     e.preventDefault();
     var target = $(this);
     var index = target.index();
     movBtn.removeClass("active");
     target.addClass("active");
     movCont.css("display","none");
     movCont.eq(index).css("display","block");

  });

// 영화 차트 슬라이더
var mySwiper = new Swiper ('.swiper-container2', {
    slidesPerView: 4,
        spaceBetween: 24,
//            mousewheel: {
//                invert: true,
//            },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        autoplay: {
            delay: 6000,
        },
        breakpoints: {
            600: {
                slidesPerView: 1.4,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 24
            }
        }

});

</script>