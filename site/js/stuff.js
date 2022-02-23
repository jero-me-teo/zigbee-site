function change(html) {
    document.getElementById("welcome").innerHTML = html;
}

$(window).load(function() {
  while (true) {
    var html = "Welcome";
    setTimeout(change, 2000, html);
    var html = "Prítáný";
    setTimeout(change, 2000, html);
  }
}
