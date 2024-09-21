document.addEventListener("DOMContentLoaded", function () {
  let hour = 0;
  let mint = 0;
  let second = 0;

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("mint").innerHTML = mint;
  document.getElementById("sec").innerHTML = second;
  document.getElementsByClassName("showTime")[0].innerHTML =
    hour + " : " + mint + " : " + second;
});

function start() {
  console.log("start");
}

function stop() {
  console.log("stop");
}
