// selection an element


// selects the very first element of what your asking for
// d3.select('.node').text('Selected');


// All of the elements are selected
// d3.selectAll('.node').text('Selected');

// selecting a specfic element
// d3.select('.node:nth-child(3)').text('selected');

// seelcts every off numbered element, need to use select all for multiple
// can use html as well
// d3.selectAll('.node:nth-child(odd)').html('<strong>Selected<strong>');


// indenting the lines is very important and shows how things are working
// d3.select('.node')
	// .text('This is the parent node')
	// .append('div')
		// .html('<strong>This div was appended</strong>')
		// .append('div')
			// .html('<small>This is appended to the append</small>')

// insert you tell it where you want it to go
// d3.select('#node-container')
// 	.insert('span', ':nth-child(3)')
// 		.html('<strong>Inserted in the 3rd</strong>')


// how to remove something
// d3.select('#node-container .node:nth-child(4)')
// 	.remove();

// replacing the class
// d3.selectAll('.node')
	// .attr('class', 'newClass');

// adding a new class
// d3.selectAll('.node')
// to add multiple just have a sapce between them in a string
	// .classed('newClass', true)
	// removes the class node
	// .classed('node', false)

// styling a specfic node
d3.selectAll('.node:nth-child(3)')
	.style('color', 'red')
	.style('text-decoration', 'underline')
	.style('background-color', 'green');


