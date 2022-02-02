$(window).load(function() {
  setTimeout(l1(), 1000);
})


function l1() {
  var html = "Welcome";
  document.getElementById("welcome").innerHTML = html;
  setTimeout(l2(), 1000);
}

function l2() {
  var html = "Welcome";
  document.getElementById("welcome").innerHTML = html;
  setTimeout(l1(), 1000);
}
