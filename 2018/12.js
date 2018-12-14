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
	var i,j;
	for(i=0;i<morphs.length;i++){
		morphs[i].indexes = [];

		var str2 = str;
		var arr = str2.split(morphs[i].query);

		var ind = str2.indexOf(morphs[i].query);

		for(j=0;j<arr.length;j++){
			arr[j]
		}
	}
}
