function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

$(window).load(function() {
  while (true) {
    var html = "Welcome";
    document.getElementById("welcome").innerHTML = html;
    sleep(1000);
    var html = "Prítáný";
    document.getElementById("welcome").innerHTML = html;
    sleep(1000);
  }
})
