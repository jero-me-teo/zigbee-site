function display(element) {
	switch(element.id) {
		case 'measures':
			$( "#main" ).load("site/tabs/measures.html"); break;
		case 'graphs':
			$( "#main" ).load("site/tabs/graphs.html"); break;
		case 'history':
			$( "#main" ).load("site/tabs/history.html"); break;
	}
	element.fadeIn(600);
}

function expandNavbar(element) {
	const pW = document.getElementById('tab-bar').clientWidth;
	const h = element.clientWidth;
	if (element.clientWidth < (pW / 2)) {
		element.style.width = h + 10 + 'px';
		setTimeout(expandNavbar, 20, element);
	} else {
		element.style.fontSize = 20 + 'px';
		element.fadeOut(600, display(element));
		return 0;
	} 
}

function reduceNavbar(element) {
	const pW = document.getElementById('tab-bar').clientWidth;
	const h = element.clientWidth;
	if (element.clientWidth > (pW / 4.8)) {
		element.style.width = h - 10 + 'px';
		setTimeout(reduceNavbar, 20, element);
	} else {
		element.style.fontSize = 12 + 'px';
		return 0;
	} 
}

function focusMeasures() {
	expandNavbar(document.getElementById('measures'));
	reduceNavbar(document.getElementById('graphs'));
	reduceNavbar(document.getElementById('history'));
}

function focusGraphs() {
	reduceNavbar(document.getElementById('measures'));
	expandNavbar(document.getElementById('graphs'));
	reduceNavbar(document.getElementById('history'));
}

function focusHistory() {
	reduceNavbar(document.getElementById('measures'));
	reduceNavbar(document.getElementById('graphs'));
	expandNavbar(document.getElementById('history'));
}
