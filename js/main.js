// main.js
// mobile toggle menu
$(function(){
    $('#gnb-toggle-btn').on('click', function(){
        $('#gnb').toggleClass('on');
    })
});
// loading screen
window.onload = function() {
    // 로딩중 지연시간
    setTimeout(function(){
        // console.log('3초가 경과함...')
        $('.loading').removeClass('on');
        // console.log('문서 로딩 완료!')
    },1300)
}
