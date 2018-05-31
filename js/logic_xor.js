
var itemsXor = [];



interact('#xor').dropzone({
  accept: '.item',
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    var draggableElement = event.relatedTarget;
    itemsXor.push(draggableElement)
    itemsXor = itemsXor.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    getXor(event);
    toogleOutputXor();

  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsXor.indexOf(draggableElement);
    itemsXor.splice(index, 1);
    getXor(event);
    toogleOutputXor();


    if(itemsXor.length==0){
      event.target.classList.remove('drop-target');
    }

  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget;

  },
  ondropdeactivate: function (event) {
    var draggableElement = event.relatedTarget;

    event.relatedTarget.classList.remove('can-drop');

  }
});

function getXor(event){

  var xor = itemsXor.map(x=>x.textContent.split(" "));

  var p = xor.filter(x=>x.includes("p"));
  var q = xor.filter(x=>x.includes("q"));



  if(xor.join("").includes("p")){
    document.getElementById('output_xor').innerHTML = document.getElementById('p'+p[0][1]).innerHTML
  }

  if(xor.join("").includes("q")){
    document.getElementById('output_xor').innerHTML = document.getElementById('q'+q[0][1]).innerHTML
  }

  if(xor.join("").includes("p") && xor.join("").includes("q")){
    var pBool = (parseBool(p[0][1])).toString();
    var qBool = (parseBool(q[0][1])).toString();
    var pXorQ = false;

    switch (pBool==qBool) {
      case false:
        pXorQ = true;
        break;
      default:
        pXorQ = false;
    }
      document.getElementById('output_xor').innerHTML =
      document.getElementById('p'+p[0][1]).innerHTML +
      document.getElementById('q'+q[0][1]).innerHTML+
      document.getElementById('xor'+ pXorQ.toString()).innerHTML;
  }
}


function toogleOutputXor(){
    switch (itemsXor.length!=0) {
      case true:
        document.getElementById('output_xor').classList.remove("hidden");
        break;
      default:
        document.getElementById('output_xor').classList.add("hidden");
    }
}
