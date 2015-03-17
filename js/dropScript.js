var pos;
function allowDrop(ev) {
    ev.preventDefault();
}
function get_pos(ev){
    pos = [ev.pageX, ev.pageY];
}
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var offset = ev.dataTransfer.getData("text/plain").split(',');
    var data=ev.dataTransfer.getData("Text");
    if(pageNumber==1){
    if(objectInLeftPan==null ){
            if(ObjectInRightPan == null){
        var setFlag = true;
        }
        else if(ObjectInRightPan == data){
        var setFlag = false
        }
        else if(ObjectInRightPan != data){
            var setFlag = true;
        }
    }
    else if(ObjectInRightPan==null ){
        if(objectInLeftPan == data){
        var setFlag = false
        }
        else if(objectInLeftPan!=data){
            var setFlag = true;
        }
    }
    else if(ObjectInRightPan!=null && objectInLeftPan!=null){
        if(objectInLeftPan == data){
            var setFlag = false;
        }
        else if(ObjectInRightPan == data){
            var setFlag = false;
        }
        else{
            var setFlag = true;
        }
    }
    if(setFlag){
    var img = document.getElementById(data);
    var dx = pos[0] - img.offsetLeft;
    var dy = pos[1] - img.offsetTop;
    //var obj = otherObjects[data];
    
    if(otherObjects[data].type == "objects" ){
        
        if(objectInLeftPan!=null){
            resetLeftPan();
            
        }
        objectInLeftPan=data;
        weightInLeftPan=otherObjects[data].weight;
        callBubble("Pick <br>a block to balance the common balance",215,137,319,420,0,36,0,0,18,false,"center");
    }
    if(otherObjects[data].type == "weights"){
        if(ObjectInRightPan!=null ){
            resetRightPan();
        }
        ObjectInRightPan=data;
        weightInRightPan=otherObjects[data].weight;
    }
    objects_list[data]=otherObjects[data];
        animationFlag=true;
        if(weightInLeftPan==0){
            angle=-24;
        }
        else if(weightInRightPan==0)
        {
            angle=24;
        }
        else
            if(weightInLeftPan!=0 && weightInRightPan!=0){
        angle=(weightInLeftPan-weightInRightPan)*5;
            }
        if(currentAngle>angle){
            negativeMode=true;
            positiveMode=false;
        }
        else if(currentAngle<angle){
            negativeMode=false;
            positiveMode=true;
        }
    }
    
    if(weightInLeftPan!=0 && weightInLeftPan==weightInRightPan){
//        setTimeout(weightsBalanced(),3000);
        weightsBalanced();
        callBubble("Enter the<br> right mass here and<br>press enter",200,110,0,94,0,13,0,0,10,false,"center");
    }
    
    else if(weightInLeftPan!=weightInRightPan && Balanced)
    {
        weightsNotBalanced()
        if(weightInLeftPan==0)
        {
            callBubble("Pick an Object to Weight",215,100,319,-416,0,60,0,0,26,true,"left");
        }
        else{
        callBubble("Pick <br>a block to balance the common balance",215,137,319,420,0,36,0,0,18,false,"center");
        }
        
    }
}
    else if(pageNumber==2){
        objects_list2[objectInLeftPan]=objects_list[objectInLeftPan];
        springSet=true;
        springMeasureHeight= weightInLeftPan * worldGravity*1.75;
        callBubble("Enter the<br> right weight here and<br>press enter",200,110,0,-204,0,13,0,0,10,false,"center");
        
    }
 
}
