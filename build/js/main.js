document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".body");/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),document.documentElement.style,window.matchMedia("(max-width: 767px)");console.log("Hello App");const t=document.querySelectorAll(".modal-btn"),o=document.querySelectorAll(".fixed-padding"),n=document.querySelectorAll(".close-modal");let l,c,i,s=!0,d=!1;if("function"!=typeof disableScroll&&"function"!=typeof enableScroll&&console.log(`Тип данных переменных "disableScroll" и "enableScroll": "${typeof disableScroll} и ${typeof enableScroll}"! Для IOS НЕ будет выполнятся скрипт scrollLockIOS`),t.length>0)for(let e=0;e<t.length;e++){const o=t[e];o.addEventListener("click",(function(e){const t=o.dataset.path,l=document.getElementById(t);null!=l?(r(l),setTimeout(()=>{n.forEach(e=>{e.focus()})},100),e.preventDefault()):console.log("Модальное окно не существует! "+l)}))}if(n.length>0)for(let e=0;e<n.length;e++){const t=n[e];l=t,t.addEventListener("click",(function(e){a(t.closest(".modal")),e.preventDefault()}))}function r(t){if(t&&s){i=document.activeElement;const n=document.querySelector(".modal.open");n?a(n,!1):function(){const t=window.innerWidth-e.offsetWidth+"px";if(o.length>0)for(let e=0;e<o.length;e++){o[e].style.paddingRight=t}e.style.paddingRight=t,e.classList.contains("lock")?c=!1:(c=!0,isiPhone||isiPad||isiPod?disableScroll():e.classList.add("lock"));s=!1,setTimeout((function(){s=!0}),800)}(),t.classList.add("open"),t.addEventListener("mousedown",(function(e){!1===d?(e.target.closest(".modal__content")||a(e.target.closest(".modal")),d=!0):setTimeout(()=>{d=!1},800)}))}}function a(t,n=!0){s&&(t.classList.remove("open"),n&&setTimeout((function(){if(o.length>0)for(let e=0;e<o.length;e++)o[e].style.paddingRight="0px";e.style.paddingRight="0px",1==c&&(isiPhone||isiPad||isiPod?enableScroll():e.classList.remove("lock"))}),800)),setTimeout((function(){i.focus()}),800)}document.addEventListener("keydown",(function(e){if(document.querySelector(".modal.open")&&27===e.which){a(document.querySelector(".modal.open"))}})),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector)});