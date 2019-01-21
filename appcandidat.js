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
 
 function myTransition() {
    document.querySelector("header").style.WebkitTransition = "right 1s"; // Code for Safari 3.1 to 6.0
    document.querySelector("header").style.transition = "right 1s";       // Standard syntax
}
// show formular when i click on one of creer or connexion and close when i click on X

const creerCompte = document.querySelector(".creer");
const meConnecter = document.querySelector(".connexion");
const btnCreer = document.querySelector(".buttoncreer");
const btnConnexion = document.querySelector(".buttonconnexion");
const creerCloser = document.querySelector(".closeCreer");
const connexionCloser = document.querySelector(".closeConnexion");

btnCreer.addEventListener("click", function(event){
  document.querySelector(".creer").style.left = "20%";
  document.querySelector(".buttoncreer").style.display = "none";
  document.querySelector(".connexion").style.right = "-50%";
  document.querySelector(".buttonconnexion").style.display = "block";
})
btnConnexion.addEventListener("click", function(event2){
  document.querySelector(".connexion").style.right = "20%";
  document.querySelector(".buttonconnexion").style.display = "none";
  document.querySelector(".creer").style.left = "-50%";
  document.querySelector(".buttoncreer").style.display = "block";

})
creerCloser.addEventListener("click", function(closercreer){
    document.querySelector(".creer").style.left = "-50%";
    document.querySelector(".buttoncreer").style.display = "block";
  })
  connexionCloser.addEventListener("click", function(closerconnexion){
    document.querySelector(".connexion").style.right = "-50%";
    document.querySelector(".buttonconnexion").style.display = "block";
  })