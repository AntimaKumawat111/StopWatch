
var timeoutid;
var hour = 0;
var mint = 0;
var sec = 0;
var timer = false;

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
  clearTimeout(timeoutid);
}

function restart() {
  timer = false;
  
  hour = 0;
  mint = 0;
  sec = 0;
  
  document.getElementById('hour').innerHTML = "00" ;
  document.getElementById('mint').innerHTML =": 00" ;
  document.getElementById('sec').innerHTML = ": 00";
  clearTimeout(timeoutid);

}

function stopwatch() {
  if (timer == true) {
    sec = sec + 1;
  }

  if (sec == 60) {
    mint++;
    sec = 0;
  }

  if (mint == 60) {
    hour++;
    mint = 0;
    sec = 0;
  }

  var hrString = hour; 
  var mintString = mint;
  var secString = sec;

  if (hour < 10) {
    hrString = "0" + hrString;
  }

  if (mint < 10) {
    mintString = "0" + mintString;
  }

  if (secString < 10) {
    secString = "0" + secString;
  }

  document.getElementById("hour").innerHTML = hrString;
  document.getElementById("mint").innerHTML = " : " + mintString;
  document.getElementById("sec").innerHTML = " : " + secString;
  timeoutid= setTimeout(stopwatch, 1000);
}
