/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

scroll();

var itemsTri = [];

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
  swapLit(event);
  swapValue(event);
  swapOp(event);
  getTri(event);
  getDemorgan(event);
  getXor(event);
  getIff(event);
})

interact('.dropzone')

.on('doubletap', function (event) {
  swapDz(event);
  getTri(event);

})


// enable draggables to be dropped into this
interact('#tri').dropzone({
  // only accept elements matching this CSS selector
  accept: '.item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;

    document.getElementById("output_tri").classList.remove("hidden");

    var activate = Array.from(classes).filter(x=>["and","or", "not"].includes(x))[0];

    dropzoneElement.classList.add('drop-target'+activate) ;
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;
    itemsTri.push(draggableElement)
    itemsTri = itemsTri.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    getTri(event);
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target,
        classes = dropzoneElement.classList;

    var ops = ["and","or","not"];
    var active = Array.from(classes).filter(x=>ops.includes(x));

    var index = itemsTri.indexOf(draggableElement);
    itemsTri.splice(index, 1);

    var activate = Array.from(classes).filter(x=>["and","or", "not"].includes(x))[0];

    if(itemsTri.length==0){
      dropzoneElement.classList.remove('drop-target'+ active);
      document.getElementById("output_tri").classList.add("hidden");

    }
    getTri(event);

  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});


function getTri(event){
  if(itemsTri.length!=0){

    var and = itemsTri.map(x=>x.textContent.split(" "));

    var p = and.filter(x=>x.includes("p"));
    var q = and.filter(x=>x.includes("q"));

    var dzClasses = document.getElementById("tri").classList;

    if(and.join("").includes("p")){
      if(dzClasses.contains("not")){
        document.getElementById('output_tri').innerHTML = document.getElementById("not"+'p'+(!parseBool(p[0][1])).toString()).innerHTML
      }
      else{
        document.getElementById('output_tri').innerHTML = document.getElementById('p'+p[0][1]).innerHTML
      }
    }

    if(and.join("").includes("q")){
      if(dzClasses.contains("not")){
        document.getElementById('output_tri').innerHTML = document.getElementById("not"+'p'+(!parseBool(q[0][1])).toString()).innerHTML
      }
      else{
        document.getElementById('output_tri').innerHTML = document.getElementById('q'+p[0][1]).innerHTML
      }
    }

    if(and.join("").includes("p") && and.join("").includes("q")){
      var pAndQ = parseBool(p[0][1]) && parseBool(q[0][1]);
      var pOrQ = parseBool(p[0][1]) || parseBool(q[0][1]);
      var notP = (!parseBool(p[0][1])).toString();
      var notQ = (!parseBool(q[0][1])).toString();

        if(dzClasses.contains("and")){
          document.getElementById('output_tri').innerHTML =
          document.getElementById('p'+p[0][1]).innerHTML +
          document.getElementById('q'+q[0][1]).innerHTML+
          document.getElementById('and'+ pAndQ.toString()).innerHTML;
        }
        if(dzClasses.contains("or")){
          document.getElementById('output_tri').innerHTML =
          document.getElementById('p'+p[0][1]).innerHTML +
          document.getElementById('q'+q[0][1]).innerHTML+
          document.getElementById('or'+ pOrQ.toString()).innerHTML;
        }
        if(dzClasses.contains("not")){
          document.getElementById('output_tri').innerHTML =
          document.getElementById("not" + 'p' + notP).innerHTML +
          document.getElementById("not" + 'q' + notQ).innerHTML;
        }
    }
  }
  else{
    document.getElementById('output_tri').innerHTML = ""
  }
}



function parseBool(str){
  switch (str) {
    case "true":
      return true;
      break;
    default:
      return false;
  }
}

function swapValue(event){
  var target = event.currentTarget;
  var content = event.currentTarget.innerHTML;

  if(target.classList.contains("true")) {
    target.classList.remove("true");
    target.classList.add("false");
    target.innerHTML = content[0] + " false"
    event.currentTarget.classList.toggle('red');
    event.preventDefault();
    return
  }

  if(target.classList.contains("false")) {
    target.classList.remove("false");
    target.classList.add("true");
    target.innerHTML = content[0] + " true"
    event.currentTarget.classList.toggle('red');
    event.preventDefault();
    return
  }
}

function swapOp(event){
  var target = event.currentTarget;
  var content = event.currentTarget.innerHTML;

  if(target.classList.contains("or")) {
    target.classList.remove("or");
    target.classList.add("and");
    target.innerHTML = document.getElementById('and').innerHTML;
    event.currentTarget.classList.toggle('orange');
    event.preventDefault();
    return
  }

  if(target.classList.contains("and")) {
    target.classList.remove("and");
    target.classList.add("or");
    target.innerHTML = document.getElementById('or').innerHTML;
    event.currentTarget.classList.toggle('orange');
    event.preventDefault();
    return
  }
}


function swapLit(event){
  var target = event.currentTarget;
  var content = target.id.substring(("DeMorgan").length,("DeMorgan").length+1).toLowerCase()

    if(target.classList.contains("lit")) {
      target.classList.remove("lit");
      target.classList.add("not");
      target.innerHTML = document.getElementById("not"+content+"clear").innerHTML;
      target.classList.toggle('red');
      event.preventDefault();
      return
    }

    if(target.classList.contains("not")) {
      target.classList.remove("not");
      target.classList.add("lit");
      target.innerHTML = document.getElementById(content).innerHTML;
      target.classList.toggle('red');
      event.preventDefault();
      return
    }
}

function swapDz(event){
  var target = event.currentTarget;
  var classes = target.classList;
  var ouputClasses = document.getElementById('output_tri').classList;

  var and = classes.contains("and");
  var or = classes.contains("or");
  var not = classes.contains("not");


  if(and) {
    classes.remove("and");
    classes.remove("drop-targetand");
    classes.toggle("or");
    if(itemsTri!=0){
      classes.toggle("drop-targetor");
    }

    ouputClasses.remove("output_and");
    ouputClasses.toggle("output_or");

    target.innerHTML = document.getElementById("or").innerHTML;
    event.preventDefault();
    return
  }

  if(or) {
    classes.remove("or");
    classes.remove("drop-targetor");
    classes.toggle("not");

    ouputClasses.remove("output_or");
    ouputClasses.toggle("output_not");


    if(itemsTri!=0){
      classes.toggle("drop-targetnot");
    }
    target.innerHTML = document.getElementById("not").innerHTML;
    event.preventDefault();
    return
  }

  if(not) {
    classes.remove("not");
    classes.remove("drop-targetnot");
    classes.toggle("and");

    if(itemsTri!=0){
      classes.toggle("drop-targetand");
    }

    ouputClasses.remove("output_not");
    ouputClasses.toggle("output_and");

    target.innerHTML = document.getElementById("and").innerHTML;
    event.preventDefault();

    return
  }

}

function scroll(){
  window.addEventListener('scroll', function(e) {
   var wScroll =  this.scrollY;
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}
