var leftPan = new Image();
var rightPan = new Image();
var middleMiddle = new Image();
var middleUp = new Image();
var imageObjects=[];


var objectInLeftPan=null, ObjectInRightPan=null, Balanced=false , balanceStabilized, stabilizationInProcess , weightInLeftPan=0 , 
    weightInRightPan=0 ,animationFlag=false, currentAngle=0,rotCycles=0,worldGravity=9.8, pageNumber=1, round=1 , springSet=false, 
    springMeasureHeight=0, springMeasureHeightA=0, springAnimationComplete=false, checkWeight=false, springYValue=310 , appenededTable=false;
var tableObject = {"tableArray":[{"sno":"S.No","object":"Object","mass":"Mass","weight":"Weight","environment":"Environment"}]};
var angle=0,negativeMode,positiveMode=true;

var otherObjects = { 
    "flower-pot":{"x":140,"y":255,"width":80,"height":80,"src":"images/flower_pot.png","object":{},type:"objects","angle":0,"weight":5},
    "water-melon":{"x":140,"y":255,"width":80,"height":80,"src":"images/water_melon.png","object":{},type:"objects","angle":0,"weight":0.5},
    "puppy":{"x":140,"y":255,"width":80,"height":80,"src":"images/pup.png","object":{},type:"objects","angle":0,"weight":2},
    "foot-ball":{"x":140,"y":255,"width":80,"height":80,"src":"images/ball.png","object":{},type:"objects","angle":0,"weight":0.1},
    "five-kg":{"x":580,"y":262,"width":80,"height":80,"src":"images/5kg.png","object":{},type:"weights","angle":0,"weight":5},
    "two-kg":{"x":580,"y":262,"width":80,"height":80,"src":"images/2kg.png","object":{},type:"weights","angle":0,"weight":2},
    "one-kg":{"x":580,"y":262,"width":80,"height":80,"src":"images/1kg.png","object":{},type:"weights","angle":0,"weight":1},
    "fivehundred-grams":{"x":580,"y":262,"width":80,"height":80,"src":"images/500gr.png","object":{},type:"weights","angle":0,"weight":0.5},
    "hundred-grams":{"x":580,"y":262,"width":80,"height":80,"src":"images/100gr.png","object":{},type:"weights","angle":0,"weight":0.1}
}
var objects_list= { 
    "middleMiddle":{"x":280,"y":120,"width":220,"height":380,"src":"images/middle.png","object":{},type:"static","angle":0,"weight":0},
    "middleUp":{"x":0,"y":90,"width":800,"height":50,"src":"images/middle_up.png","object":{},type:"static","angle":0,"weight":0},
    "leftPan":{"x":90,"y":130,"width":178,"height":234,"src":"images/balance.png","object":{},type:"static","angle":0,"weight":0},
    "rightPan":{"x":530,"y":130,"width":178,"height":234,"src":"images/balance.png","object":{},type:"static","angle":0,"weight":0}
    
}
var objects_list2={
    "spring_balance":{"x":0,"y":0,"width":118,"height":320,"src":"images/spring_balance_full.png","object":{},type:"static","angle":0,"weight":0},
    "leftPan2":{"x":8,"y":330,"width":100,"height":120,"src":"images/balance.png","object":{},type:"static","angle":0,"weight":0}
};



var   massInput=document.getElementById("mass-input")
    , weightInput = document.getElementById("weight-input")
    , canvasa = document.getElementById("canvas-id")
    , contexta = canvasa.getContext("2d")
    , canvasb = document.getElementById("canvas-idb")
    , contextb = canvasb.getContext("2d")
    , envir=document.getElementById("environment")
    , button=document.getElementById("button")
    , gravInput=document.getElementById("gravity-input")
    , envBlock = document.getElementById("env-block")
    , tools=document.getElementById("tools")
    , mainContainer = document.getElementById("main-container")
    , parent_block= document.getElementById("main-block-1")
    , bubble = document.getElementById("bubble")
    ;


function init(){
    callBubble("Pick an Object to Weight",215,100,319,-416,0,60,0,0,26,true,"left");
    window.requestAnimationFrame(draw);

}



var weights = document.getElementsByClassName("weights");
for(i=0;i<weights.length;i++){

    weights[i].addEventListener("mousedown",get_pos,false);
    weights[i].addEventListener("dragstart",drag,false);

    
}

var objects = document.getElementsByClassName("objects");
for(i=0;i<objects.length;i++){

    objects[i].addEventListener("mousedown",get_pos,false);
    objects[i].addEventListener("dragstart",drag,false);

    
}

canvasa.addEventListener("drop",drop,false);
canvasa.addEventListener("dragover",allowDrop,false);
massInput.addEventListener("change", handleMassChange,true);
weightInput.addEventListener("change", handleWeightChange,true);
canvasb.addEventListener("drop",drop,false);
canvasb.addEventListener("dragover",allowDrop,false);
button.addEventListener("click",buttonClick,false);
envir.addEventListener("change",environmentChanged); 




function getfocus(anchor) {
    var anchorData=document.getElementById(anchor);
    anchorData.value="";
    anchorData.readOnly = false;
    anchorData.focus();
}
function losefocus(anchor) {
    var anchorData=document.getElementById(anchor);
    anchorData.readOnly = true;
    anchorData.blur();
}

function weightsBalanced(){
    Balanced=true;
    getfocus("mass-input");
    
    
}

function weightsNotBalanced(){
    if(Balanced==true){
        Balanced==false;
        massInput.value=0;
        losefocus("mass-input");
    }
}

function handleMassChange(){
    if(weightInLeftPan == massInput.value){
        losefocus("mass-input");
        getfocus("weight-input");
        callBubble("Enter the<br> right weight here and<br>press enter",200,110,0,-204,0,13,0,0,10,false,"center");
    }
        
}


init();