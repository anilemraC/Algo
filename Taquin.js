var taquin = new Array();
taquin [0] = new Array ("1", "2", "3", "4");
taquin [1] = new Array ("5", "6", "7", "8");
taquin [2] = new Array ("9", "10", "11", "12");
taquin [3] = new Array ("13", "14", "15", " ");


function draw() {
	for (i = 0; i <= 3; i ++) {
		for (j = 0; j <= 3; j ++) {
			console.log( " " + i + " " + j + " " + (taquin[i][j]));
			$("#p" + i + j).html(taquin[i][j]);
		}
	}
	
}

function exist(i, j) {
	if (i >=0 && i <=3 && j >=0 && j <=3 ) {
		return true;
	}
	else {
		return false;
	}
}

function empty(i, j) {
	if (taquin [i][j]) === "" {
		return true;
	}
	else {
		return false;
	}
}


$(document).ready(function() {
	draw();
	
});
