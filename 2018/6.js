coord =[
	{
		"id": 0,
		"x": 108,
		"y": 324,
		"area":0
	},
	{
		"id": 1,
		"x": 46,
		"y": 91,
		"area":0
	},
	{
		"id": 2,
		"x": 356,
		"y": 216,
		"area":0
	},
	{
		"id": 3,
		"x": 209,
		"y": 169,
		"area":0
	},
	{
		"id": 4,
		"x": 170,
		"y": 331,
		"area":0
	},
	{
		"id": 5,
		"x": 332,
		"y": 215,
		"area":0
	},
	{
		"id": 6,
		"x": 217,
		"y": 104,
		"area":0
	},
	{
		"id": 7,
		"x": 75,
		"y": 153,
		"area":0
	},
	{
		"id": 8,
		"x": 110,
		"y": 207,
		"area":0
	},
	{
		"id": 9,
		"x": 185,
		"y": 102,
		"area":0
	},
	{
		"id": 10,
		"x": 61,
		"y": 273,
		"area":0
	},
	{
		"id": 11,
		"x": 233,
		"y": 301,
		"area":0
	},
	{
		"id": 12,
		"x": 278,
		"y": 151,
		"area":0
	},
	{
		"id": 13,
		"x": 333,
		"y": 349,
		"area":0
	},
	{
		"id": 14,
		"x": 236,
		"y": 249,
		"area":0
	},
	{
		"id": 15,
		"x": 93,
		"y": 155,
		"area":0
	},
	{
		"id": 16,
		"x": 186,
		"y": 321,
		"area":0
	},
	{
		"id": 17,
		"x": 203,
		"y": 138,
		"area":0
	},
	{
		"id": 18,
		"x": 103,
		"y": 292,
		"area":0
	},
	{
		"id": 19,
		"x": 47,
		"y": 178,
		"area":0
	},
	{
		"id": 20,
		"x": 178,
		"y": 212,
		"area":0
	},
	{
		"id": 21,
		"x": 253,
		"y": 174,
		"area":0
	},
	{
		"id": 22,
		"x": 348,
		"y": 272,
		"area":0
	},
	{
		"id": 23,
		"x": 83,
		"y": 65,
		"area":0
	},
	{
		"id": 24,
		"x": 264,
		"y": 227,
		"area":0
	},
	{
		"id": 25,
		"x": 239,
		"y": 52,
		"area":0
	},
	{
		"id": 26,
		"x": 243,
		"y": 61,
		"area":0
	},
	{
		"id": 27,
		"x": 290,
		"y": 325,
		"area":0
	},
	{
		"id": 28,
		"x": 135,
		"y": 96,
		"area":0
	},
	{
		"id": 29,
		"x": 165,
		"y": 339,
		"area":0
	},
	{
		"id": 30,
		"x": 236,
		"y": 132,
		"area":0
	},
	{
		"id": 31,
		"x": 84,
		"y": 185,
		"area":0
	},
	{
		"id": 32,
		"x": 94,
		"y": 248,
		"area":0
	},
	{
		"id": 33,
		"x": 164,
		"y": 82,
		"area":0
	},
	{
		"id": 34,
		"x": 325,
		"y": 202,
		"area":0
	},
	{
		"id": 35,
		"x": 345,
		"y": 323,
		"area":0
	},
	{
		"id": 36,
		"x": 45,
		"y": 42,
		"area":0
	},
	{
		"id": 37,
		"x": 292,
		"y": 214,
		"area":0
	},
	{
		"id": 38,
		"x": 349,
		"y": 148,
		"area":0
	},
	{
		"id": 39,
		"x": 80,
		"y": 180,
		"area":0
	},
	{
		"id": 40,
		"x": 314,
		"y": 335,
		"area":0
	},
	{
		"id": 41,
		"x": 210,
		"y": 264,
		"area":0
	},
	{
		"id": 42,
		"x": 302,
		"y": 108,
		"area":0
	},
	{
		"id": 43,
		"x": 235,
		"y": 273,
		"area":0
	},
	{
		"id": 44,
		"x": 253,
		"y": 170,
		"area":0
	},
	{
		"id": 45,
		"x": 150,
		"y": 303,
		"area":0
	},
	{
		"id": 46,
		"x": 249,
		"y": 279,
		"area":0
	},
	{
		"id": 47,
		"x": 255,
		"y": 159,
		"area":0
	},
	{
		"id": 48,
		"x": 273,
		"y": 356,
		"area":0
	},
	{
		"id": 49,
		"x": 275,
		"y": 244,
		"area":0
	}
];
var coord_x,coord_y;

var min_x={
	"id":-1,
	"value":10000
};
var min_y={
	"id":-1,
	"value":10000
}
var max_x={
	"id":-1,
	"value":-10000
}
var max_y={
	"id":-1,
	"value":-10000
}

var grid = [];

