/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();

var itemsA = [];
var itemsB = [];

document.getElementById("box").innerHTML = document.getElementById("boxstd").innerHTML
document.getElementById("disc").innerHTML = document.getElementById("discstd").innerHTML
document.getElementById("star").innerHTML = document.getElementById("starstd").innerHTML

getPairs();
loadLeft();
loadBottom();

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
    draggableElement.classList.add('can-drop');
    dropzoneElement.classList.add('drop-targetA');


    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;

    itemsA.push(draggableElement);
    itemsA = itemsA.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    getPairs();
    loadLeft();
    loadBottom();
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsA.indexOf(item);
    itemsA.splice(index, 1);

    getPairs();
    loadLeft();
    loadBottom();

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
  accept: '.item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
  //  dropzoneElement.classList.add('drop-target');
  //draggableElement.classList.add('can-drop');
  dropzoneElement.classList.add('drop-targetB');
  dropActivate(draggableElement);

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;

    itemsB.push(draggableElement);
    itemsB = itemsB.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    getPairs();
    loadLeft();
    loadBottom();

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

    getPairs();
    loadLeft();
    loadBottom();

    if(itemsA.length==0){
      dropzoneElement.classList.remove('drop-targetB');
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


function getPairs(){
  var items = [].concat(itemsA,itemsB);
  if(assertColShape(items)){
    document.getElementById("includedContent").classList.remove("hidden");
    document.getElementById("noInclude").classList.add("hidden");
    var pair = sortItems(items);
    getHTML("shapes.html"+ " #"+pair);
  }
  else{
    document.getElementById("noInclude").classList.remove("hidden");
    document.getElementById("includedContent").classList.add("hidden");
  }
}

function isEmpty(arr,x){
    if(arr.length==0){
      return x+"empty"
    }
    else {
      return x+arr.join("");
    }
}

function uniq(a) {
   return Array.from(new Set(a));
}

function getPts(a,b){
  return a.map(x=>x/b)
}

function getHTML(html){
  $(function(){
     $("#includedContent").load(html);
   });
}

function assertColShape(items){
  var col = 0;
  var shape = 0;
  for (var i = 0; i < items.length; i++) {
    if(items[i].outerHTML.includes("shape")){
      shape = 1
    }
    if(items[i].outerHTML.includes("col")){
      col = 1
    }
  }

  return (col+shape)==2;
}

function sortItems(items){
    var classes = items.map(x=>getClass(x));
    var shape = [];
    if(classes.includes("red")){
      shape.push("red");
    }
    if(classes.includes("blue")){
      shape.push("blue");
    }
    if(classes.includes("green")){
      shape.push("green");
    }
    if(classes.includes("box")){
      shape.push("box");
    }
    if(classes.includes("disc")){
      shape.push("disc");
    }
    if(classes.includes("star")){
      shape.push("star");
    }

    return (shape.join(""));
}

function getClass(item){
  var start = item.outerHTML.indexOf("=")+2;
  var end = item.outerHTML.indexOf("class")-2;
  var alphaExp = "/^[a-zA-Z]+$/";
  return item.outerHTML.substring(start, end);
}

function loadLeft(){
  var a = "Aempty"

  if(itemsA.length!=0){
    a = "A"+sortItems(itemsA);
  }
  document.getElementById("leftText").innerHTML =
  document.getElementById(a).innerHTML;

}

function loadBottom(){
  var b = "Bempty"

  if(itemsB.length!=0){
    b = "B"+sortItems(itemsB);
  }
  document.getElementById("bottomText").innerHTML =
  document.getElementById(b).innerHTML;
}



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
  if(draggableElement.outerHTML.includes("box")){
    draggableElement.innerHTML = document.getElementById("boxstd").innerHTML
  }
  if(draggableElement.outerHTML.includes("disc")){
    draggableElement.innerHTML = document.getElementById("discstd").innerHTML
  }
  if(draggableElement.outerHTML.includes("star")){
      draggableElement.innerHTML = document.getElementById("starstd").innerHTML
  }
}



function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}
