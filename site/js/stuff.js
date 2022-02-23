function change(html) {
    document.getElementById("welcome").innerHTML = html;
}

$(window).load(function() 
    var html = "Welcome";
    setTimeout(change, 2000, html);
    var html = "Prítáný";
    setTimeout(change, 2000, html);
}
