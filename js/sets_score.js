back();

var x = localStorage.scr*100;
document.getElementById("score").innerHTML = x+'%';
move(x);

document.getElementById("arsenik").play();

function move(score, indicator) {
    var elem = document.getElementById("myBar");
    elem.classList.add("bad")

    var width = 10;
    var id = setInterval(frame, 33);
    function frame() {
        if (width >= score) {
            clearInterval(id);
        } else {
            width++;
            if(width>33){
              elem.classList.add("mid")
            }
            if(width>45){
              document.getElementById("spinbdr").classList.add("blk");
            }
            if(width>66){
              elem.classList.add("good");
            }
            elem.style.width = width + '%';
            document.getElementById("score").innerHTML = width * 1 + '%';
        }
    }
}


function back(){
  history.pushState(null, null, location.href);
    window.onpopstate = function () {
      window.location.replace("landing.html");
    };
}

function tryAgain(){
  window.history.go(-2)
}
