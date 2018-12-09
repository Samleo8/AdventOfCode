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
var totalSteps = [];
var steps = {}; //"letter":{"before":[array of letters to do before], "after":[array of letters to do after]}
var abc = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

function genSteps(){
	var i,j;
	for(i=0;i<abc.length;i++){
		steps[abc[i].toUpperCase()] = {
			"before":[],
			"secondsNeeded":i+61,
			"secondsUsed":0
		};
	}

	for(i=0;i<order.length;i++){
		var first = order[i][0];
		var second = order[i][1];

		steps[second].before.push(first);
	}

	//doSteps();
}

function doSteps(){
	if(totalSteps.length==26){
		document.getElementById('answer').innerHTML = "ANSWER: <b>"+totalSteps.join("")+"</b>";
		return;
	}

	var i,j,k;
	var out = '';
	//var currStep = "-";

	for(i=0;i<abc.length;i++){
		var l = abc[i].toUpperCase();
		if(steps[l].before.length == 0){ //do this step first
			totalSteps.push(l);
			//currStep = l;
			for(j in steps){
				if(j.toString().toUpperCase() == l) continue;
				steps[j].before.removeItem(l);
			}

			abc.removeItem(l);

			break;
		}
	}

	//Output/Display
	out+="Current Steps: "+totalSteps.join("")+"<br><br>";
	for(i in steps){

		out+=JSON.stringify(steps[i]["before"])+" <b>"+i+"</b> "+JSON.stringify(steps[i]["after"])+"<br>";
	}

	document.getElementById("out").innerHTML = out;

	doSteps();
}

function doSteps2(){

}

Array.prototype.removeItem = function(item){
	for(var _i=this.length-1;_i>=0;_i--){
		if(this[_i] == item){
			this.splice(_i,1);
		}
	}

	return this;
};

//genSteps();
