var itemsDemorgan = [];


document.getElementById("op").innerHTML = document.getElementById("and").innerHTML;

interact('#demorgan').dropzone({
  accept: '.item',
  overlap: 0.75,

  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');

    var draggableElement = event.relatedTarget;
    itemsDemorgan.push(draggableElement)
    itemsDemorgan = itemsDemorgan.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
    console.log('deek')

    getDemorgan(event);
  },
    ondragleave: function (event) {
    // remove the drop feedback style
    var draggableElement = event.relatedTarget;

    //event.relatedTarget.textContent = 'Dragged out';

    var index = itemsDemorgan.indexOf(draggableElement);
    itemsDemorgan.splice(index, 1);
    getDemorgan(event);


    if(itemsDemorgan.length==0){
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

function getDemorgan(event){
  var id = itemsDemorgan.map(x=>x.id);
  var p = document.getElementById('demorganP').classList.contains("lit");
  var q = document.getElementById('demorganQ').classList.contains("lit");

  var pLit=""
  var qLit=""

  if(id.includes("demorganP")){
    switch (p) {
      case true:
        pLit = document.getElementById('demorganP').innerHTML;
        break;
      default:
        pLit =  document.getElementById('notp').innerHTML;
    }
  }

  if(id.includes("demorganQ")){
    switch (q) {
      case true:
        qLit = document.getElementById('demorganQ').innerHTML;
        break;
      default:
        qLit =  document.getElementById('notq').innerHTML;
    }
  }

  if(itemsDemorgan.length==3){
    var expression = "Expression: " + pLit + " " + document.getElementById('op').innerHTML + " " + qLit + " ";
    var demorgan = "Demorgan: " + demorganOutput();
    document.getElementById('output_demorgan').innerHTML =  expression + "<br>" + demorgan;
    document.getElementById('output_demorgan').classList.remove("hidden");
  }
  else{
    document.getElementById('output_demorgan').classList.add("hidden");
  }
}

function demorganOutput(){
  var p = document.getElementById('demorganP').classList.contains("lit");
  var q = document.getElementById('demorganQ').classList.contains("lit");
  var op = document.getElementById('op').classList.contains("and");

  var demorgan = "";

  if(op){
    if(p){
      if(q){
        demorgan =
        document.getElementById('notp').innerHTML + " " +
        document.getElementById('or').innerHTML + " " +
        document.getElementById('notq').innerHTML;
      }
      if(!q) {
        demorgan =
        document.getElementById('notp').innerHTML + " " +
        document.getElementById('or').innerHTML + " " +
        document.getElementById('q').innerHTML;
      }
    }
    if(!p) {
      if(q){
        demorgan =
        document.getElementById('p').innerHTML + " " +
        document.getElementById('or').innerHTML + " " +
        document.getElementById('notq').innerHTML;
      }
      if(!q) {
        demorgan =
        document.getElementById('p').innerHTML + " " +
        document.getElementById('or').innerHTML + " " +
        document.getElementById('q').innerHTML;
      }
    }
  }

  if(!op){
    if(p){
      if(q){
        demorgan =
        document.getElementById('notp').innerHTML + " " +
        document.getElementById('and').innerHTML + " " +
        document.getElementById('notq').innerHTML;
      }
      if(!q) {
        demorgan =
        document.getElementById('notp').innerHTML + " " +
        document.getElementById('and').innerHTML + " " +
        document.getElementById('q').innerHTML;
      }
    }
    if(!p) {
      if(q){
        demorgan =
        document.getElementById('p').innerHTML + " " +
        document.getElementById('and').innerHTML + " " +
        document.getElementById('notq').innerHTML;
      }
      if(!q) {
        demorgan =
        document.getElementById('p').innerHTML + " " +
        document.getElementById('and').innerHTML + " " +
        document.getElementById('q').innerHTML;
      }
    }
  }

  return demorgan;
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
