/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
scroll();

var items = [];

displayOutput();
displayMembership();

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
interact('#set').dropzone({
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
    items.push(draggableElement)
    items = items.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    displayOutput();
    displayMembership();
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = items.indexOf(draggableElement);
    items.splice(index, 1);

    displayOutput();
    displayMembership();

    if (items.length==0){
      event.target.classList.remove('drop-target');
      document.getElementById("output").innerHTML = document.getElementById("emptyset").innerHTML
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

function displayOutput(){
  var strs = items.map(x=>x.textContent.replace(/\s/g,'').toLowerCase());
  var sorted = sortStrs(strs);
  var id = sorted.join("");
  if(items.length==0){
    document.getElementById("output").innerHTML = document.getElementById("emptyset").innerHTML ;
  }
  else{
    document.getElementById("output").innerHTML = document.getElementById(id).innerHTML;
  }

}


function displayMembership(){
  var strs = items.map(x=>x.textContent.replace(/\s/g,'').toLowerCase());
  var sorted = sortStrs(strs);

  var universe =["red", "blue", "green"];
  var comp = universe.filter(x=>strs.includes(x)==false);

  var ina = (strs.map(x=>document.getElementById(x+"ina").innerHTML)).join("\n");
  var notina = (comp.map(x=>document.getElementById(x+"notina").innerHTML)).join("\n");

  document.getElementById("membership").innerHTML = ina + notina;

  if(items.length==0){
    var empty = (universe.map(x=>document.getElementById(x+"notina").innerHTML)).join("\n");
    document.getElementById("membership").innerHTML =  empty;
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


function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   console.log(wScroll)
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/26 +"%)"
 });
}
