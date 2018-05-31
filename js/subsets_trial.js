scroll();
back();

var itemsA1 = [];
var itemsB1 = [];

var itemsA2 = [];
var itemsB2 = [];

var itemsA3 = [];
var itemsB3 = [];


interact('.drag-drop')
.draggable({
    onmove: window.dragMoveListener,
    inertia: true,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })

//=================================================================================================


// enable draggables to be dropped into this
interact('#set1').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:


  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');


    if(itemsA1.includes(draggableElement)==false){

      var draggableElement = event.relatedTarget;
      itemsA1.push(draggableElement)
      itemsA1 = itemsA1.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }

  },
    ondragleave: function (event) {

    var draggableElement = event.relatedTarget;


    var index = itemsA1.indexOf(draggableElement);
    itemsA1.splice(index, 1);


    if (itemsA1.length==0){
      event.target.classList.remove('light-up');
    }

  },
  ondrop: function (event) {


  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;
    event.relatedTarget.classList.remove('can-drop');
  }
});



interact('#subset1').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:


  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;

    if(itemsA1.includes(draggableElement)==false){

      itemsA1.push(draggableElement)
      itemsA1 = itemsA1.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
      itemsB1.push(draggableElement)
      itemsB1 = itemsB1.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });

    }

    else {

      itemsB1.push(draggableElement)
      itemsB1 = itemsB1.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }


  },
    ondragleave: function (event) {
    // remove the drop feedback style

    var draggableElement = event.relatedTarget;

    var index = itemsB1.indexOf(draggableElement);
    itemsB1.splice(index, 1);

    if (itemsB1.length==0){
      event.target.classList.remove('light-up');
    }


  },
  ondrop: function (event) {

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});


//=================================================================================================

// enable draggables to be dropped into this
interact('#set2').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:


  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');



    if(itemsA2.includes(draggableElement)==false){

      var draggableElement = event.relatedTarget;
      itemsA2.push(draggableElement)
      itemsA2 = itemsA2.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }

  },
    ondragleave: function (event) {

    var draggableElement = event.relatedTarget;


    var index = itemsA2.indexOf(draggableElement);
    itemsA2.splice(index, 1);


    if (itemsA2.length==0){
      event.target.classList.remove('light-up');
    }

  },
  ondrop: function (event) {


  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;
    event.relatedTarget.classList.remove('can-drop');
  }
});


interact('#subset2').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;

    if(itemsA2.includes(draggableElement)==false){

      itemsA2.push(draggableElement)
      itemsA2 = itemsA2.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
      itemsB2.push(draggableElement)
      itemsB2 = itemsB2.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });

    }

    else {

      itemsB2.push(draggableElement)
      itemsB2 = itemsB2.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }


  },
    ondragleave: function (event) {
    // remove the drop feedback style

    var draggableElement = event.relatedTarget;

    var index = itemsB3.indexOf(draggableElement);
    itemsB2.splice(index, 1);

    if (itemsB2.length==0){
      event.target.classList.remove('light-up');
    }


  },
  ondrop: function (event) {

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});


//=================================================================================================




// enable draggables to be dropped into this
interact('#set3').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:


  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');



    if(itemsA3.includes(draggableElement)==false){

      var draggableElement = event.relatedTarget;
      itemsA3.push(draggableElement)
      itemsA3 = itemsA3.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }

  },
    ondragleave: function (event) {

    var draggableElement = event.relatedTarget;


    var index = itemsA3.indexOf(draggableElement);
    itemsA3.splice(index, 1);


    if (itemsA3.length==0){
      event.target.classList.remove('light-up');
    }

  },
  ondrop: function (event) {


  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;
    event.relatedTarget.classList.remove('can-drop');
  }
});



interact('#subset3').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:


  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;

    if(itemsA3.includes(draggableElement)==false){

      itemsA3.push(draggableElement)
      itemsA3 = itemsA3.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
      itemsB3.push(draggableElement)
      itemsB3 = itemsB3.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });

    }

    else {

      itemsB3.push(draggableElement)
      itemsB3 = itemsB3.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }


  },
    ondragleave: function (event) {
    // remove the drop feedback style

    var draggableElement = event.relatedTarget;

    var index = itemsB3.indexOf(draggableElement);
    itemsB3.splice(index, 1);

    if (itemsB3.length==0){
      event.target.classList.remove('light-up');
    }


  },
  ondrop: function (event) {

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});

//=================================================================================================

function sortStrs(strs){
  var sorted =[];
  if (strs.includes("red")){
    sorted.push("red")
  }
  if (strs.includes("blue")){
    sorted.push("blue")
  }
  if (strs.includes("green")){
    sorted.push("green")
  }

  return sorted;
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
  var bEven = itemsB1.map(x=>parseInt(x.textContent)%2==0).includes(false)==false && itemsB1.length != 0;

  var aRed = containsColor(itemsA1,"red");
  var aBlue = containsColor(itemsA1,"blue");
  var aGreen = containsColor(itemsA1,"green");
  var arbg = aRed && aBlue && aGreen;

  var pass = arbg && bEven;

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
  var a = itemsA2.map(x=>parseInt(x.textContent)).reduce((a, b) => a + b, 0);
  var b = itemsB2.map(x=>parseInt(x.textContent)).reduce((a, b) => a + b, 0);

  var bGreen = containsColor(itemsB2,"green");

  var pass = (b==a/2) && (bGreen);

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
  var a = itemsA3.map(x=>parseInt(x.textContent)).reduce((a, b) => a + b, 0);
  var b = itemsB3.map(x=>parseInt(x.textContent)).reduce((a, b) => a + b, 0);


  var aRed = containsColor(itemsA3,"red");
  var aBlue = containsColor(itemsA3,"blue");
  var aGreen = containsColor(itemsA3,"green");
  var arbg = aRed && aBlue && aGreen;

  var pass = (arbg) && (a==b*b)

  if(pass){
    console.log("PASS");
    return 1/3;
  }
  else{
    console.log("FAIL");
    return 0;
  }
}


function containsColor(items,color){
  if(items.length!=0){
    var classes = items.map(x=>x.classList);
    const reducer = (accumulator, currentValue) => accumulator || currentValue;
    return classes.map(x=>x.contains(color)).reduce(reducer);
  }
  else {
    return false;
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
   console.log(wScroll)
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
