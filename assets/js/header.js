//animation1.play();
/*
let logo = document.querySelector(".gnb-logo");

var animation1 = bodymovin.loadAnimation({
    container: $('#lottie_1')[0], // Required
    path:'./assets/data/logo.json',
    //path: 'data.json', // 실제 사용 폴더 지정 ex) data.json
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    paused: false
});

  logo.addEventListener("mouseover", () => {animation1.play()});
  //logo.addEventListener("mouseleave", () => {animation1.reverse()});
*/

  //Play an animation back on second click

let iconMenu = document.querySelector('.gnb-logo');

let animationMenu = bodymovin.loadAnimation({
        container: $('#lottie_1')[0],
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "./assets/data/logo.json",
});

var directionMenu = 1;
  iconMenu.addEventListener('mouseenter', (e) => {
  animationMenu.setDirection(directionMenu);
  //animationCompleted = true;
  animationMenu.play();
});
  iconMenu.addEventListener('mouseleave', (e) => {
  animationMenu.setDirection(-directionMenu);
  animationMenu.play();
});


$('.gnb .menu-item').hover(function(){
    $(this).find('.sub-container').addClass('on');
    $(this).find('.sub-menu').css("transform", "translateY(0)");
    
}, function(){
    $(this).find('.sub-container').removeClass('on');
    $(this).find('.sub-menu').css("transform", "translateY(20%)");

})


$('.gnb .bar-util .util-item').hover(function(){
  $(this).find('.popbottom').addClass('on');
  
}, function(){
  $(this).find('.popbottom').removeClass('on');

})


//아래 스크롤시 헤더 사라지고 올리면 다시 나오는 효과
        let lastScroll = 0; 

        $(window).scroll(function(){
            curr = $(this).scrollTop();

            if (curr > lastScroll) {
                $('#header').addClass('hide');
                $('#main .ad-banner').addClass('up');

            } else{
                $('#header').removeClass('hide');
                $('#main .ad-banner').removeClass('up');

            }

            lastScroll = curr;
        })