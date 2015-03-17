function draw(){
    
    if(pageNumber==1){
    
    
    contexta.clearRect(0,0,800,500); // clear canvas
    
    
    //start animation
    if(animationFlag){
        if(currentAngle==25)
        {
            positiveMode=false;
            negativeMode=true;
        }
        else if(currentAngle==-25){
            positiveMode=true;
            negativeMode=false;
        }
        var ySize=-2, diff=125;
        if(positiveMode){
            currentAngle+=0.5;
            objects_list.leftPan.y-=ySize;
            if(objectInLeftPan!=null){
            objects_list[objectInLeftPan].y=objects_list.leftPan.y+diff;
            }
            objects_list.rightPan.y+=ySize;
            if(ObjectInRightPan!=null){
            objects_list[ObjectInRightPan].y=objects_list.rightPan.y+diff+8;
            }
            if(currentAngle>angle){
                animationFlag=false
            }
        }
        else if(negativeMode){
            currentAngle-=0.5;
            objects_list.leftPan.y+=ySize;
            if(objectInLeftPan!=null){
            objects_list[objectInLeftPan].y=objects_list.leftPan.y+diff;
            }
            objects_list.rightPan.y-=ySize;
            if(ObjectInRightPan!=null){
            objects_list[ObjectInRightPan].y=objects_list.rightPan.y+diff+8;
            }
            if(currentAngle<angle)
            {
                animationFlag=false;
            }
        }
        
        

    }
    //end animation
    
    for(i in objects_list){
        objects_list[i].object = new Image();
        objects_list[i].object.src = objects_list[i].src;
        if(i!="middleUp"){
        contexta.drawImage(objects_list[i].object,objects_list[i].x,objects_list[i].y,objects_list[i].width,objects_list[i].height);
        }
    }

    
       
    contexta.save();
    contexta.translate(objects_list.middleUp.x+(objects_list.middleUp.width/2),objects_list.middleUp.y+(objects_list.middleUp.height/2));
    contexta.rotate(-currentAngle*Math.PI/180);
    contexta.drawImage(objects_list.middleUp.object,-objects_list.middleUp.width/2,-objects_list.middleUp.height/2,objects_list.middleUp.width,objects_list.middleUp.height);
    contexta.restore();
}
    else if(pageNumber==2)
    {
            contextb.clearRect(0,0,118,601); // clear canvas
            for(i in objects_list2){
                if(i=="leftPan2"){
                    objects_list2[i].y = springYValue
                }
               objects_list2[i].object = new Image();
               objects_list2[i].object.src = objects_list2[i].src;
                if(objects_list2[i].type=="static"){
               contextb.drawImage(objects_list2[i].object,objects_list2[i].x,objects_list2[i].y,objects_list2[i].width,objects_list2[i].height);
                }
                if(objects_list2[i].type!="static"){
                    contextb.drawImage(objects_list2[i].object,20, springYValue+25,objects_list2[i].width,objects_list2[i].height);
                }
    }
        if(springAnimationComplete){
                  contextb.beginPath();
                  contextb.moveTo(58, 52);
                  contextb.lineTo(58, 52+springMeasureHeight);
                  contextb.lineWidth = 9;
                  contextb.strokeStyle="#ff0000";
                  contextb.stroke();
                  contextb.beginPath();
                  contextb.moveTo(60, 315);
                  contextb.lineTo(60, 315+springYValue-310);
                  contextb.lineWidth = 3;
                  contextb.strokeStyle="#000000";
                  contextb.stroke();
            if(checkWeight)
            {
                checkWeightAndUpdateTable();
                checkWeight=false;
            }
            
        }
        if(springSet){
            
                  contextb.beginPath();
                  contextb.moveTo(58, 52);
                  contextb.lineTo(58, 52+springMeasureHeightA);
                  contextb.lineWidth = 9;
                  contextb.strokeStyle="#ff0000";
                  contextb.stroke();
                  contextb.beginPath();
                  contextb.moveTo(60, 315);
                  contextb.lineTo(60, 315+springYValue-310);
                  contextb.lineWidth = 3;
                  contextb.strokeStyle="#000000";
                  contextb.stroke();
                  springMeasureHeightA+=0.5
                  if((springYValue-310)<=(parseFloat(worldGravity * weightInLeftPan).toFixed(2)*1.4)){
                      springYValue+=0.4;
                  }
                  if(springMeasureHeightA >= springMeasureHeight){
                      springSet=false;
                      springAnimationComplete=true;
                      checkWeight=true;
                  }
    }
    }
    window.requestAnimationFrame(draw);
    
}
