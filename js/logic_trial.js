/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();
back();

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
    }
  })
.on('doubletap', function (event) {
  swapValue(event);
})


// enable draggables to be dropped into this
interact('#a').dropzone({
  // only accept elements matching this CSS selector
  accept: '.item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;


    dropzoneElement.classList.add('drop-target') ;
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;
    itemsA.push(draggableElement)
    itemsA = itemsA.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;


    var index = itemsA.indexOf(draggableElement);
    itemsA.splice(index, 1);


    if(itemsA.length==0){
      dropzoneElement.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

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
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;


    dropzoneElement.classList.add('drop-target') ;
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;
    itemsB.push(draggableElement)
    itemsB = itemsB.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;


    var index = itemsB.indexOf(draggableElement);
    itemsB.splice(index, 1);


    if(itemsB.length==0){
      dropzoneElement.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

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
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;


    dropzoneElement.classList.add('drop-target') ;
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;
    itemsC.push(draggableElement)
    itemsC = itemsC.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;


    var index = itemsC.indexOf(draggableElement);
    itemsC.splice(index, 1);


    if(itemsC.length==0){
      dropzoneElement.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
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
  var pass = false;

  if(itemsA.length==3){
    var items = itemsA.map(x=>x.textContent.split(" "));

    var m = items.filter(x=>x.includes("m"));
    var p = items.filter(x=>x.includes("p"));
    var q = items.filter(x=>x.includes("q"));

    var mBool = (parseBool(m[0][1]))
    var pBool = (parseBool(p[0][1]))
    var qBool = (parseBool(q[0][1]))

    pass = (mBool || pBool) && (!qBool)
  }

  if(pass){
    console.log("PASS");
    return  1/3;
  }
  else{
    console.log("FAIL");
    return  0;
  }
}





function scoreTwo(){
  var pass = false;

  if(itemsB.length==3){
    var items = itemsB.map(x=>x.textContent.split(" "));

    var m = items.filter(x=>x.includes("m"));
    var p = items.filter(x=>x.includes("p"));
    var q = items.filter(x=>x.includes("q"));

    var mBool = (parseBool(m[0][1]))
    var pBool = (parseBool(p[0][1]))
    var qBool = (parseBool(q[0][1]))

    pass = !mBool ^ (pBool && !qBool);
  }
    if(pass){
      console.log("PASS");
      return  1/3;
    }
    else{
      console.log("FAIL");
      return  0;
    }
}


function scoreThree(){
  var pass = false;

  if(itemsC.length==3){
    var items = itemsC.map(x=>x.textContent.split(" "));

    var m = items.filter(x=>x.includes("m"));
    var p = items.filter(x=>x.includes("p"));
    var q = items.filter(x=>x.includes("q"));

    var mBool = (parseBool(m[0][1]));
    var pBool = (parseBool(p[0][1]));
    var qBool = (parseBool(q[0][1]));

    pass = (!(mBool == pBool)) ^ (mBool || !qBool)
  }

    if(pass){
      console.log("PASS");
      return  1/3;
    }
    else{
      console.log("FAIL");
      return  0;
    }
}

function submit(){

  var score = (scoreOne()+scoreTwo()+scoreThree()).toFixed(2);

  localStorage.setItem("scr", score);
  location.reload();
  location.href='sets_score.html';
  console.log(score)
}



function swapValue(event){
  var target = event.currentTarget;
  var content = event.currentTarget.innerHTML;

  if(target.classList.contains("true")) {
    target.classList.remove("true");
    target.classList.add("false");
    target.innerHTML = content[0] + " false"
    event.currentTarget.classList.toggle('red');
    event.preventDefault();
    return
  }

  if(target.classList.contains("false")) {
    target.classList.remove("false");
    target.classList.add("true");
    target.innerHTML = content[0] + " true"
    event.currentTarget.classList.toggle('red');
    event.preventDefault();
    return
  }
}

function parseBool(str){
  switch (str) {
    case "true":
      return true;
      break;
    default:
      return false;
  }
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
