/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
var itemsC = [];
var itemsD = [];


interact('.drag-drop')
.draggable({
    onmove: window.dragMoveListener,
    inertia: true,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })

getIntersection2();

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


    getIntersection2();

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsC.indexOf(item);
    itemsC.splice(index, 1);

    getIntersection2();

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

    getIntersection2();


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsD.indexOf(item);

    itemsD.splice(index, 1);

    getIntersection2();

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




function getIntersection2(){
  var c =  Array.from(new Set(itemsC.map(x=>parseInt(x.textContent)).sort()));
  var d =  Array.from(new Set(itemsD.map(x=>parseInt(x.textContent)).sort()));
  var intersection = c.filter(x=>d.includes(x)).sort();

  c = c.join("");
  d = d.join("");

  if(intersection.length==0){
    intersection = "empty";
  }
  else{
    intersection = intersection.join("");

  }

  if(c.length==0){
    c = "empty";
  }

  if(d.length==0){
    d = "empty";
  }

  document.getElementById("outputIntersection").innerHTML =
  document.getElementById("C"+c).innerHTML +
  document.getElementById("D"+d).innerHTML +
  document.getElementById("CnD"+intersection).innerHTML;

}


/*function getIntersection(){
  var c = [];
  var d = [];
  var cnd = [];

  for (var i = 0; i < itemsC.length; i++) {
    c[i]=(parseInt(itemsC[i].textContent));
  }

  for (var i = 0; i < itemsD.length; i++) {
    d[i]=(parseInt(itemsD[i].textContent));
  }

  cnd = intersect(c,d);

  if(d.includes(d[i])){
    cnd.push(parseInt(itemsD[i].textContent));
  }
  c = isEmpty(uniq(c.sort()),"C");
  d = isEmpty(uniq(d.sort()),"D");
  cnd = isEmpty(uniq(cnd.sort()),"CnD");

  console.log(c);
  var strC = document.getElementById(c).innerHTML;
  var strD = document.getElementById(d).innerHTML;
  var strcnd = document.getElementById(cnd).innerHTML;

  return [strC,strD,strcnd];
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


function intersect(c,d){
  return c.filter(x=>d.includes(x));
}*/
