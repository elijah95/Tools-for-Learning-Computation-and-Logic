scroll2();


/*$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll/10 +'%)'
  });

  $('.traffic').css({
    'transform' : 'translate(0px, '+ wScroll/40 +'%)'
  });

  if(wScroll > $('.lessons').offset().top - ($(window).height()/1.2)){
    $('.lessons figure').each(function(i){
      setTimeout(function(){
        $('.lessons figure').eq(i).addClass('is-showing');
      }, 150 * (i +1));
    });
  }

});
*/

function scroll2(){
  window.addEventListener('scroll', function(e) {
  var wScroll =  this.scrollY;
   document.getElementsByClassName('logo')[0].style.transform = "translate(0,"+wScroll/26 +"%)"
   document.getElementsByClassName('traffic')[0].style.transform = "translate(0,"+wScroll/40 +"%)"

   if(wScroll > document.getElementsByClassName("lessons")[0].offsetTop -  window.innerHeight/1.2){
     var lessons = document.querySelectorAll('.lessons figure');
     for (i = 0; i < lessons.length; i++) {
       timeOut(lessons[i],i);
     }
   }
 });
}

function timeOut(lesson,count){
  setTimeout(function(){
    lesson.classList.add("is-showing");
  }, 150  * (count + 1));
}


function openNav(title,lesson,trial) {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("navTitle").innerHTML = title;
  document.getElementById("lesson").setAttribute("href", lesson);
  document.getElementById("trial").setAttribute("href", trial);
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
