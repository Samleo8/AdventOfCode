var serialNo = 4455;

//Generate fuel cells as a 300x300 array, and compute it's power level at the same time
var power = [];
var power_dp = [];
var x,y,p;

for(y=0;y<=300;y++){
	power.push([0]);
	power_dp.push([0]);
	for(x=1;x<=300;x++){
		var id = x+10;
		p = id*y;
		p += serialNo;
		p *= id;
		p = Math.floor((p/100)%10);
		p -= 5;

		power[y].push(p);
		power_dp[y].push(p);
	}
}

//Then generate a summation array
for(y=1;y<=300;y++){
	for(x=1;x<=300;x++){
		
	}
}


var calcSum = function(){

}
