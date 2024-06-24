$('.sc-product .btn-tab').click(function(e){

    tabName = $(this).data('tab'); 

    $('.sc-product .btn-tab').removeClass('on');
    $(this).addClass('on');

    $(tabName).addClass('on').siblings().removeClass('on');
})

//hero

//hero-item
let imgList2=``;

for (let idx = 0; idx < 90; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList2+=`<li class="${firstClass}"><img src="./assets/images/hero_left/${idx.toString().padStart(5, '0')}.png" alt=""></li>`
}
$('#imgList2').html(imgList2)

let imgList3=``;

for (let idx = 0; idx < 90; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList3+=`<li class="${firstClass}"><img src="./assets/images/hero_right/${idx.toString().padStart(5, '0')}.png" alt=""></li>`
}
$('#imgList3').html(imgList3)

ScrollTrigger.create({
    trigger:".sc-hero",
    start:"0% 0%",
    end:"100% 100%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-hero .hero-content .left-item li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-hero .hero-content .left-item li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})

ScrollTrigger.create({
    trigger:".sc-hero",
    start:"0% 0%",
    end:"100% 100%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-hero .hero-content .right-item li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-hero .hero-content .right-item li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})

//hero

//버튼
$('.sc-hero .btn-play').mouseover(function(){
    $('.sc-hero .btn-play .bg').addClass('on');
    $('.sc-hero .btn-play').addClass('on');

    
})
$('.sc-hero .btn-play').mouseout(function(){
    $('.sc-hero .btn-play .bg').removeClass('on');
    $('.sc-hero .btn-play').removeClass('on');

})

a = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-hero',
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})

a.to('.hero-bg',{
    opacity:0,
    delay:0.4
});
a.to('.left-item li',{
    yPercent:-100,
    delay: -0.5
});
a.to('.right-item li',{
    yPercent:-100,
    delay: -0.5
});


//hero-add
let imgList1=``;

for (let idx = 0; idx < 180; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList1+=`<li class="${firstClass}"><img src="./assets/images/crown/${idx.toString().padStart(5, '0')}.jpg" alt=""></li>`
}
$('#imgList1').html(imgList1)

ScrollTrigger.create({
    trigger:".sc-hero-add .add-thumb",
    start:"0% 100%",
    end:"100% 0%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-hero-add .add-thumb .box li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-hero-add .add-thumb .box li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})

b = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-hero-add',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})

b.to('.sc-hero-add',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});

//feature

let imgList4=``;

for (let idx = 0; idx < 174; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList4+=`<li class="${firstClass}"><img src="./assets/images/feature/${idx.toString().padStart(5, '0')}.jpg" alt=""></li>`
}
$('#imgList4').html(imgList4)

ScrollTrigger.create({
    trigger:".sc-feature .feature-ani .ani-bg",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-feature .ani-bg .box li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-feature .ani-bg .box li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})



//progress
titleAni = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-progress .progress-title',
        start:"0% 100%",
        end:"100% 30%", 
        //markers: true,
        scrub:1,
    },
})

titleAni.to('.progress-title .word.a',{
    opacity: 1,
    duration:0.5
});
titleAni.to('.progress-title .word.b',{
    opacity: 1,
    scale:1,
    duration:0.5,
});
titleAni.to('.progress-title .word.c',{
    opacity: 1,
    scale:1,
    duration:0.5,

});
titleAni.to('.progress-title .word.d',{
    opacity: 1,
    scale:1,
    duration:0.5,

});

let imgList5=``;

for (let idx = 0; idx < 174; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList5+=`<li class="${firstClass}"><img src="./assets/images/progress/${idx.toString().padStart(5, '0')}.jpg" alt=""></li>`
}
$('#imgList5').html(imgList5)

ScrollTrigger.create({
    trigger:".sc-progress .progress-ani",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-progress .progress-ani .box li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-progress .progress-ani .box li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})

c= gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-progress',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})

c.to('body',{
    background: '#d7d7d7',
});
c.to('.sc-progress .clip',{
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
});


//custom
listAni1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-custom .detail-list',
        start:"10% 100%",
        end:"100% 60%", 
        //markers: true,
        scrub:0,
    },
})

listAni1.to('.sc-custom .detail-item.a',{
    opacity: 1,
    duration:0.5,
    y:0
});
listAni1.to('.sc-custom .detail-item.b',{
    opacity: 1,
    duration:0.5,
    y:0
});
listAni1.to('.sc-custom .detail-item.c',{
    opacity: 1,
    duration:0.5,
    y:0

});
listAni1.to('.sc-custom .detail-item.d',{
    opacity: 1,
    duration:0.5,
    y:0

});


b2= gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-custom',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})
b2.to('body',{
    background: '#000',
});
b2.to('.sc-custom .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});


//active
titleAni2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-active .active-title .word',
        start:"0% 100%",
        end:"100% 30%", 
        //markers: true,
        scrub:0,
    },
})
titleAni2.to('.sc-active .active-title .word.a',{
    opacity: 1,
    duration:1
});
titleAni2.to('.sc-active .active-title .word.b',{
    opacity: 1,
    scale:1,
    duration:0.5,
});
titleAni2.to('.sc-active .active-title .word.c',{
    opacity: 1,
    scale:1,
    duration:0.5,

});


let imgList6=``;

for (let idx = 0; idx < 174; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList6+=`<li class="${firstClass}"><img src="./assets/images/active/${idx.toString().padStart(5, '0')}.jpg" alt=""></li>`
}
$('#imgList6').html(imgList6)

ScrollTrigger.create({
    trigger:".sc-active .active-ani",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-active .active-ani .box li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-active .active-ani .box li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})


