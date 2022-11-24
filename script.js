let backVedio  =  document.getElementById("backVedio");
let btn  =  document.getElementById("btn");

btn.onclick = function(){
    backVedio.style.display =  "block";
    if(backVedio.paused){
        backVedio.play();
        btn.src = "images/pause.png";
    }
    else{
        backVedio.pause();
        btn.src = "images/play.png";
    }
    
}


