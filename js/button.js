function buttonClick(){
    if(pageNumber==1){
      resetBalance()
    }
    else if(pageNumber==2){
        if(appenededTable){
        pageOneInitiations();
        callBubble("Pick an Object to Weight",215,100,319,-416,0,60,0,0,26,true,"left");
        }
        else
        {
            pageOneInitiations();
        }
    }
}


function resetLeftPan(){
    if(objectInLeftPan!=null){
    for(i in objects_list){
        if(objects_list[i].type=="objects"){
            delete objects_list[i];
            objectInLeftPan=null;
            weightInLeftPan=0;
        }
        }
    }
}
function resetRightPan(){
    if(ObjectInRightPan!=null){
    for(i in objects_list){
        if(objects_list[i].type=="weights"){
            delete objects_list[i];
            ObjectInRightPan=null;
            weightInRightPan=0;
        }
        }
    }
}

function resetBalance(){
    if(angle!=0){
    animationFlag=true;
    angle=0;
    if(angle>currentAngle){
        positiveMode = true;
        negativeMode= false;
    }
        else if(angle<currentAngle){
            positiveMode = false;
            negativeMode=true;
        }
    }
    losefocus("mass-input");
    losefocus("weight-input");
    massInput.value=0;
    weightInput.value=0;
    resetLeftPan();
    resetRightPan();
}

function pageOneInitiations(){
    pageNumber=1;
    losefocus("weight-input");
    leftPanObject = document.getElementById("spring-object");
    leftPanObject.parentNode.removeChild(leftPanObject);
    table = document.getElementById("table-data");
    table.parentNode.removeChild(table);
    canvasb.style.display="none";
    canvasa.style.display="block";
    tools.style.display="block";
    button.textContent="Reset";
    resetBalance();
    envir.disabled=false;
    appenededTable=false;
}

function pageTwoInitiations(){
        pageNumber=2;
        losefocus("weight-input");
        canvasa.style.display="none";
        tools.style.display="none";
        canvasb.style.display="block";
        tableCreate();
        var leftPanObject = document.createElement("div");
        leftPanObject.setAttribute("id","spring-object");
        leftPanObject.style.backgroundImage="url("+objects_list[objectInLeftPan].src+")";
        leftPanObject.setAttribute("draggable","true");
        leftPanObject.style.width="80px";
        leftPanObject.style.height="80px";
        leftPanObject.style.position="relative";
        leftPanObject.style.top="-370px";
        leftPanObject.style.backgroundPosition="100% 100%";
        leftPanObject.addEventListener("mousedown",get_pos);
        leftPanObject.addEventListener("dragstart",drag);
        mainContainer.appendChild(leftPanObject);
        envir.disabled=true;
        springSet=false; 
        springMeasureHeight=0;
        springMeasureHeightA=0;
        springAnimationComplete=false;
        checkWeight=false;
        for(i in objects_list2){
            if(objects_list2[i].type != "static"){
        delete objects_list2[i];
            }
            springYValue=310
        }
    
    
}