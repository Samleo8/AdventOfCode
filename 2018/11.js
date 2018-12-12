console.clear();

var serialNo = 4455;

//Generate fuel cells as a 300x300 array, and compute it's power level at the same time
var power = [];
var power_dp = [];
var x,y,p;

for(x=0;x<=300;x++){
	power.push([]);
	power_dp.push([]);
	for(y=0;y<=300;y++){
		power[x].push(0);
		power_dp[x].push(0);
	}
}

for(x=1;x<=300;x++){
	for(y=1;y<=300;y++){
		var id = x+10;
		p = id*y;
		p += serialNo;
		p *= id;
		p = Math.floor((p/100)%10);
		p -= 5;

		power[x][y] = p;
		power_dp[x][y] = p;
	}
}

//Then generate a summation array
for(x=1;x<=300;x++){
	for(y=1;y<=300;y++){
		if(x>1) power_dp[x][y] += power_dp[x-1][y]; //if possible, add from left
		if(y>1) power_dp[x][y] += power_dp[x][y-1]; //if possible, add from top
		if(x>1 && y>1) power_dp[x][y] -= power_dp[x-1][y-1]; //avoid double counting
	}
}

//Function for calcuating sum
var calcSum = function(_x1,_y1,_x2,_y2){
	var x1 = Math.max(_x1,_x2);
	var x2 = Math.min(_x1,_x2);
	var y1 = Math.max(_y1,_y2);
	var y2 = Math.min(_y1,_y2);

	return power_dp[x1][y1]-power_dp[x2-1][y1]-power_dp[x1][y2-1]+power_dp[x2-1][y2-1];
}

//Loop through everything and get the max sums!
var s;
sm = 0;
n = 3; //how big is the box
mx = -10000;
mx_coord = "";
mx_size = 0;

for(x=1;x<=300;x++) for(y=1;y<=300;y++){ //start coordinate
	for(s=0;s<300;s++){
		if(x+s>300 || y+s>300) break;

		sm = calcSum(x,y,x+s,y+s);
		if(sm>mx){
			mx = sm;
			mx_coord = x+","+y;
			size = s+1;
		}
	}
}

console.log(mx,mx_coord,size);
