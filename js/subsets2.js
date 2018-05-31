
scroll();

var itemsA = [];
var itemsB = [];


getOutput();
getMembership();

var flag = 1;
var instances = document.querySelectorAll('#item.draggable.drag-drop').length;
var elementNames = []
for (var i = 0; i < instances; i++) {
  var str = document.getElementsByClassName("draggable")[i].innerHTML
  str = str.replace("<p>","")
  str = str.replace("</p>","")
  elementNames[i]=(str);
}

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

    // listen for drop related events:


    ondragenter: function (event) {
      var draggableElement = event.relatedTarget,
          dropzoneElement = event.target;


      // feedback the possibility of a drop
      dropzoneElement.classList.add('light-up');
      draggableElement.classList.add('can-drop');



      if(itemsA.includes(draggableElement.textContent)==false){

        var draggableElement = event.relatedTarget;
        itemsA.push(draggableElement.textContent)
        itemsA = itemsA.filter( function( item, index, inputArray ) {
               return inputArray.indexOf(item) == index;
        });
      }



      getOutput();
      getMembership();

      if(itemsA.length==elementNames.length){
      }

    },
      ondragleave: function (event) {

      var draggableElement = event.relatedTarget;


      var index = itemsA.indexOf(draggableElement.textContent);
      itemsA.splice(index, 1);

      getOutput();
      getMembership();

      if (itemsA.length==0){
        event.target.classList.remove('light-up');
      }
    },
    ondrop: function (event) {


    },
    ondropdeactivate: function (event) {
      var draggableElement = event.relatedTarget;
      event.relatedTarget.classList.remove('can-drop');
    }
  });



interact('#subset').dropzone({
  // only accept elements matching this CSS selector
  accept: '#item',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:


  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;


    // feedback the possibility of a drop
    dropzoneElement.classList.add('light-up');
    draggableElement.classList.add('can-drop');


    var draggableElement = event.relatedTarget;

    if(itemsA.includes(draggableElement.textContent)==false){

      itemsA.push(draggableElement.textContent)
      itemsA = itemsA.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
      itemsB.push(draggableElement.textContent)
      itemsB = itemsB.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });

    }

    else {

      itemsB.push(draggableElement.textContent)
      itemsB = itemsB.filter( function( item, index, inputArray ) {
             return inputArray.indexOf(item) == index;
      });
    }

    getOutput();
    getMembership();

  },
    ondragleave: function (event) {
    // remove the drop feedback style

    var draggableElement = event.relatedTarget;


    var index = itemsB.indexOf(draggableElement.textContent);
    itemsB.splice(index, 1);

    if (itemsB.length==0){
      event.target.classList.remove('light-up');
    }
    getOutput();
    getMembership();

  },
  ondrop: function (event) {

  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});


function getOutput(){
  if(itemsA.length==0){
    document.getElementById("outputA").innerHTML =  document.getElementById("emptyset").innerHTML;
  }
  else{
    var a = sortStrs(itemsA.map(x=>x.trim().toLowerCase())).join("");
    document.getElementById("outputA").innerHTML =  document.getElementById(a).innerHTML;
  }

  if(itemsB.length==0){
    document.getElementById("outputB").innerHTML =  document.getElementById("emptyset").innerHTML;
  }
  else{
    var b = sortStrs(itemsB.map(x=>x.trim().toLowerCase())).join("");
    document.getElementById("outputB").innerHTML = document.getElementById(b).innerHTML;
  }

}

function getMembership(){
  var universe = ["red", "blue", "green"];

  var a = sortStrs(itemsA.map(x=>x.trim().toLowerCase()));
  var complementA = universe.filter(x=>a.includes(x)==false);

  var ina = a.map(x=>document.getElementById(x+"ina").innerHTML+"\n").join("");
  var notina = complementA.map(x=>document.getElementById(x+"notina").innerHTML+"\n").join("");;

  document.getElementById("membershipA").innerHTML =  ina + notina;


  var b = sortStrs(itemsB.map(x=>x.trim().toLowerCase()));
  var complementB = universe.filter(x=>b.includes(x)==false);

  var inb = b.map(x=>document.getElementById(x+"inb").innerHTML+"\n").join("");
  var notinb = complementB.map(x=>document.getElementById(x+"notinb").innerHTML+"\n").join("");;

  document.getElementById("membershipB").innerHTML =  inb + notinb;


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
   document.getElementsByClassName('title')[0].style.transform = "translate(0,"+wScroll/2.6 +"%)"
 });
}
