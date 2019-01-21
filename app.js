(function() // transition sur la redirection de mon liens d'ancrage
 {
     var speed = 600;
     var moving_frequency = 15; // Affects performance !
     var links = document.querySelectorAll("a"); // Active links
     var href;
     for(var i=0; i<links.length; i++)
     {   
         href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
         if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
         {
             links[i].onclick = function()
             {
                 var element;
                 var href = this.attributes.href.nodeValue.toString();
                 if(element = document.getElementById(href.substr(1)))
                 {
                     var hop_count = speed/moving_frequency
                     var getScrollTopDocumentAtBegin = getScrollTopDocument();
                     var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;
                     
                     for(var j = 1; j <= hop_count; j++)
                     {
                         (function()
                          {
                              var hop_top_position = gap*j;
                              setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*j);
                          })();
                     }
                 }
                 
                 return false;
             };
         }
     }
     
     var getScrollTopElement =  function (e)
     {
         var top = 0;
         
         while (e.offsetParent != undefined && e.offsetParent != null)
         {
             top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
             e = e.offsetParent;
         }
         
         return top;
     };
     
     var getScrollTopDocument = function()
     {
         return document.documentElement.scrollTop + document.body.scrollTop;
     };
 })();

// carré de scroll 
  
 document.querySelector("header").onmouseover= function (onmouseoverheader) {
    document.querySelector(".scroll-help-home").style.right = "3vw";
  }
  document.querySelector("header").onmouseout= function (onmouseoutheader) {
    document.querySelector(".scroll-help-home").style.right = "2vw";
  } 
  document.querySelector("header").ontouchstart= function (onetouchstartheader) {
 document.querySelector(".scroll-help-home").style.right = "3vw";
  }
  document.querySelector("header").ontouchend= function (ontouchendheader) {
    document.querySelector(".scroll-help-home").style.right = "2vw";
  }
document.querySelector(".masection1").onmouseover= function (onmouseovers1) {
    document.querySelector(".scroll-help").style.right = "3vw";
  }
  document.querySelector(".masection1").onmouseout= function () {
    document.querySelector(".scroll-help").style.right = "2vw";
  }
  document.querySelector(".masection1").ontouchstart= function () {
    document.querySelector(".scroll-help").style.right = "3vw";
  }
  document.querySelector(".masection1").ontouchend= function () {
    document.querySelector(".scroll-help").style.right = "2vw";
  }

  document.querySelector(".masection3").onmouseover= function () {
    document.querySelector(".scroll-help3").style.right = "3vw";
  }
  document.querySelector(".masection3").onmouseout= function () {
    document.querySelector(".scroll-help3").style.right = "2vw";
  }
  document.querySelector(".masection3").ontouchstart= function () {
    document.querySelector(".scroll-help3").style.right = "3vw";
  }
  document.querySelector(".masection3").ontouchend= function () {
    document.querySelector(".scroll-help3").style.right = "2vw";
  }

  document.querySelector(".masection2").onmouseover= function () {
    document.querySelector(".scroll-help2").style.right = "3vw";
  }
  document.querySelector(".masection2").onmouseout= function () {
    document.querySelector(".scroll-help2").style.right = "2vw"; 
  }
  document.querySelector(".masection2").ontouchstart= function () {
    document.querySelector(".scroll-help2").style.right = "3vw";
  }
  document.querySelector(".masection2").ontouchend= function () {
    document.querySelector(".scroll-help2").style.right = "2vw";
  }
  
  //  Aos framwork effect in scroll

  AOS.init();
  
  

  function myTransition() {
    document.querySelector("header").style.WebkitTransition = "right 1s"; // Code for Safari 3.1 to 6.0
    document.querySelector("header").style.transition = "right 1s";       // Standard syntax
}

