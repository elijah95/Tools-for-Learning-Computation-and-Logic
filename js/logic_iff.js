
var itemsIff = [];



interact('#iff').dropzone({
  accept: '.item',
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    var draggableElement = event.relatedTarget;
    itemsIff.push(draggableElement)
    itemsIff = itemsIff.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

    getIff(event);
    toogleOutputIff();

  },
    ondragleave: function (event) {
      var draggableElement = event.relatedTarget;

      var index = itemsIff.indexOf(draggableElement);
      itemsIff.splice(index, 1);
      getIff(event);
      toogleOutputIff();


      if(itemsIff.length==0){
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

function getIff(event){

  var iff = itemsIff.map(x=>x.textContent.split(" "));

  var p = iff.filter(x=>x.includes("p"));
  var q = iff.filter(x=>x.includes("q"));



  if(iff.join("").includes("p")){
    document.getElementById('output_iff').innerHTML = document.getElementById('p'+p[0][1]).innerHTML
  }

  if(iff.join("").includes("q")){
    document.getElementById('output_iff').innerHTML = document.getElementById('q'+q[0][1]).innerHTML
  }

  if(iff.join("").includes("p") && iff.join("").includes("q")){
    var pBool = (parseBool(p[0][1])).toString();
    var qBool = (parseBool(q[0][1])).toString();
    var pIffQ = false;

    switch (pBool==qBool) {
      case true:
        pIffQ = true;
        break;
      default:
        pIffQ = false;
    }

      document.getElementById('output_iff').innerHTML =
      document.getElementById('p'+p[0][1]).innerHTML +
      document.getElementById('q'+q[0][1]).innerHTML+
      document.getElementById('iff'+ pIffQ.toString()).innerHTML;
  }
}

function toogleOutputIff(){
    switch (itemsIff.length!=0) {
      case true:
        document.getElementById('output_iff').classList.remove("hidden");
        break;
      default:
        document.getElementById('output_iff').classList.add("hidden");
    }
}
