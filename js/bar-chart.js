var barData = [0, 12, 45, 67, 33, 20, 40, 28, 43, 77, 11, 66, 100,120 ];
var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;



var yScale = d3.scaleLinear()
	// which values represent the range
	//max value of array is found with function
	.domain([0, d3.max(barData)])
	// range of entrie chart
	.range([0, height])

var xScale = d3.scaleBand()
	// this returns how many entries are in the array
	.domain(d3.range(0, barData.length))
	.range([0, width])

d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background-color', 'grey')
	.selectAll('rect')
		.data(barData)
		.enter().append('rect')
		//think of this as a for loop creates a different rectangle for
		//each entry in the barData array
			.style('fill', '#c0392b')
			// calculates the width of the bars
			.attr('width', xScale.bandwidth())
			.attr('height', function(d){
				return yScale(d);
			})
			//i is iteration number
			.attr('x', function(d, i){
				return xScale(i)
			})
			//default is created from the top 
			//this function creates it at the bottom
			.attr('y', function(d){
				return height - yScale(d)
			}).exit()

