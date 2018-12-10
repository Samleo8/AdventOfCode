var order2 = [
	["C","A"],
	["C","F"],
	["A","B"],
	["A","D"],
	["B","E"],
	["D","E"],
	["F","E"]
];

var order = [
	["A","N"], //x then y
	["P","R"],
	["O","T"],
	["J","U"],
	["M","X"],
	["E","X"],
	["N","T"],
	["W","G"],
	["Z","D"],
	["F","Q"],
	["U","L"],
	["I","X"],
	["X","Y"],
	["D","Y"],
	["S","K"],
	["C","G"],
	["K","V"],
	["B","R"],
	["Q","L"],
	["T","H"],
	["H","G"],
	["V","L"],
	["L","R"],
	["G","Y"],
	["R","Y"],
	["G","R"],
	["X","V"],
	["V","Y"],
	["Z","U"],
	["U","R"],
	["J","Y"],
	["Z","C"],
	["O","L"],
	["C","H"],
	["V","G"],
	["F","K"],
	["Q","G"],
	["S","Q"],
	["M","G"],
	["T","L"],
	["C","Q"],
	["T","V"],
	["W","Z"],
	["C","K"],
	["I","C"],
	["X","Q"],
	["F","X"],
	["J","S"],
	["I","K"],
	["U","Q"],
	["I","Q"],
	["N","H"],
	["A","T"],
	["T","G"],
	["D","T"],
	["A","X"],
	["D","G"],
	["C","T"],
	["W","Q"],
	["W","K"],
	["V","R"],
	["H","R"],
	["F","H"],
	["F","V"],
	["U","T"],
	["K","H"],
	["B","T"],
	["H","Y"],
	["J","Z"],
	["B","Y"],
	["I","V"],
	["W","V"],
	["Q","R"],
	["I","S"],
	["E","H"],
	["J","B"],
	["S","G"],
	["E","S"],
	["N","I"],
	["Z","F"],
	["E","I"],
	["S","B"],
	["D","L"],
	["Q","T"],
	["Q","H"],
	["K","Y"],
	["M","U"],
	["U","K"],
	["W","I"],
	["J","W"],
	["K","T"],
	["P","Y"],
	["L","G"],
	["K","B"],
	["I","Y"],
	["U","B"],
	["P","O"],
	["O","W"],
	["O","J"],
	["A","J"],
	["F","G"]
]

var secondsPassed = 0;
var totalSteps = [], totalSteps2 = [];
var steps = {}; //"letter":{"before":[array of letters to do before], "after":[array of letters to do after]}
var steps2 = {};
//var abc = "abcdef".toUpperCase().split("");
var abc = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

var secondsIncrement=60;
var nWorkers = 5;
var workerActive = [];

function genSteps(){
	//Reset
	totalSteps = [];
	totalSteps2 = [];

	secondsPassed = 0;
	steps = {};
	steps2 = {};

	document.getElementById('answer1').innerHTML = "";
	document.getElementById('out1').innerHTML = "";

	document.getElementById('answer2').innerHTML = "";
	document.getElementById('out2').innerHTML = "";
	document.getElementById('out3').innerHTML = "";

	//Parse the input
	var i,j;
	for(i=0;i<abc.length;i++){
		steps[abc[i].toUpperCase()] = {
			"before":[],
			"done":false
		};

		steps2[abc[i].toUpperCase()] = {
			"before":[],
			"done":false,
			"secondsNeeded":parseInt(i+1+secondsIncrement),
			"secondsUsed":0,
			"workerID":-1
		};
	}

	for(i=0;i<order.length;i++){
		var first = order[i][0];
		var second = order[i][1];

		steps[second].before.push(first);
		steps2[second].before.push(first);
	}

	//Set workerActive to all "-1" (ie. not active)
	for(i=0;i<nWorkers;i++){
		workerActive[i] = -1;
	}
}

function doSteps(recursive){
	if(totalSteps.length==abc.length){
		document.getElementById('answer1').innerHTML = "ANSWER: <b>"+totalSteps.join("")+"</b>";
		return;
	}

	var i,j,k;
	var out = '';


	for(i=0;i<abc.length;i++){
		var l = abc[i].toUpperCase();
		if(steps[l].before.length == 0 && !steps[l].done){ //do this ["first
			totalSteps.push(l);

			for(j in steps){
				if(j.toString().toUpperCase() == l) continue;
				steps[j].before.removeItem(l);
			}

			steps[l].done = true;


			break;
		}
	}

	//Output/Display
	out+="Current Steps: "+totalSteps.join("")+"<br><br>";

	out+="<div class='header'> Step\t\t|\t\tSteps to complete first</div>";

	for(i in steps){
		out+="<div class='step_a "+((steps[i].done)?"complete":"")+"'>";
		out+="<b>"+i+"</b>\t\t|\t\t"+steps[i]["before"].join(" ");
		out+="</div>";
	}
	out+="<hr />";

	document.getElementById("out1").innerHTML = out;

	if(recursive) doSteps(recursive);
}

function doSteps2(recursive){
	if(totalSteps2.length==abc.length || secondsPassed>=10000){

		return;
	}

	var i,j,k;
	var out = '';

	for(j=0;j<workerActive.length;j++){
		if(workerActive[j] != -1){ //worker is active
			//check if he's actually done with his work
			var l = workerActive[j].toUpperCase();
			if(steps2[l].secondsUsed == steps2[l].secondsNeeded && !steps2[l].done){ //Yay! He's done (and wasn't done before))!
				console.log("Worker",j,"complete with step",l);
				totalSteps2.push(l);

				for(i in steps2){
					if(i.toString().toUpperCase() == l) continue;
					steps2[i].before.removeItem(l);
				}

				workerActive[j] = -1;
				steps2[l].done = true;
				steps2[l].workerID = -1;
				j--; continue; //allow worker to do sth else immediately
			}
			else{ //Keep going...
				console.log("Worker",j,"continuing with step",l);
				steps2[l].secondsUsed++;
			}
		}
		else{ //worker is not active
			for(i=0;i<abc.length;i++){ //check if he can do sth
				var l = abc[i].toUpperCase();
				if(steps2[l].before.length == 0 && !steps2[l].done && steps2[l].workerID==-1){ //do this ["first
					console.log("Worker",j,"will now begin with step",l);

					workerActive[j] = l;
					steps2[l].workerID = j;
					steps2[l].done = false;

					steps2[l].secondsUsed=1;
					break;
				}
			}
		}
	}

	//Output/Display
	out+="<div>Seconds Passed: "+secondsPassed+"\t\t|\t\tCurrent Steps: "+totalSteps2.join("")+"</div>";

	out+="<table class='header'><tr><th>Step</th><th>Progress</th><th>Steps to complete first</th></tr>";

	for(i in steps2){
		out+="<tr class='"+((steps2[i].done)?"complete":"")+"'>";
		out+="<td><b>"+i+"</b></td>"; //Step
		out+="<td>"; //Progress
			out+=(steps2[i].done)?"Complete":((steps2[i].secondsUsed!=0)?(steps2[i].secondsUsed+"/"+steps2[i].secondsNeeded):"Not started");
		out+="</td>";
		out+="<td>"+steps2[i]["before"].join(" ")+"</td>"; //Steps to complete first
		out+="</tr>";
	}
	out+="<hr />";

	document.getElementById("out2").innerHTML = out;

	secondsPassed++;

	if(recursive) doSteps2(recursive);
}

Array.prototype.removeItem = function(item){
	for(var _i=this.length-1;_i>=0;_i--){
		if(this[_i] == item){
			this.splice(_i,1);
		}
	}

	return this;
};

genSteps();
