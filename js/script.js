
/*
//leftpan

var leftpan = document.getElementById("left-pan");

leftpan.addEventListener("drop",
                         
function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).classList.contains("objects")){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }
}
                         
                         , true);


leftpan.addEventListener("dragover",function(ev) {
    ev.preventDefault();
},true);


var objects = document.getElementsByClassName("objects");
for(i=0;i<objects.length;i++){
    
objects[i].addEventListener("dragstart",function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
,true);
    
}


//rightpan
var rightpan = document.getElementById("right-pan");

rightpan.addEventListener("drop",
                         
function(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(document.getElementById(data).classList.contains("weights")){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    }
}
                         
                         , true);

rightpan.addEventListener("dragover",function(ev) {
    ev.preventDefault();
},true);

var weights = document.getElementsByClassName("weights");
for(i=0;i<weights.length;i++){
    
weights[i].addEventListener("dragstart",function(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
,true);
    
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

*/