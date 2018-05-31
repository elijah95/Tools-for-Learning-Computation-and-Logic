/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
back();
scroll();

var itemsA = [];
var itemsB = [];
var itemsC = [];

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
interact('#comprA').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    //var item = shapeItem(draggableElement);

    itemsA.push(draggableElement);
    itemsA = itemsA.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsA.indexOf(draggableElement);

    itemsA.splice(index, 1);

    if(itemsA.length==0){
      event.target.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});




interact('#comprB').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    //var item = shapeItem(draggableElement);

    itemsB.push(draggableElement);
    itemsB = itemsB.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });



  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsB.indexOf(draggableElement);

    itemsB.splice(index, 1);

    if(itemsB.length==0){
      event.target.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {

    var draggableElement = event.relatedTarget;


  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});





interact('#comprC').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    //var item = shapeItem(draggableElement);

    itemsC.push(draggableElement);
    itemsC = itemsC.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsC.indexOf(draggableElement);

    itemsC.splice(index, 1);



    if(itemsC.length==0){
      event.target.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {

    var draggableElement = event.relatedTarget;


  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});



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
  var items = itemsA.map(x=>parseInt(x.textContent));
  var classes = itemsA.map(x=>x.classList);

  var pass = false;

  if(items.length!=0){
    const reducer = (accumulator, currentValue) => accumulator && currentValue;
    var red = classes.map(x=>x.contains("red")).reduce(reducer);
    var even = items.map(x=>x%2==0).reduce(reducer);

    pass = red && even;
  }

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
  var items = itemsB.map(x=>parseInt(x.textContent));
  var classes = itemsB.map(x=>x.classList);

  var pass = false;

  if(items.length!=0){
    const reducer = (accumulator, currentValue) => accumulator && currentValue;
    var blue = classes.map(x=>x.contains("blue")).reduce(reducer);
    var odd = items.map(x=>x%2!=0).reduce(reducer);

    pass = blue && odd;
  }

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
  var items = itemsC.map(x=>parseInt(x.textContent));
  var classes = itemsC.map(x=>x.classList);

  var pass = false;

  if(items.length!=0){
    var blue = classes.map(x=>x.contains("blue")).includes(true);
    var red = classes.map(x=>x.contains("red")).includes(true);
    var oneToThree = items.includes(1) && items.includes(2) && items.includes(3);
    pass = red && blue && oneToThree;
  }

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
