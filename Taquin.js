var taquin = new Array();
taquin [0] = new Array ("1", "2", "3", "4");
taquin [1] = new Array ("5", "6", "7", "8");
taquin [2] = new Array ("9", "10", "11", "12");
taquin [3] = new Array ("13", "14", "15", " ");
var iVide = ;
var jVide = ;

function draw() {
	for (i = 0; i <= 3; i ++) {
		for (j = 0; j <= 3; j ++) {
			console.log( " " + i + " " + j + " " + (taquin[i][j]));
			$("#p" + i + j).html(taquin[i][j]);
		}
	}
	$("button").click(function(){
		var i = parseInt($(this).attr("i"));
		var j = parseInt($(this).attr("j"));
		console.log(permutable(i,j));
	});
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
	if ((taquin [i][j]) === " ") {
		return true;
	}
	else {
		return false;
	}
}

function permutable(i, j) {
	if ((exist(i, j + 1)) && (empty(i, j + 1)) 
		|| ((exist(i, j - 1)) && (empty (i, j - 1))) 
		|| ((exist(i - 1, j)) && (empty(i - 1, j))) 
		|| ((exist(i + 1, j)) && (empty(i + 1, j)))) {
		return true;
	}
	else {
		return false;
	}
}

function permute(i, j) {
	
}


$(document).ready(function() {
	draw();
	
});
