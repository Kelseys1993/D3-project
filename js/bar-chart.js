var barData = [12, 45, 67, 33, 20, 40, 28, 43, 77, 11, 66 ];
var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;


d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background-color', 'grey')
	.selectAll('rect')
		.data(barData)
		.enter().append('rect')
			.style('fill', '#c0392b')
			.attr('width', barWidth)
			.attr('height', function(d){
				return d;
			})
			.attr('x', function(d, i){
				return i * (barWidth + barOffset)
			})
			.attr('y', function(d){
				return height - d
			}).exit()

