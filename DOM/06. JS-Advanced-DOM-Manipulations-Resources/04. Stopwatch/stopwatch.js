function stopwatch() {
    
//get buttons and add event

let start = document.getElementById('startBtn');
start.addEventListener('click', startF );
let stop = document.getElementById('stopBtn');
stop.addEventListener('click',stopF)
let output = document.getElementById('time');
let timer = null;
//debugger

function stopF() {
    start.disabled = 'true'
    stop.disabled = 'false'
    clearInterval(timer);
}
function startF() {
    start.disabled = 'false'
    stop.disabled = 'true'

    let seconds =0;

    timer = setInterval(tick, 1000);
    output.textContent = '00:00';

    
function tick() {
    seconds++;

    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    let tempM = min;
    let tempS = sec;
    if (min<60) {
        tempM ='0'+min
    }
    if(sec<10){
        tempS='0'+sec
    }
    output.textContent = tempM+':'+tempS;
}

}


// <div id="time">00:00</div>
// <button id="startBtn">Start</button>
// <button id="stopBtn" disabled="true">Stop</button>
// <script>


}