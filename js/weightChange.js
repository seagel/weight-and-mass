function handleWeightChange(){
    if(pageNumber==1){
    if( weightInLeftPan == weightInRightPan && objectInLeftPan!=null  ){
        pageTwoInitiations()
        callBubble("Place<br>the object on the spring balance",215,125,227,-508,0,28,0,0,7,true,"center");
       }
}
    if(pageNumber==2 && springAnimationComplete){
        checkWeightAndUpdateTable()
    }
}


function updateTable(){
    tableObject.tableArray.push({"sno":tableObject.tableArray.length,"object":objectInLeftPan,"mass":parseFloat(worldGravity*weightInLeftPan).toFixed(2),"weight":weightInLeftPan,"environment":getEnvironment()});
    table=document.getElementById("table-data");
    table.parentNode.removeChild(table);
    setLocalData("tableData",JSON.stringify(tableObject));
    tableCreate();
    losefocus("weight-input"); 
    appenededTable=true;
    callBubble("Hurray!!!<br>Check the<br>observation table",200,110,0,-204,0,13,0,0,10,false,"center");
}


function checkWeightAndUpdateTable(){
    if(parseFloat(weightInput.value).toFixed(2)==parseFloat(worldGravity * weightInLeftPan).toFixed(2)){
        updateTable();
        button.textContent="Next";
    }
    else
    {
        getfocus("weight-input");
        //recheck
    }
}

    function tableCreate(){
    var  tbl  = document.createElement('table');
    tbl.setAttribute("id","table-data");
    //tbl.style.width  = '100px';
    tbl.style.border = "1px solid black";
    if(round==1)
    {
        
        setLocalData("tableData",JSON.stringify(tableObject));
        round++;
    }
    var tableDataList = JSON.parse(getLocalData("tableData"));

    for(var i = 0; i < tableDataList.tableArray.length; i++){
                var tr = tbl.insertRow();
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(tableDataList.tableArray[i].sno));
                td.style.border = "1px solid black";
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(tableDataList.tableArray[i].object));
                td.style.border = "1px solid black";
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(tableDataList.tableArray[i].mass));
                td.style.border = "1px solid black";
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(tableDataList.tableArray[i].weight));
                td.style.border = "1px solid black";
                var td = tr.insertCell();
                td.appendChild(document.createTextNode(tableDataList.tableArray[i].environment));
                td.style.border = "1px solid black";

            
        
    }
        parent_block.appendChild(tbl);
}


function getLocalData(tableData)
{
    if(typeof(Storage) !== "undefined") {
    return localStorage.getItem(tableData);
} else {
    // Sorry! No Web Storage support..
    console.log("no Support for storage");
}
}

function setLocalData(tableDataName,tableData){
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem(tableDataName,tableData);
} else {
    // Sorry! No Web Storage support..
    console.log("no Support for storage");
}
}