b3= gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-active',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})
b3.to('body',{
    background: '#fff',
});
b3.to('.sc-active .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});


//active-add
listAni2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-active-add .active-detail',
        start:"10% 100%",
        end:"100% 60%", 
        //markers: true,
        scrub:0,
    },
})

listAni2.to('.sc-active-add .detail-item.a',{
    opacity: 1,
    duration:0.5,
    y:0
});
listAni2.to('.sc-active-add .detail-item.b',{
    opacity: 1,
    duration:0.5,
    y:0
});
listAni2.to('.sc-active-add .detail-item.c',{
    opacity: 1,
    duration:0.5,
    y:0

});
listAni2.to('.sc-active-add .detail-item.d',{
    opacity: 1,
    duration:0.5,
    y:0

});
listAni2.to('.sc-active-add .link-more',{
    opacity: 1,
    duration:0.5,
    y:0

});


b4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-active-add',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})
b4.to('body',{
    background: '#f0661b',
});
b4.to('.sc-active-add .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});


//wellness
titleAni3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-wellness .wellness-title .word',
        start:"0% 100%",
        end:"100% 20%", 
        //markers: true,
        scrub:0,
    },
})
titleAni3.to('.sc-wellness .wellness-title .word.a',{
    opacity: 1,
    duration:1
});
titleAni3.to('.sc-wellness .wellness-title .word.b',{
    opacity: 1,
    scale:1,
    duration:0.5,
});
titleAni3.to('.sc-wellness .wellness-title .word.c',{
    opacity: 1,
    scale:1,
    duration:0.5,
});
titleAni3.to('.sc-wellness .wellness-title .word.d',{
    opacity: 1,
    scale:1,
    duration:0.5,
});

let imgList7=``;

for (let idx = 0; idx < 174; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList7+=`<li class="${firstClass}"><img src="./assets/images/wellness/${idx.toString().padStart(5, '0')}.jpg" alt=""></li>`
}
$('#imgList7').html(imgList7)

ScrollTrigger.create({
    trigger:".sc-wellness .wellness-ani",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-wellness .wellness-ani .box li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-wellness .wellness-ani .box li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})

b5= gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-wellness',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})

b5.to('body',{
    background: '#000',
});
b5.to('.sc-wellness .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});

//wellness-add

listAni3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-wellness-add .wellness-detail',
        start:"10% 100%",
        end:"100% 60%", 
        //markers: true,
        scrub:0,
    },
})

listAni3.to('.sc-wellness-add .detail-item',{
    opacity: 1,
    duration:0.5,
    y:0,
    stagger:0.5
});
listAni3.to('.sc-wellness-add .link-more',{
    opacity: 1,
    duration:0.5,
    y:0

});


b6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-wellness-add',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})
b6.to('body',{
    background: '#141414',
});
b6.to('.sc-wellness-add .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});



//perfomance
titleAni4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-performance .performance-title .word',
        start:"0% 100%",
        end:"100% 20%", 
       // markers: true,
        scrub:0,
    },
})

titleAni4.to('.sc-performance .performance-title .word.a',{
    opacity: 1,
    duration:1
});
titleAni4.to('.sc-performance .performance-title .word.b',{
    opacity: 1,
    scale:1,
    duration:0.5,
});
titleAni4.to('.sc-performance .performance-title .word.c',{
    opacity: 1,
    scale:1,
    duration:0.5,
});
titleAni4.to('.sc-performance .performance-title .word.d',{
    opacity: 1,
    scale:1,
    duration:0.5,
});


let imgList8=``;

for (let idx = 0; idx < 174; idx++) {
    firstClass=(idx===0)?'on':'';
    imgList8+=`<li class="${firstClass}"><img src="./assets/images/perform/${idx.toString().padStart(5, '0')}.jpg" alt=""></li>`
}
$('#imgList8').html(imgList8)

ScrollTrigger.create({
    trigger:".sc-performance .performance-ani",
    start:"0% 0%",
    end:"100% 0%",
    //markers:true,
    scrub:0,
    onUpdate:function(self){
        cnt=$('.sc-performance .performance-ani .box li').length;
        idx=Math.round(self.progress * (cnt-1)); 
        $('.sc-performance .performance-ani .box li').eq(idx).addClass('on').siblings().removeClass('on')
    }
})


b7= gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-performance',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})
b7.to('body',{
    background: '#d7d7d7',
});
b7.to('.sc-performance .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});


//.sc-perform-add

listAni4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-performance-add .performance-detail',
        start:"10% 100%",
        end:"100% 60%", 
        //markers: true,
        scrub:0,
    },
})

listAni4.to('.sc-performance-add .detail-item',{
    opacity: 1,
    duration:0.5,
    y:0,
    stagger:0.5
});
listAni4.to('.sc-performance-add .link-more',{
    opacity: 1,
    duration:0.5,
    y:0

});


b8 = gsap.timeline({
    scrollTrigger: {
        trigger: '.sc-performance-add',
        start:"100% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
})

b8.to('body',{
    background: '#fff',
});

b8.to('.sc-performance-add .clip',{
    yPercent:-5,
    duration: 5,
    clipPath: "inset(0px 15% 0px 15%)",
    ease: "none" 
});


//add-click-banner
gsap.fromTo('.sc-click-banner .banner-bg img',{
    yPercent:-30,
        
},{
    scrollTrigger:{
        trigger:'.sc-click-banner', //기준
        start:"0% 100%",
        end:"100% 0%", 
        //markers: true,
        scrub:0,
    },
    yPercent:-10,
})