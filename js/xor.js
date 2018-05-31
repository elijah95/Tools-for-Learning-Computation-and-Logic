/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
var items = [];

var instances = document.querySelectorAll('#item.draggable.drag-drop').length;

interact('.drag-drop')
.draggable({
    onmove: window.dragMoveListener,
    inertia: true,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })

if (items.length==0){
  document.getElementById("output_xor").innerHTML =  document.getElementById("emptyset").innerHTML
}
// enable draggables to be dropped into this
interact('#xor').dropzone({
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
    //document.getElementById("output_xor").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    items.push(draggableElement.textContent)
    items = items.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    document.getElementById("output_xor").innerHTML = getComprXor(items)

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = items.indexOf(draggableElement.textContent);
    items.splice(index, 1);

    event.target.classList.remove('drop-target');
    document.getElementById("output_xor").innerHTML = getComprXor(items);




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



function getComprXor(items){
  var stripped = stripItems(items);

  cols = []
  shapes =[]
  for (var i = 0; i < items.length; i++) {
    //console.log(items[i].toLowerCase().indexOf("disc") !== -1)
    //console.log(items[i].toLowerCase().trim().split(' '))
    cols[i] = items[i].toLowerCase().trim().split(' ')[0]
    shapes[i] = items[i].toLowerCase().trim().split(' ')[1]
  }

  setcol = uniq(cols);
  setshape = uniq(shapes);

  var colmax =  getMaxCount(cols);
  var shapemax =  getMaxCount(shapes);

  console.log(colmax,shapemax)

  if(items.length==0){
    return  document.getElementById("emptyset").innerHTML
  }
  if(items.length==1){
    return document.getElementById("xor"+setcol[0]+setshape[0]).innerHTML
  }

  else{
    if(setcol.length==1){
      return document.getElementById("xor"+setcol[0]).innerHTML
    }

    if(setshape.length==1){
      return document.getElementById("xor"+setshape[0]).innerHTML

    }
    if(itemsIff.length==4){
      return document.getElementById("xor"+"full").innerHTML

    }
    if(contains(["reddisc","redbox","bluedisc"], stripped)){
      return document.getElementById("xor"+"redordisc").innerHTML
    }

    if(contains(["reddisc","redbox","bluebox"], stripped)){
      return document.getElementById("xor"+"redorbox").innerHTML
    }

    if(contains(["bluedisc","bluebox","reddisc"], stripped)){
      return document.getElementById("xor"+"blueordisc").innerHTML
    }

    if(contains(["bluedisc","bluebox","redbox"], stripped)){
      return document.getElementById("xor"+"blueorbox").innerHTML
    }
    else{
      return document.getElementById("xorfull").innerHTML
    }
  }
}


function stripItems(items){
    var str = []
    for (var i = 0; i < items.length; i++) {
      str[i] = items[i].replace(/\s/g,'').toLowerCase();
    }
    return str;
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
