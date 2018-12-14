var initial_state = "###..###....####.###...#..#...##...#..#....#.##.##.#..#.#..##.#####..######....#....##..#...#...#.#";

var morphs = [
  {
    "query": "..#.#",
    "result": "#",
    "regex": "\\.\\.\\#\\.\\#",
    "indexes": []
  },
  {
    "query": "###.#",
    "result": ".",
    "regex": "\\#\\#\\#\\.\\#",
    "indexes": []
  },
  {
    "query": "#.#.#",
    "result": ".",
    "regex": "\\#\\.\\#\\.\\#",
    "indexes": []
  },
  {
    "query": ".#.#.",
    "result": ".",
    "regex": "\\.\\#\\.\\#\\.",
    "indexes": []
  },
  {
    "query": "##...",
    "result": "#",
    "regex": "\\#\\#\\.\\.\\.",
    "indexes": []
  },
  {
    "query": "...##",
    "result": ".",
    "regex": "\\.\\.\\.\\#\\#",
    "indexes": []
  },
  {
    "query": ".##.#",
    "result": ".",
    "regex": "\\.\\#\\#\\.\\#",
    "indexes": []
  },
  {
    "query": ".#...",
    "result": "#",
    "regex": "\\.\\#\\.\\.\\.",
    "indexes": []
  },
  {
    "query": "####.",
    "result": "#",
    "regex": "\\#\\#\\#\\#\\.",
    "indexes": []
  },
  {
    "query": "....#",
    "result": ".",
    "regex": "\\.\\.\\.\\.\\#",
    "indexes": []
  },
  {
    "query": ".##..",
    "result": "#",
    "regex": "\\.\\#\\#\\.\\.",
    "indexes": []
  },
  {
    "query": ".####",
    "result": "#",
    "regex": "\\.\\#\\#\\#\\#",
    "indexes": []
  },
  {
    "query": "..###",
    "result": ".",
    "regex": "\\.\\.\\#\\#\\#",
    "indexes": []
  },
  {
    "query": ".###.",
    "result": "#",
    "regex": "\\.\\#\\#\\#\\.",
    "indexes": []
  },
  {
    "query": "#####",
    "result": "#",
    "regex": "\\#\\#\\#\\#\\#",
    "indexes": []
  },
  {
    "query": "..#..",
    "result": "#",
    "regex": "\\.\\.\\#\\.\\.",
    "indexes": []
  },
  {
    "query": "#..#.",
    "result": ".",
    "regex": "\\#\\.\\.\\#\\.",
    "indexes": []
  },
  {
    "query": "###..",
    "result": "#",
    "regex": "\\#\\#\\#\\.\\.",
    "indexes": []
  },
  {
    "query": "#..##",
    "result": "#",
    "regex": "\\#\\.\\.\\#\\#",
    "indexes": []
  },
  {
    "query": "##.##",
    "result": "#",
    "regex": "\\#\\#\\.\\#\\#",
    "indexes": []
  },
  {
    "query": "##..#",
    "result": ".",
    "regex": "\\#\\#\\.\\.\\#",
    "indexes": []
  },
  {
    "query": ".#..#",
    "result": "#",
    "regex": "\\.\\#\\.\\.\\#",
    "indexes": []
  },
  {
    "query": "#.#..",
    "result": "#",
    "regex": "\\#\\.\\#\\.\\.",
    "indexes": []
  },
  {
    "query": "#.###",
    "result": "#",
    "regex": "\\#\\.\\#\\#\\#",
    "indexes": []
  },
  {
    "query": "#.##.",
    "result": "#",
    "regex": "\\#\\.\\#\\#\\.",
    "indexes": []
  },
  {
    "query": ".....",
    "result": ".",
    "regex": "\\.\\.\\.\\.\\.",
    "indexes": []
  },
  {
    "query": ".#.##",
    "result": "#",
    "regex": "\\.\\#\\.\\#\\#",
    "indexes": []
  },
  {
    "query": "#...#",
    "result": ".",
    "regex": "\\#\\.\\.\\.\\#",
    "indexes": []
  },
  {
    "query": "...#.",
    "result": "#",
    "regex": "\\.\\.\\.\\#\\.",
    "indexes": []
  },
  {
    "query": "..##.",
    "result": "#",
    "regex": "\\.\\.\\#\\#\\.",
    "indexes": []
  },
  {
    "query": "##.#.",
    "result": "#",
    "regex": "\\#\\#\\.\\#\\.",
    "indexes": []
  },
  {
    "query": "#....",
    "result": ".",
    "regex": "\\#\\.\\.\\.\\.",
    "indexes": []
  }
];

var str = JSON.parse(JSON.stringify(initial_state));

function performMorphs(){
	console.log("INITIAL:",str);

	var i,j;

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
	str = str.split("");

	for(i=0;i<morphs.length;i++){
		for(j=0;j<morphs[i].indexes.length;j++){
			str[ morphs[i].indexes[j] ] = morphs[i].result;
		}
	}

	str = str.join("");

	console.log("POST-MORPH:",str);
}

i=20;
while(i--){
	performMorphs();
}
