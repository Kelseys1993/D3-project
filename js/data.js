

// getting the first 3 values
// d3.selectAll('.node')
// 	.data([true, true, true])
// 	.style('background-color', '#2688d2');


// var styles = ['#2688d2','green', 'purple'];
var styles = [
	{
		color:'#2688d2',
		width: '200px',
		text: 'Blue Node'
	},
	{
		color:'green',
		width: '300px',
		text: 'Green Node'
	},
	{
		color:'purple',
		width: '250px',
		text:'Purple Node'
	},
	{
		color:'orange',
		width: '150px',
		text: 'Orange Node'
	}

];

d3.select('#node-container').selectAll('.newNodes')
	.data(styles)
	// entering into data and for each entry appends a div
	.enter().append('div')
		.text(function(d){
			return d.text;
		})
		.style('background-color', function(d){
			return d.color;
		})
		.style('width', function(d){
			return d.width;
		}).exit();



// function random(){
// 	var styles = [];
// 	var number = 100
// 	for (var i = 0; i < number; i++) {
// 		var width 

// 		var generated = {
// 			color: '#'+Math.floor(Math.random()*16777215).toString(16),
// 			width: Math.floor((Math.random() * 100) + 'px'),
// 			text: 'node'
// 		}

// 	};
// 		styles.push(generated);
// }

// random();

// passing styles into the data creates a loop and
//each time in passes the new color in
// d3.selectAll('.node')
// 	.data(styles)
// 	.style('background-color', function(d){
// 		return d.color
		
// 	})
// 	.style('width', function(d){
// 			return d.width
// 		})