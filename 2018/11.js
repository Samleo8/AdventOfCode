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

console.log(power[1],power_dp[1]);

//Then generate a summation array
for(x=1;x<=300;x++){
	for(y=1;y<=300;y++){
		//console.log(power[x][y])
		power_dp[x][y] += power_dp[x-1][y-1];
		//console.log(x,y,power[x][y],power_dp[x-1][y-1]);
	}
}

console.log(power[2],power_dp[2]);

var calcSum = function(_x1,_y1,_x2,_y2){


}
