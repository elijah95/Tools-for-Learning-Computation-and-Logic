/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();
back();

var itemsA = [];
var itemsB = [];
var itemsC = [];


initializeShapes();


interact('.drag-drop')
.draggable({
    onmove: window.dragMoveListener,
    inertia: true,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })


// enable draggables to be dropped into this
interact('#a').dropzone({
  // only accept elements matching this CSS selector
  accept: '.item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
  //  draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-target');
    dropActivate(draggableElement);

    itemsA.push(draggableElement);
    itemsA = itemsA.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsA.indexOf(item);
    itemsA.splice(index, 1);



    if(itemsA.length==0){
      dropzoneElement.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {

    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

  //  event.relatedTarget.classList.remove('can-drop');
    dropDeactivate(draggableElement);

  }
});


// enable draggables to be dropped into this
interact('#b').dropzone({
  // only accept elements matching this CSS selector
  accept: '.item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
  //  draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-target');
    dropActivate(draggableElement);

    itemsB.push(draggableElement);
    itemsB = itemsB.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsB.indexOf(item);
    itemsB.splice(index, 1);



    if(itemsB.length==0){
      dropzoneElement.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {

    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

  //  event.relatedTarget.classList.remove('can-drop');
    dropDeactivate(draggableElement);

  }
});


// enable draggables to be dropped into this
interact('#c').dropzone({
  // only accept elements matching this CSS selector
  accept: '.item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
  //  draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-target');
    dropActivate(draggableElement);

    itemsC.push(draggableElement);
    itemsC = itemsC.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsC.indexOf(item);
    itemsC.splice(index, 1);



    if(itemsC.length==0){
      dropzoneElement.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {

    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.classList.remove('can-drop');
    dropDeactivate(draggableElement);

  }
});


function dropActivate(draggableElement){
  if(draggableElement.outerHTML.includes("box")){
    draggableElement.innerHTML = document.getElementById("boxtrans").innerHTML
  }
  if(draggableElement.outerHTML.includes("disc")){
    draggableElement.innerHTML = document.getElementById("disctrans").innerHTML
  }
  if(draggableElement.outerHTML.includes("star")){
      draggableElement.innerHTML = document.getElementById("startrans").innerHTML
  }
}

function dropDeactivate(draggableElement){
  if(draggableElement.outerHTML.includes("boxr")){
    draggableElement.innerHTML = document.getElementById("boxstdr").innerHTML
  }

  if(draggableElement.outerHTML.includes("boxb")){
    draggableElement.innerHTML = document.getElementById("boxstdb").innerHTML
  }

  if(draggableElement.outerHTML.includes("boxg")){
    draggableElement.innerHTML = document.getElementById("boxstdg").innerHTML
  }



  if(draggableElement.outerHTML.includes("discr")){
    draggableElement.innerHTML = document.getElementById("discstdr").innerHTML
  }

  if(draggableElement.outerHTML.includes("discb")){
    draggableElement.innerHTML = document.getElementById("discstdb").innerHTML
  }

  if(draggableElement.outerHTML.includes("discg")){
    draggableElement.innerHTML = document.getElementById("discstdg").innerHTML
  }


  if(draggableElement.outerHTML.includes("starr")){
      draggableElement.innerHTML = document.getElementById("starstdr").innerHTML
  }

  if(draggableElement.outerHTML.includes("starb")){
      draggableElement.innerHTML = document.getElementById("starstdb").innerHTML
  }

  if(draggableElement.outerHTML.includes("starg")){
      draggableElement.innerHTML = document.getElementById("starstdg").innerHTML
  }
}


function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("timer").textContent = minutes + ":" + seconds;

        if(timer<60*1){
          document.getElementById("timer").classList.add("critical")
        }

        if (--timer < 0) {
          var one = scoreOne();
          var two = scoreTwo();
          var three = scoreThree();
          score = (one+two+three).toFixed(2);

          localStorage.setItem("scr", score);
          location.reload();
          window.location.href="sets_score.html"
        //  timer = duration;
        }
    }, 1000);
}

function begin(){
  document.getElementById("trial").classList.remove("hidden");
  document.getElementById("intro").classList.add("hidden");

  var fiveMinutes = 60 * 5;
  startTimer(fiveMinutes);
  document.getElementById("bassa").play();
}


function scoreOne(){
  //red blue box disc

  var ids = itemsA.map(x=>x.id);

  var redbox = ids.includes("boxr1");
  var reddisc = ids.includes("discr1");
  var bluebox = ids.includes("boxb1");
  var bluedisc = ids.includes("discb1");

  var pass = redbox && reddisc  && bluebox && bluedisc && itemsA.length==4;

  if(pass){
    console.log("PASS");
    return 1/3;
  }
  else{
    console.log("FAIL");
    return 0;
  }
}



function scoreTwo(){
  //blue green box disc star

  var ids = itemsB.map(x=>x.id);

  var bluebox = ids.includes("boxb2");
  var bluedisc = ids.includes("discb2");
  var bluestar = ids.includes("starb2");
  var greenbox = ids.includes("boxg2");
  var greendisc = ids.includes("discg2");
  var greenstar = ids.includes("starg2");

  var pass = bluebox && bluedisc  && bluestar && greenbox && greendisc && greenstar && itemsB.length==6;

  if(pass){
    console.log("PASS");
    return 1/3;
  }
  else{
    console.log("FAIL");
    return 0;
  }
}


function scoreThree(){
  // red blue green disc star
  var ids = itemsC.map(x=>x.id);

  var reddisc = ids.includes("discr3");
  var redstar = ids.includes("starr3");
  var bluedisc = ids.includes("discb3");
  var bluestar = ids.includes("starb3");
  var greendisc = ids.includes("discg3");
  var greenstar = ids.includes("starg3");

  var pass = reddisc && redstar  && bluedisc && bluestar && greendisc && greenstar && itemsC.length==6;

  if(pass){
    console.log("PASS");
    return 1/3;
  }
  else{
    console.log("FAIL");
    return 0;
  }
}


function submit(){
  var one = scoreOne();
  var two = scoreTwo();
  var three = scoreThree();
  score = (one+two+three).toFixed(2);

  localStorage.setItem("scr", score);
  location.reload();
  location.href='sets_score.html';
}

function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}

function back(){
  history.pushState(null, null, location.href);
    window.onpopstate = function () {
        location.reload();
        history.go(-1);
  };
}

function initializeShapes(){
  var cols = ["r", "b", "g",];
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < cols.length; j++) {
      document.getElementById("box" + cols[j] + i).innerHTML = document.getElementById("boxstd"+cols[j]).innerHTML
      document.getElementById("disc" + cols[j] + i).innerHTML = document.getElementById("discstd"+cols[j]).innerHTML
      document.getElementById("star" + cols[j] + i).innerHTML = document.getElementById("starstd"+cols[j]).innerHTML
    }
  }
}
