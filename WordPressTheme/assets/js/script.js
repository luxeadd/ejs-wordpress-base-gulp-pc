"use strict";

//header
//ハンバーガーメニュー---------------
const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-drawer-menu')
const drawerBackground = document.getElementById('js-header__overlay')
const drawerMenuItems = document.querySelectorAll('.js-header-menu__item')

//ハンバーガーメニュークリックアクション
jsHamburger.addEventListener('click', function() {
  body.classList.toggle('is-drawerActive')
  if (this.getAttribute('aria-expanded') == 'false') {
    this.setAttribute('aria-expanded', 'true');
    spHeaderMenu.setAttribute('area-hidden','false')
  } else {
    this.setAttribute('aria-expanded', 'false')
    spHeaderMenu.setAttribute('area-hidden','true')
  };
});
//ドラワーメニュー展開時背景クリックアクション
drawerBackground.addEventListener('click', () => {
  body.classList.remove('is-drawerActive')
  jsHamburger.setAttribute('aria-expanded', 'false')
  spHeaderMenu.setAttribute('area-hidden','true')
});
//ドラワーメニュー展開時リストクリックアクション
for (let a = 0; a < drawerMenuItems.length - 1; a++) {
drawerMenuItems[a].addEventListener('click', () => {
  body.classList.remove('is-drawerActive')
  jsHamburger.setAttribute('aria-expanded', 'false')
  spHeaderMenu.setAttribute('area-hidden','true')
});
}


//スクロールしたらページトップ出現
let jsPageTop = document.querySelector('.js-page-top'); 
window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    jsPageTop.classList.add('is-active');
  }
  if (window.scrollY < 100) {
    jsPageTop.classList.remove('is-active');
  }
})




jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
 //ドロワーメニュー展開時背景固定------------------
  // screen lock
  var lockTop = 0;
  var screenLock = function() {
    lockTop = $(window).scrollTop();
    $("html").addClass("is-screen-locked").css({
      top: -lockTop
    });
  };
  // screen unlock
  var screenUnlock = function() {
    $("html").removeClass("is-screen-locked").removeAttr("style");
    $(window).scrollTop(lockTop);
  };
  $(function(){
    $('#js-hamburger').on('click', function (){
        if (!$(this).hasClass('is-active')) {
          $(this).addClass('is-active');
            screenLock();
        } else {
          $(this).removeClass('is-active');
            screenUnlock();
        }
    });
  });


// スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 300;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

/* ページトップスムーススクロール */
// var topBtn = $('.js-page-top');
// topBtn.click(function () {
//   $('body,html').animate({
//     scrollTop: 0
//   }, 300, 'swing');
//   return false;
// });


});
