clock=document.querySelector(".clock")

//document.querySelector(".startstop").addEventListener("click", console.log("clicked"))

let seconds=0
let hours=0
let minutes=0

function startclock(){

    seconds++
    if(seconds/60 ===1){
        minutes++
        seconds=0

        if(minutes/60 === 1){
            hours++
            minutes=0
        }
    }
    




    document.querySelector(".clock").innerHTML= hours +":"+minutes+":"+seconds
    //
}

function start(){
    interval = window.setInterval(startclock, 1000)
}

function stop(){
    window.clearInterval(interval)
    seconds=0
    minutes=0
    hours=0
    document.querySelector(".clock").innerHTML="00:00:00"
}

