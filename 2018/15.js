input =[
	"################################",
	"#########################.G.####",
	"#########################....###",
	"##################.G.........###",
	"##################.##.......####",
	"#################...#.........##",
	"################..............##",
	"######..########...G...#.#....##",
	"#####....######.G.GG..G..##.####",
	"#############G............#.####",
	"#####.........G..G......#...####",
	"#####..G......G..........G....##",
	"######GG......#####........E.###",
	"#######......#######..........##",
	"######...G.G#########........###",
	"######......#########.....E..###",
	"#####.......#########........###",
	"#####....G..#########........###",
	"#########.#.#########......#####",
	"#######......#######.......#####",
	"#######.......#####....E...#####",
	"##.G..#.##............##.....###",
	"#.....#........###..#.#.....####",
	"#.........E.E...#####.#.#....###",
	"######......#.....###...#.#.E###",
	"#####........##...###..#########",
	"####...G####....E####E.#########",
	"#####################E.#########",
	"#####################E.####....#",
	"####..#######.##.##########...##",
	"####..######################.###",
	"################################"
]; //to improve efficiency, some of the entrances/exits have been blocked off because they lead to dead ends

var map = [];
var elves = []; //contains object of coordinates
var goblins = []; //contains object of coordinates

function init(){
	var i,j,k,x,y;

	//Create the Map
	for(i=0;i<input.length;i++){
		map.push(input[i].split(""));
	}

	//Make the map objects of
	//Also find the goblins and elves in the map. We'll use this later
	for(y=0;y<map.length;y++){
		for(x=0;x<map[y].length;x++){
			switch(map[y][x]){
				case "G":
					goblins.push({"x":x,"y":y});
					map[y][x] = {
						"type":"goblin",
						"passed":false
					}
					break;
				case "E":
					elves.push({"x":x,"y":y});
					map[y][x] = {
						"type":"elves",
						"passed":false
					}
					break;
				case ".":
					map[x][y] = {
						"type":"empty",
						"passed":false
					}
					break;
				case ".":
					map[x][y] = {
						"type":"empty"
					}
					break;
			}
		}
	}

	outputMap();
}

function outputMap(){
	var table = document.createElement("table");

	for(y=0;y<map.length;y++){
		var tr = document.createElement("tr");
		for(x=0;x<map[y].length;x++){
			var td = document.createElement("td");
			td.id = "td_"+x+"_"+y;

			switch(map[y][x].type){
				case "elves":
					td.innerHTML = "E";
					break;
				case "G": case "g":
					td.className = "goblin";
					break;
				case "#":
					td.className = "wall";
					break;
				case ".":
					td.className = "empty";
					break;
			}

			td.className = map[y][x].type;

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}

	document.getElementById("out").appendChild(table);
}

init();
