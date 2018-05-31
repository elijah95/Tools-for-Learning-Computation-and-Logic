/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

 scroll();
 back();

var itemsA = [];
var itemsB = [];

var itemsC = [];
var itemsD = [];

var itemsE = [];
var itemsF = [];



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
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetA');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

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
      dropzoneElement.classList.remove('drop-targetA');
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


// enable draggables to be dropped into this
interact('#b').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetB');


    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

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
      dropzoneElement.classList.remove('drop-targetB');
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


// enable draggables to be dropped into this
interact('#c').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetC');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputIntersection").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

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
      dropzoneElement.classList.remove('drop-targetC');
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


// enable draggables to be dropped into this
interact('#d').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetD');


    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputIntersection").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

    itemsD.push(draggableElement);
    itemsD = itemsD.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });




  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsD.indexOf(item);

    itemsD.splice(index, 1);



    if(itemsD.length==0){
      dropzoneElement.classList.remove('drop-targetD');
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




// enable draggables to be dropped into this
interact('#e').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetE');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputComp").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

    itemsE.push(draggableElement);
    itemsE = itemsE.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });




  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsE.indexOf(item);
    itemsE.splice(index, 1);



    if(itemsE.length==0){
      dropzoneElement.classList.remove('drop-targetE');
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


// enable draggables to be dropped into this
interact('#f').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetF');


    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputComp").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

    itemsF.push(draggableElement);
    itemsF = itemsF.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });




  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsF.indexOf(item);

    itemsF.splice(index, 1);

    if(itemsF.length==0){
      dropzoneElement.classList.remove('drop-targetF');
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
  var a = new Set(itemsA.map(x=>parseInt(x.textContent)));
  var b = new Set(itemsB.map(x=>parseInt(x.textContent)));
  var union = Array.from(new Set([...a, ...b]));

  var pass = union.length%2!=0;

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
  var c = new Set(itemsC.map(x=>parseInt(x.textContent)));
  var d = new Set(itemsD.map(x=>parseInt(x.textContent)));
  var intersection = Array.from(new Set([...c].filter(x => d.has(x))));

  var pass = intersection.length%2==0 && intersection.length!=0;

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
  var u = [1,2,3];
  var e = new Set(itemsE.map(x=>parseInt(x.textContent)));
  var difference = Array.from(new Set([...u].filter(x => !e.has(x))));

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  if (e.size==0){
    e.add(0)
  }
  var pass = (Array.from(e).reduce(reducer)) == (difference.reduce(reducer));

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
