/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();

var itemsAndOr = [];
var itemsNot = [];

var instances = document.querySelectorAll('#item.draggable.drag-drop').length;


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
  var content = event.currentTarget.innerHTML;

  if(content.includes("false")) {
    console.log(content.split(" "));
    event.currentTarget.innerHTML = content[0] +  " true"
  }
  else{
    console.log(content.split(" "));
    event.currentTarget.innerHTML = content[0] +  " false"
  }
  event.currentTarget.classList.toggle('switch-false');
  event.preventDefault();
})

// enable draggables to be dropped into this
interact('#and').dropzone({
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
    itemsAndOr.push(draggableElement.textContent)
    itemsAndOr = itemsAndOr.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    document.getElementById("output").innerHTML = getCompr(itemsAndOr)

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsAndOr.indexOf(draggableElement.textContent);
    itemsAndOr.splice(index, 1);

    document.getElementById("output").innerHTML = getCompr(itemsAndOr);

    if(itemsAndOr.length==0){
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


interact('#not').dropzone({
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
    //document.getElementById("output_not").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    itemsNot.push(draggableElement.textContent)
    itemsNot = itemsNot.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    document.getElementById("output_not").innerHTML = getComprNot(itemsNot)

  },
      ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsNot.indexOf(draggableElement.textContent);
    itemsNot.splice(index, 1);

    event.target.classList.remove('drop-target');
    document.getElementById("output_not").innerHTML = getComprNot(itemsNot);

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


function getCompr(itemsNot){
  cols = []
  shapes =[]
  for (var i = 0; i < itemsNot.length; i++) {
    //console.log(itemsNot[i].toLowerCase().indexOf("disc") !== -1)
    //console.log(itemsNot[i].toLowerCase().trim().split(' '))
    cols[i] = itemsNot[i].toLowerCase().trim().split(' ')[0]
    shapes[i] = itemsNot[i].toLowerCase().trim().split(' ')[1]
  }

  setcol = uniq(cols);
  setshape = uniq(shapes);

  var colmax =  getMaxCount(cols);
  var shapemax =  getMaxCount(shapes);

  console.log(colmax,shapemax)

  if(itemsNot.length==0){
    return  document.getElementById("emptyset").innerHTML
  }
  if(itemsNot.length==1){
    return document.getElementById(setcol[0]+setshape[0]).innerHTML
  }

  else{
    if(setcol.length==1){
      return document.getElementById(setcol[0]).innerHTML
    }

    if(setshape.length==1){
      return document.getElementById(setshape[0]).innerHTML

    }
    if((itemsNot.length%2)==0){
      return document.getElementById("boxdisc").innerHTML
    }

    if((itemsNot.length%2)!=0){
      console.log(colmax[0]+"or"+shapemax[0])
      return document.getElementById(colmax[0]+"or"+shapemax[0]).innerHTML
    }
  }
}

function getComprNot(itemsNot){
  cols = []
  shapes =[]
  for (var i = 0; i < itemsNot.length; i++) {
    //console.log(itemsNot[i].toLowerCase().indexOf("disc") !== -1)
    //console.log(itemsNot[i].toLowerCase().trim().split(' '))
    cols[i] = itemsNot[i].toLowerCase().trim().split(' ')[0]
    shapes[i] = itemsNot[i].toLowerCase().trim().split(' ')[1]
  }

  setcol = uniq(cols);
  setshape = uniq(shapes);

  var colmax =  getMaxCount(cols);
  var shapemax =  getMaxCount(shapes);

  console.log(colmax,shapemax)


  if(itemsNot.length==0){
    return  document.getElementById("emptyset").innerHTML
  }
  if(itemsNot.length==1){
    return document.getElementById("not"+setcol[0]+setshape[0]).innerHTML
  }

  else{
    if(setcol.length==1){
      return document.getElementById("not"+setcol[0]).innerHTML
    }

    if(setshape.length==1){
      return document.getElementById("not"+setshape[0]).innerHTML

    }
    if((itemsNot.length%2)==0){
      return document.getElementById("notboxdisc").innerHTML
    }

    if((itemsNot.length%2)!=0){
      console.log(not+colmax[0]+"or"+shapemax[0])
      return document.getElementById("not"+colmax[0]+"or"+shapemax[0]).innerHTML
    }
  }
}

function uniq(a) {
   return Array.from(new Set(a));
}


function getCount(el,arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == el){
      count++;
    }
  }
  return count;
}

function getMaxCount(arr){
  var setArr = uniq(arr);
  var maxCount = 0;
  var el = 0;
  for (var i = 0; i < setArr.length; i++) {
    var count = getCount(setArr[i],arr);
    if(count>maxCount){
      maxCount=count;
      el = setArr[i];
    }
  }
  return [el, maxCount];
}

function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}
