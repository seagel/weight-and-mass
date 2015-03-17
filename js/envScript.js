function environmentChanged(){
    var gravity,url;
    switch (envir.value){
            case "earth":
            worldGravity=gravInput.value=9.8;
            envBlock.style.backgroundImage="url(images/earth.png)";
            break;
            case "mars":
            worldGravity=gravInput.value=3.7;
            envBlock.style.backgroundImage="url(images/mars.png)";
            break;
            case "moon":
            worldGravity=gravInput.value=1.6;
            envBlock.style.backgroundImage="url(images/moon.png)";
            break;
            case "jupiter":
            worldGravity=gravInput.value=24.8;
            envBlock.style.backgroundImage="url(images/jupiter.png)";
            break;
    }

}

function getEnvironment(){
    return envir.value;
}