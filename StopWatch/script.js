let seconds = 00;
let tens=00;
let minutes = 00;

const outputSeconds = document.getElementById("seconds");
const outputTens = document.getElementById("tens");
const outputMinutes = document.getElementById("minutes");

const startBtn = document.getElementById("btn-start");
const stopBtn = document.getElementById("btn-stop");
const resetBtn = document.getElementById("btn-reset");
let Interval;
startBtn.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval = setInterval(startTime,10);
});

stopBtn.addEventListener('click',()=>{
    clearInterval(Interval);

});

resetBtn.addEventListener('click',()=>{
    clearInterval(Interval);
    console.log("inside reset");
    tens="00";
    seconds="00";
    minutes="00";
    outputSeconds.innerText=seconds;
    outputTens.innerText = tens;
    outputMinutes.innerText = minutes;
});

function startTime(){
    tens++;
    if(tens <=9){
        outputTens.innerText= "0"+tens;
    }
    if(tens > 9){
        outputTens.innerText=tens;
    }
    if(tens > 99){
        seconds++;
        outputSeconds.innerText="0"+seconds;
        tens = 0;
        outputTens.innerText="0"+tens;
    }

    if(seconds > 9){
        outputSeconds.innerText=seconds;
    }
    if(seconds > 59){
        minutes++;
        outputMinutes.innerText="0"+minutes;
        seconds = 0;
        outputSeconds.innerText = "0"+seconds;
    }
    
}
