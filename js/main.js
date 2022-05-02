// main.js
// mobile toggle menu
$(function(){
    $('.ham').on('click', function(){
        $('#gnb').slideToggle('');
    })
});
$(function(){
    $(".ham").click(function(){
        $(this).toggleClass("active")
      });
});
// loading screen
window.onload = function() {
    // 로딩중 지연시간
    setTimeout(function(){
        // console.log('3초가 경과함...')
        $('.loading').removeClass('on');
        // console.log('문서 로딩 완료!')
    },2000)
};

// mobile에서 pc로 넘어가도 gnb안없어지게..
$(window).resize(function(){
    console.log(innerWidth);
    if(innerWidth >= 769) {
        $('#gnb').show();
    }
});

// 보고있는 영역 메뉴 강조 기능
$(window).on('scroll', function () {
 
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();
 
    // Link Highlighting
    if (pos2 > $('#page-1').offset().top)   { highlightLink('page-1'); }
    if (pos2 > $('#page-2').offset().top) { highlightLink('page-2'); }
    if (pos2 > $('#page-3').offset().top)  { highlightLink('page-3'); }
    if (pos2 > $('#page-4').offset().top ||
        pos + $(window).height() === $(document).height()) {
          highlightLink('page-4');
    }
 
  });
 
  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[href="#' + anchor + '"]').addClass('active');
  }
