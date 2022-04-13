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
})
// loading screen
window.onload = function() {
    // 로딩중 지연시간
    setTimeout(function(){
        // console.log('3초가 경과함...')
        $('.loading').removeClass('on');
        // console.log('문서 로딩 완료!')
    },1300)
}

// mobile에서 pc로 넘어가도 gnb안없어지게..
$(window).resize(function(){
    console.log(innerWidth);
    if(innerWidth >= 768) {
        $('#gnb').show();
    }
})
