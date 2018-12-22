var rawInput = [
    "...## => #",
    "..#.. => #",
    ".#... => #",
    ".#.#. => #",
    ".#.## => #",
    ".##.. => #",
    ".#### => #",
    "#.#.# => #",
    "#.### => #",
    "##.#. => #",
    "##.## => #",
    "###.. => #",
    "###.# => #",
    "####. => #"
];

var initial_state = "#..#.#..##......###...###";
var morphs = [];
var matches = {};

function parseInput(){
    morphs = [];
    matches = {};

    var i;
    var arr = [];
    for(i=0;i<rawInput.length;i++){
        arr = rawInput[i].split(" => ");
        matches[arr[0]] = arr[1];
        morphs.push({
            "query":arr[0],
            "result":"",
            "indexes":[]
        });
    }
} parseInput();

var padding_no = 10; //number of extra "." we put in the back and front to look at
var padding = genEmptyPots(padding_no);
var str = [];

function reset(){
    str = JSON.parse(JSON.stringify(padding+initial_state+padding)).split("");

    printOut();
    printOut("&nbsp;0&nbsp;"+str.join("")+"<br>");
}

/*
function performMorphs(){
	console.log("INITIAL:\n",str);

	var i,j,k;

	//First find where all the indexes are supposed to be at
	for(i=0;i<morphs.length;i++){
		morphs[i].indexes = [];

		var str2 = str;

		var arr = str2.split(morphs[i].query);

		if(arr.length <= 1) continue; //Not found

		var len = 0;

		for(j=0;j<arr.length-1;j++){ //the last one has no query in between
			len += arr[j].length;

			morphs[i].indexes.push(2+len+5*j);
		}
	}

	//Then replace it with what is supposed to be the next generation
	str = genEmptyPots(str.length).split("");
    //str = str.split("");

	for(i=0;i<morphs.length;i++){
		for(j=0;j<morphs[i].indexes.length;j++){
            var qy = morphs[i].query.split("");
            qy[2] = morphs[i].result;

            { k=0;//for(k=-2;k<=2;k++){
                str[ morphs[i].indexes[j]+k ] = qy[k+2];
            }
		}
	}

	str = str.join("");

	console.log("POST-MORPH:\n",str);

    printOut(str+"<br>");
}
*/

function performMorphs(){
    var i,j,k;

    //First find where all the indexes are supposed to be at
    for(i=0;i<morphs.length;i++){

    }

}

function genEmptyPots(_howMany){
    var _str = "";

    for(var _i=0;_i<_howMany;_i++) _str+=".";

    return _str;
}

var currGeneration = 0;
var nGenerations=20;

function allGenerations(){
    reset();

    for(_i=1;_i<=nGenerations;_i++){
        printOut(((_i<10)?"&nbsp;":"")+_i+"&nbsp;");
        performMorphs();
    }

    findChecksum();
}

function nextGeneration(){
    if(currGeneration >= nGenerations){
        return;
    }

    currGeneration++;

    printOut(((currGeneration<10)?"&nbsp;":"")+currGeneration+"&nbsp;");
    performMorphs();

    if(currGeneration == nGenerations){
        findChecksum();
    }
}

function findChecksum(){
    var sum = 0;
    printOut("<br /><div>");
    for(i=0;i<str.length;i++){
        if(str[i] == "#"){
            sum += i-padding_no;
        }
        //printOut(i-padding_no+"\t"+str[i]);
        printOut(str[i]);
    }
    printOut("</div>");

    printOut("<div>Sum: "+sum+"</div>");
}

function printOut(str){
    if(str==null || typeof str=="undefined" || str==undefined || str==""){
        document.getElementById("out").innerHTML = '';
        return;
    }

    document.getElementById("out").innerHTML += str;
}

reset();

String.prototype.findAll = function(regex){
    var temp_arr;

    var obj = {
        "indexes":[],
        "matches":[]
    }

    while ((temp_arr = regex.exec(this)) !== null) {
        obj.indexes.push(regex.lastIndex);
        obj.matches.push(temp_arr[0]);
    }

    return obj;
}
