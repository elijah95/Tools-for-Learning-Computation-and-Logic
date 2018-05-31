/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();

var itemsA = [];
var itemsB = [];


interact('.drag-drop')
.draggable({
    onmove: window.dragMoveListener,
    inertia: true,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })

getUnion2();

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


    getUnion2();


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsA.indexOf(item);
    itemsA.splice(index, 1);

    getUnion2();

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

    getUnion2();


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;
    //event.relatedTarget.textContent = 'Dragged out';
    var item = draggableElement;
    var index = itemsB.indexOf(item);

    itemsB.splice(index, 1);

    getUnion2();

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

function getUnion2(){
    var a =  Array.from(new Set(itemsA.map(x=>parseInt(x.textContent)).sort()));
    var b =  Array.from(new Set(itemsB.map(x=>parseInt(x.textContent)).sort()));
    var union = a.concat(b.filter(x=>a.includes(x)==false)).sort();

    a = a.join("");
    b = b.join("");
    union = union.join("");

    if(a.length==0 && b.length==0){
      union = "empty";
    }

    if(a.length==0){
      a = "empty";
    }

    if(b.length==0){
      b = "empty";
    }

    document.getElementById("output").innerHTML =
    document.getElementById("A"+a).innerHTML +
    document.getElementById("B"+b).innerHTML +
    document.getElementById("AuB"+union).innerHTML;

}
function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}
/*
function getUnion(){
  var a = [];
  var b = [];
  var aub = [];


  for (var i = 0; i < itemsA.length; i++) {
    a[i]=(parseInt(itemsA[i].textContent));
    aub.push(parseInt(itemsA[i].textContent));
  }

  for (var i = 0; i < itemsB.length; i++) {
    b[i]=(parseInt(itemsB[i].textContent));
    aub.push(parseInt(itemsB[i].textContent));
  }

  a = isEmpty(uniq(a.sort()),"A");
  b = isEmpty(uniq(b.sort()),"B");
  aub = isEmpty(uniq(aub.sort()),"AuB");

  var strA = document.getElementById(a).innerHTML;
  var strB = document.getElementById(b).innerHTML;
  var strAuB = document.getElementById(aub).innerHTML;

  return [strA,strB,strAuB];
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


*/
/*
function scroll(){
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.title').css({
      'transform' : 'translate(0px, '+ wScroll/2.6 +'%)'
    });
  });
}
*/
