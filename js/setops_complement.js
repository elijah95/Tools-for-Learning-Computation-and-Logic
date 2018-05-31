/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
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


getComplement2();



// enable draggables to be dropped into this
interact('#e').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    console.log(itemsE[0],itemsE.length);

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


  getComplement2();

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsE.indexOf(item);
    itemsE.splice(index, 1);

    getComplement2();

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

    getComplement2();


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsF.indexOf(item);

    itemsF.splice(index, 1);

    getComplement2();

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



function getComplement2(){
  var e =  Array.from(new Set(itemsE.map(x=>parseInt(x.textContent)).sort()));
  var u = [1,2,3].filter(x=>e.includes(x)==false);

  e = e.join("");

  if(u.length==0){
    u = "empty";
  }
  else{
    u = u.join("");
  }

  if(e.length==0){
    e = "empty";
  }

  console.log(u);

  document.getElementById("outputComp").innerHTML =
  document.getElementById("U123").innerHTML +
  document.getElementById("E"+e).innerHTML +
  document.getElementById("UcompE"+u).innerHTML;
}

/*
function getComplement(){
  var e = [];
  var f = [];
  var UcompE = itemsUniverse;

  for (var i = 0; i < itemsE.length; i++) {
    e[i]=(parseInt(itemsE[i].textContent));
  }

  for (var i = 0; i < itemsF.length; i++) {
    f[i]=(parseInt(itemsF[i].textContent));
  }

  UcompE = compliment(e,UcompE);
  console.log(UcompE);

  if(f.includes(f[i])){
    UcompE.push(parseInt(itemsF[i].textContent));
  }
  e = isEmpty(uniq(e.sort()),"E");
  f = isEmpty(uniq(f.sort()),"F");
  UcompE = isEmpty(uniq(UcompE.sort()),"UcompE");

  var strE = document.getElementById(e).innerHTML;
  var strF = document.getElementById(f).innerHTML;
  var strUcompE = document.getElementById(UcompE).innerHTML;

  return [strE,strF,strUcompE];
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

function compliment(a,universe){
  return universe.filter(x=>a.includes(x)==false);
}

function loadComp(){
  var items = document.getElementsByClassName("comp");
  return items;
}
*/