function parseCoordinates(){
	//First, get minimum and maximum
	var i,j;
	for(i=0;i<coord.length;i++){
		if(coord[i].x<min_x.value){
			min_x.value = coord[i].x;
			min_x.id = i;
		}

		if(coord[i].x>max_x.value){
			max_x.value = coord[i].x;
			max_x.id = i;
		}

		if(coord[i].y<min_y.value){
			min_y.value = coord[i].y;
			min_y.id = i;
		}

		if(coord[i].y>max_y.value){
			max_y.value = coord[i].y;
			max_y.id = i;
		}
	}

	console.log(min_x,min_y,max_x,max_y);
	//return [min_x,min_y,max_x,max_y];

	//Next create an array `grid` with bounds `max_x-min_x` to `max_y-min_y`
	for(i=0;i<=parseInt(max_y.value-min_y.value);i++){
		var tempArr = [];

		for(j=0;j<=parseInt(max_y.value-min_y.value);j++){
			tempArr.push(-1); //-1 contains the id
		}

		grid.push(tempArr);
	}
	//console.log("Grid",grid);

	coord_x = coord.sort(function(a,b){
		return a.x-b.x;
	});

	coord_y = coord.sort(function(a,b){
		return a.y-b.y;
	});
}

function manhattanDistance(_x1,_y1,_x2,_y2){
	return Math.abs(_x1-_x2)+Math.abs(_y1-_y2);
}

var infinities = {};

function displayCoordinates(){
	var i,j,k;

	parseCoordinates();

	for(i=0;i<coord.length;i++){
		ele = document.createElement("div");
		ele.className = "coord";

		ele.style.top = coord[i].y+"px";
		ele.style.left = coord[i].x+"px";

		document.getElementById("out").appendChild(ele);
	}

	var mn = 10000,mn_i=-1;

	var sm=0, ans2=0;

	tble = document.createElement("table");
	for(i=0;i<grid.length;i++){
		tr = document.createElement("tr");
		for(j=0;j<grid[i].length;j++){
			mn = 10000;
			mn_id = [-1];

			sm = 0;

			for(k=0;k<coord.length;k++){
				var d = manhattanDistance(coord[k].x,coord[k].y,j+min_x.value,i+min_y.value);

				sm+=d;

				if(d==0){
					mn_id = [coord[k].id];
					//mn_id = "<b>"+coord[k].id+"</b>";
					//break;
				}

				if(d<mn){
					mn = d;
					mn_id = [coord[k].id];
				}
				else if(d==mn){
					mn_id.push(coord[k].id);
				}
			}

			grid[j][i] = {
				"ids":mn_id,
				"sum":sm
			};

			//console.log(j,i,sm);

			//All along the borders are "infinities", add to object
			if(i==0 || j==0 || i==grid.length-1 || j==grid.length-1){
				if(mn_id.length > 1){
					//it's a duplicate, and thus not counted under infinite
				}
				else{
					infinities[mn_id[0]] = "true";
				}
			}

			//Displaying in table format
			td = document.createElement("td");

			if(mn_id.length==1){
				td.innerHTML = mn_id[0];
				td.className = "unique";
				td.className+=" id_"+mn_id[0];
			}
			else{
				td.innerHTML = ".";
				td.className = "duplicate";
			}

			td.id="coord_"+j+"_"+i;

			td.addEventListener("mouseover",function(e){
				var tooltip = document.getElementById("tooltip");
				tooltip.style.top = e.clientY+"px";
				tooltip.style.left = e.clientX+"px";

				var id_x = e.target.id.split("_")[1];
				var id_y = e.target.id.split("_")[2];

				tooltip.innerHTML = "<div><b>("+id_x+","+id_y+")</b></div>"+
									"<b>IDs: </b>"+JSON.stringify(grid[id_x][id_y].ids)+"<br>"+
									"<b>Sum: </b>"+grid[id_x][id_y].sum;

				//console.log(tooltip.innerHTML);
			});

			tr.appendChild(td);
		}
		tble.appendChild(tr);
	}
	document.getElementById("out2").appendChild(tble);

	for(i in infinities){
		ele = document.getElementsByClassName("id_"+i.toString());
		for(j=0;j<ele.length;j++){
			ele[j].style.background = "grey";
		}
	}

	findAnswer();
}

function findAnswer(){
	ans2 = 0;

	var i,j,k;

	for(i=0;i<grid.length;i++){
		for(j=0;j<grid[i].length;j++){
			if(grid[j][i].ids.length == 1 && !infinities.hasOwnProperty(grid[j][i].ids[0])){
				//Coordinate is "safe"
				//console.log(grid[j][i][0],coord[grid[j][i][0]].area);
				coord[grid[j][i].ids[0]].area++;
			}

			for(k=0;k<grid[j][i].ids.length;k++){
				if(!infinities.hasOwnProperty(grid[j][i].ids[k]) ){
					if(grid[j][i].sum<10000){
						ans2++;
						break;
					}
				}
			}
		}
	}

	var mx = 0;
	for(i=0;i<coord.length;i++){
		mx = Math.max(coord[i].area,mx);
	}
	console.log("Ans 1:",mx);
	console.log("Ans 2:",ans2);

	document.write("\nAns 1: "+mx+"\n");
	document.write("Ans 2: "+ans2);
}

window.onload = displayCoordinates();
