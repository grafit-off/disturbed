// Variables
const body = document.querySelector('.body');
const isMobileDevice = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
const isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
const media = window.matchMedia("(max-width: 991.98px)");
const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const burger = new Burger(burgerBtn, nav);
