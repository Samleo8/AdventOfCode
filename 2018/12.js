/*var rawInput = [
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
*/

var rawInput = [
    "..#.# => #",
    "###.# => .",
    "#.#.# => .",
    ".#.#. => .",
    "##... => #",
    "...## => .",
    ".##.# => .",
    ".#... => #",
    "####. => #",
    "....# => .",
    ".##.. => #",
    ".#### => #",
    "..### => .",
    ".###. => #",
    "##### => #",
    "..#.. => #",
    "#..#. => .",
    "###.. => #",
    "#..## => #",
    "##.## => #",
    "##..# => .",
    ".#..# => #",
    "#.#.. => #",
    "#.### => #",
    "#.##. => #",
    "..... => .",
    ".#.## => #",
    "#...# => .",
    "...#. => #",
    "..##. => #",
    "##.#. => #",
    "#.... => ."
];

var initial_state = "###..###....####.###...#..#...##...#..#....#.##.##.#..#.#..##.#####..######....#....##..#...#...#.#";
var matches = {};

var timeToReset = false;

var nGenerations= 50000000000; //20;

function parseInput(){
    morphs = [];
    matches = {};

    var i;
    var arr = [];
    for(i=0;i<rawInput.length;i++){
        arr = rawInput[i].split(" => ");
        if(arr[1]=="#") matches[arr[0].toString()] = arr[1];
    }

    timeToReset = false;
} parseInput();

var pre_padding_no = 10; //number of extra "." we put in the back look at
var pre_padding = genEmptyPots(pre_padding_no);
var str = [];

function reset(){
    str = JSON.parse(JSON.stringify(pre_padding+initial_state));

    currGeneration = 0;

    printOut();
    printOut("&nbsp;0&nbsp;"+str+"<br>");

    timeToReset = false;
}

function performMorphs(){
    var i, sub;

    var new_str = [];
    new_str.push("."); //first 2 new_str is "."
    new_str.push(".");

    var pots5 = genEmptyPots(5);

    //If the last five characters were 5 dots, it's pointless to extend; otherwise, we now have to look at at least 5 pots ahead
    if(str.substr(str.length-6,5) != pots5){
        str += pots5+".";
    }

    //Perform the matching
    for(i=2;i<str.length;i++){
        sub = str.substr(i-2,5);
        if(matches.hasOwnProperty(sub)){
            new_str.push("#");
        }
        else{
            new_str.push("."); //if there is no match, the plant is dead
        }
    }

    if(str == new_str.join("")){
        //Stop searching, the matches don't change anything anymore!
        return true;
    }
    else{
        str = new_str.join("");
        return false;
    }
}

function genEmptyPots(_howMany){
    var _str = "";

    for(var _i=0;_i<_howMany;_i++) _str+=".";

    return _str;
}

var currGeneration = 0;

function allGenerations(n){
    //If it's greater than 200, there's actually a pattern wherein there is a fixed number of "#"s that shift right; the checksum is thus calculatable
    if(n>200){
        reset();
        var n1,n2,ans;

        nextGenerations(200);
        n1 = findChecksum(); //checksum for 200
        nextGenerations(100);
        n2 = findChecksum(); //checksum for 300

        ans = n1+(n2-n1)*(n-200)/100;
        document.getElementById("out_checksum").innerHTML = "["+n+"] "+ans;

        return ans;
    }

    reset();

    var statusQuo;

    for(currGeneration=1;currGeneration<=n;currGeneration++){
        statusQuo = performMorphs();
        printOut(((currGeneration<10)?"&nbsp;":"")+currGeneration+"&nbsp;"+str+"<br>");

        if(statusQuo) break;
    }

    currGeneration = n;
    return findChecksum();
}

function nextGeneration(){
    if(timeToReset){
        reset(); return;
    }

    if(currGeneration >= nGenerations){
        return;
    }

    currGeneration++;

    performMorphs();
    printOut(((currGeneration<10)?"&nbsp;":"")+currGeneration+"&nbsp;"+str+"<br>");

    if(currGeneration == nGenerations){
        findChecksum();
    }
}

function nextGenerations(n){
    if(timeToReset){
        reset(); return;
    }

    while(n--){
        nextGeneration();
    }
}

function findChecksum(){
    if(timeToReset){
        reset(); return;
    }

    var sum = 0;
    for(i=0;i<str.length;i++){
        if(str[i] == "#"){
            sum += i-pre_padding_no;
        }
    }

    document.getElementById("out_checksum").innerHTML = "["+currGeneration+"] "+sum;

    timeToReset = false;

    return sum;
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
