!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}([function(t,e,n){n(1),t.exports=n(3)},function(t,e){},,function(t,e,n){"use strict";n(4),n(5),n(6),function(){document.addEventListener("DOMContentLoaded",function(){console.log("scripts loaded")})}()},function(t,e){"use strict";var n=function(t){var e=document.querySelectorAll('[data-file="'+t+'"]'),n="./assets/graphics/vectors/",o="";o=""!==window.location.host?window.location.protocol+"//"+window.location.host+"/"+n:window.location.protocol+"//"+n,"undefined"!=typeof SVGRect&&!function(){var n=new XMLHttpRequest;n.open("GET",o+t+".svg",!0),n.send(),n.onload=function(t){[].slice.call(e).forEach(function(t){t.innerHTML=n.responseText})}}()};!function(){document.addEventListener("DOMContentLoaded",function(){var t=[];t=document.querySelectorAll('[data-inject="vector"]'),[].forEach.call(t,function(t){n(t.getAttribute("data-file"))})})}()},function(t,e){"use strict";!function(t){t(document).ready(function(t){t(".popover").click(function(){if(t(document).width()>980)return t(this).generateFrame(),!1}),t("body").on("click",".curtain , .button--frame--close",function(e){return t(this).parent(".generateFrame").remove(),!1}),t(window).resize(function(e){t(".generateFrame").length&&t(".generateFrame").centerFrame()})}),t.fn.generateFrame=function(e){function n(){var n=t("<div/>",{"class":e["class"],style:"position:fixed;z-index: 999;width: 80%;",type:e.type}),o='<svg width="28" height="28" fill="#FFFFFF" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path d="M1.657 27.658L.343 26.342l26-26 1.314 1.316-26 26m24.686 0l-26-26L1.657.342l26 26-1.314 1.316"/></svg>';n.append('<div class="frameBlock" style="position:relative;padding-bottom:56.25%;height:0;overflow: hidden;z-index:200;"></div>'),"video"==e.type?n.find(".frameBlock").append(t('<iframe src="'+e.source+'" id="theFrame" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" />')):"image"==e.type&&n.find(".frameBlock").append(t('<img src="'+e.source+'" id="theFrame" style="position: absolute;top: 5%;left: 50%; transform: translate(-50%, 0); width: auto;height: 90%;" />')),n.append('<div class="curtain" style="display: block;position: fixed;left: 0;top: 0;width: 100%;height: 100%;cursor: pointer;background-color:rgba(0,0,0,0.8);"></div>'),n.append('<a href="#" class="button--frame--close" style="padding:1rem;display:block;position:absolute;right:-60px;top:10px;z-index:300;"><i class="icon--close">'+o+"</i></a>"),n.appendTo(t("body")),n.centerFrame()}var o=t(this).attr("data-type"),i="";"video"==o?i=t(this).attr("href").replace("watch?v=","embed/"):"image"==o&&(i=t(this).attr("href")),e=t.extend({type:t(this).attr("data-type"),"class":"generateFrame",source:i},e),t(".generateFrame").length||n()},t.fn.centerFrame=function(){return this.css("top",Math.max(0,(t(window).height()-t(this).height())/2)+"px"),this.css("left",Math.max(0,(t(window).width()-t(this).width())/2)+"px"),this}}(Zepto)},function(t,e){"use strict";!function(){document.addEventListener("DOMContentLoaded",function(){[].map.call(document.querySelectorAll(".content"),function(t){var e=t.id;document.querySelector('[data-target="#'+e+'"]').classList.remove("ghost")}),[].map.call(document.querySelectorAll(".cmd--reverse"),function(t){t.addEventListener("click",function(t){t.preventDefault();var e=this.getAttribute("data-target");null!==e&&([].map.call(document.querySelectorAll(".content"),function(t){t.classList.contains("ghost")||t.classList.add("ghost")}),document.querySelector(e).classList.remove("ghost")),document.querySelector(this.getAttribute("href")).classList.toggle("state--reverse")})}),[].map.call(document.querySelectorAll(".cmd--flip"),function(t){t.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).classList.toggle("state--flip")})})})}()}]);