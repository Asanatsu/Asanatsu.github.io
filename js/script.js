window.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("html");const o=document.querySelector(".navbar-btn");const e=document.querySelector(".navbar-list");const n=document.querySelector(".back-to-top-fixed");let c=0;let l=window.localStorage.getItem("theme")||"";l&&t.classList.add(l);const r=()=>{let e=getScrollTop();let t=Math.floor(-e/10);if(e>c){return c=0}let o=e+t;c=o;document.documentElement.scrollTop=o;o>0&&window.requestAnimationFrame(r)};const s=e=>{e=e||getScrollTop();if(e>=100){n.classList.add("show")}else{n.classList.remove("show")}};s();document.querySelector("#theme-light").addEventListener("click",function(){t.classList.remove("theme-dark");t.classList.add("theme-light");window.localStorage.setItem("theme","theme-light")});document.querySelector("#theme-dark").addEventListener("click",function(){t.classList.remove("theme-light");t.classList.add("theme-dark");window.localStorage.setItem("theme","theme-dark")});document.querySelector("#theme-auto").addEventListener("click",function(){t.classList.remove("theme-light");t.classList.remove("theme-dark");window.localStorage.setItem("theme","")});o.addEventListener("click",function(){t.classList.toggle("show-mobile-nav");this.classList.toggle("active")});e.addEventListener("click",function(e){if(e.target.nodeName=="A"&&t.classList.contains("show-mobile-nav")){o.click()}});n.addEventListener("click",function(){c=getScrollTop();r()});window.addEventListener("scroll",function(){s()},{passive:true});handleLazyBG()});function getScrollTop(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop}function querySelectorArrs(e){return Array.from(document.querySelectorAll(e))}function handleLazyBG(){const e=querySelectorArrs("[background-image-lazy]");let n=e.length;if(n>0){let o=new IntersectionObserver(function(e,t){e.forEach(function({isIntersecting:e,target:t}){if(e){let e=t.dataset.img;if(e){t.style.backgroundImage=`url(${e})`}o.unobserve(t);n--}if(n<=0){o.disconnect()}})});e.forEach(function(e){o.observe(e)})}}