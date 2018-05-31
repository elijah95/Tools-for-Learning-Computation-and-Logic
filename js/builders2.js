/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();

var items = [];

interact('.drag-drop')
.draggable({
    onmove: window.dragMoveListener,
    inertia: true,
    restrict: {
      restriction: 'parent',
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
  })

getCompr();
// enable draggables to be dropped into this
interact('#compr').dropzone({
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

    //draggableElement.textContent = 'Dragged in';
    //document.getElementById("output").innerHTML = draggableElement.textContent;
    var draggableElement = event.relatedTarget;
    //var item = shapeItem(draggableElement);

    items.push(draggableElement);
    items = items.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    getCompr();
    activateHue(event);


  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = items.indexOf(draggableElement);

    items.splice(index, 1);

    getCompr();
    activateHue(event);

    if(items.length==0){
      //event.target.classList.remove('drop-target');
      document.getElementById("output").style.background = "#ccc";
      deactivateHue(event)
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

function getCompr(itms){
  if(items.length!=0){

    var classes = items.map(x => x.classList);
    var ints = items.map(x => parseInt(x.textContent));

    const reducerAnd = (accumulator, currentValue) => accumulator && currentValue;

    var blue = classes.map(x=>(x.contains("blue"))).reduce(reducerAnd);
    var red = classes.map(x=>(x.contains("red"))).reduce(reducerAnd);

    var odd = ints.map(x=>(x%2!=0)).reduce(reducerAnd);
    var even = ints.map(x=>(x%2==0)).reduce(reducerAnd);

    if(blue){
      if(even){
        console.log('deek')
        document.getElementById("output").innerHTML =  document.getElementById("evenb").innerHTML;
      }
      if(odd){
        document.getElementById("output").innerHTML =  document.getElementById("oddb").innerHTML;
      }
      if(!even && !odd){
        document.getElementById("output").innerHTML =  document.getElementById("blue").innerHTML;
      }
    }

    if(red){
      if(even){
        document.getElementById("output").innerHTML =  document.getElementById("evenr").innerHTML;
      }
      if(odd){
        document.getElementById("output").innerHTML =  document.getElementById("oddr").innerHTML;
      }
      if(!even && !odd){
        document.getElementById("output").innerHTML =  document.getElementById("red").innerHTML;
      }
    }

    if(!red && !blue){
      if(even){
        document.getElementById("output").innerHTML =  document.getElementById("even").innerHTML;
      }

      if(odd){
        document.getElementById("output").innerHTML =  document.getElementById("odd").innerHTML;
      }

      if(!even && !odd){
        var max = Math.max(...ints);
        var min = Math.min(...ints);
        document.getElementById("output").innerHTML =  document.getElementById(min + "to" + max).innerHTML;
      }
    }
  }

  else{
    document.getElementById("output").innerHTML =  document.getElementById("emptyset").innerHTML;
  }
}


function activateHue(event){

  var dropzoneElement = event.target;

  const reducerAnd = (accumulator, currentValue) => accumulator && currentValue;

  if(items!=0){
    var classes = items.map(x => x.classList);

    var blue = classes.map(x=>(x.contains("blue"))).reduce(reducerAnd);
    var red = classes.map(x=>(x.contains("red"))).reduce(reducerAnd);

    if(blue){
      deactivateHue(event);
      dropzoneElement.classList.add('blue-on');
      document.getElementById("output").style.background = "#66a3ff";
    }
    if(red){
      deactivateHue(event);
      dropzoneElement.classList.add('red-on');
      document.getElementById("output").style.background = "#ff6666";
    }
    if(!red && !blue){
      deactivateHue(event);
      dropzoneElement.classList.add('purple-on');
      document.getElementById("output").style.background = "#d98cd9";
    }
  }
}


function deactivateHue(event){
  var dropzoneElement = event.target;

  dropzoneElement.classList.remove('red-on');
  dropzoneElement.classList.remove('blue-on');
  dropzoneElement.classList.remove('purple-on');
}

function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}
