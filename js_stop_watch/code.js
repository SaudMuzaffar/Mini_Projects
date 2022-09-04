let hr = 0; min =  0; sec = 0; count = 0; timer = false




function start(){

    timer = true;
    stopwatch();

}

function stop(){

    timer = false;

}

function reset(){

}

function stopwatch(){

    if(timer === true){

        count = count+1;
        document.getElementById("count").innerHTML = count
        
        setTimeout("stopwatch()",10);
    }

}
