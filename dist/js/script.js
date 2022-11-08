"use strict";

//画面幅が変わったら読み込み直し
const resize = ()=>{
 
  let timeoutID = 0;
  let delay = 500;

  window.addEventListener("resize", ()=>{
      clearTimeout(timeoutID);
      timeoutID = setTimeout(()=>{

        location.reload()

      }, delay);
  }, false);
};

resize();

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

//スクロールしたらheaderの色を変える
//headerにchange-colorクラスをつけ色を指定
let jsHeader = document.querySelector('.js-header');
let jsMv = document.querySelector('.js-mv');
let mv_h = jsMv.clientHeight;
 
window.addEventListener('scroll', () => {
  if (window.scrollY >= mv_h) {
    jsHeader.classList.add('change-color');
  }
  if (window.scrollY < mv_h) {
    jsHeader.classList.remove('change-color');
  }
})






jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  /* 電話リンク */
	let ua = navigator.userAgent;
	if (ua.indexOf("iPhone") < 0 && ua.indexOf("Android") < 0) {
		jQuery('a[href^="tel:"]')
			.css("cursor", "default")
			.on("click", function(e) {
				e.preventDefault();
			});
	};

  /* ページトップ */
  var topBtn = $('.js-pagetop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

   /* DOM操作 */
  // $("#MenuButton").click(function () {
  //   $(".js-drawer-open").toggleClass("open");
  //   $(".drawer-menu").toggleClass("open");
  //   $("html").toggleClass("is-fixed");

  // });

  
  //スクロールしたらheaderの色を変える
  //headerにchange-colorクラスをつけ色を指定
  jQuery(window).on('scroll', function () {
    var MV =  jQuery(".js-mv").innerHeight(); 
      if (  MV <  jQuery(this).scrollTop()) { 
      jQuery('.js-header').addClass('change-color'); }
      else {
      jQuery('.js-header').removeClass('change-color'); } });


  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});
