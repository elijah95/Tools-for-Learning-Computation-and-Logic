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
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputA").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    itemsA.push(draggableElement)
    itemsA = itemsA.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
      //  displayoutput(itemsA,"A");
  //  displaymembership(itemsA,"A");
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    var index = itemsA.indexOf(draggableElement);
    itemsA.splice(index, 1);

    //displayoutput(itemsA,"A");
  //  displaymembership(itemsA,"A");

    if (itemsA.length==0){
      event.target.classList.remove('drop-target');
      //document.getElementById("outputA").innerHTML = document.getElementById("emptyset").innerHTML
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
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputA").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    itemsB.push(draggableElement)
    itemsB = itemsB.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  //  displayoutput(itemsB,"B");
  //  displaymembership(itemsB,"B");
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    var index = itemsB.indexOf(draggableElement);
    itemsB.splice(index, 1);

    //displayoutput(itemsB,"B");
    //displaymembership(itemsB,"B");

    if (itemsB  .length==0){
      event.target.classList.remove('drop-target');
      //document.getElementById("outputA").innerHTML = document.getElementById("emptyset").innerHTML
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
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("outputA").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    itemsC.push(draggableElement)
    itemsC = itemsC.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    //displayoutput(itemsC,"C");
    //displaymembership(itemsC,"C");
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    var index = itemsC.indexOf(draggableElement);
    itemsC.splice(index, 1);

    //displayoutput(itemsC,"C");
    //displaymembership(itemsC,"C");

    if(itemsC.length==0){
      event.target.classList.remove('drop-target');
    //  document.getElementById("outputC").innerHTML = document.getElementById("emptyset").innerHTML
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

function displayoutput(items, output){
  var strs = items.map(x=>x.textContent.replace(/\s/g,'').toLowerCase());
  var sorted = sortStrs(strs);
  var id = sorted.join("");
  if(items.length==0){
    document.getElementById("output"+output).innerHTML = document.getElementById("emptyset").innerHTML ;
  }
  else{
    document.getElementById("output"+output).innerHTML = document.getElementById(id).innerHTML;
  }

}


function displaymembership(items, membership){
  var strs = items.map(x=>x.textContent.replace(/\s/g,'').toLowerCase());
  var sorted = sortStrs(strs);

  var universe =["red", "blue", "green"];
  var comp = universe.filter(x=>strs.includes(x)==false);

  var ina = (strs.map(x=>document.getElementById(x+"in"+ membership.toLowerCase()).innerHTML)).join("\n");
  var notina = (comp.map(x=>document.getElementById(x+"notin"+ membership.toLowerCase()).innerHTML)).join("\n");

  document.getElementById("membership"+membership).innerHTML = ina + notina;

  if(items.length==0){
    //var empty = (universe.map(x=>document.getElementById(x+"notin"+membership.toLowerCase()).innerHTML)).join("\n");
    //document.getElementById("membership"+membership).innerHTML =  empty;
  }
}


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
  var items = itemsA.map(x=>parseInt(x.textContent));
  var pass = items.includes(2) && items.includes(4) && items.includes(6) && itemsA.length==3;

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

  var odd = items.map(x=>x%2!=0).includes(true);
  var even = items.map(x=>x%2==0).includes(true);
  var green = items.map(x=>(x==3 || x==4)).includes(true);

  var pass = odd && even && green

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

  var red = items.map(x=>(x==1 || x==5)).includes(true);

  items.push(0);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var sum = items.reduce(reducer);

  var pass = (sum==9) && (red==false)

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
   console.log(wScroll)
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/26 +"%)"
 });
}

function back(){
  history.pushState(null, null, location.href);
    window.onpopstate = function () {
        location.reload();
        history.go(-1);
    };
}
