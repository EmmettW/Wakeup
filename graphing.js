Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-line1.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) 
          { return row[key]; }); }
var x = unpack(rows , 'x');
var y = unpack(rows , 'y');
var z = unpack(rows , 'z'); 
var c = unpack(rows , 'color');
var layout = {
  title: {
    text:'Plot Title',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'x Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};
	
var layout = {
	scene: {
		xaxis:{title: 'Quantity'},
		yaxis:{title: 'Time'},
		zaxis:{title: 'Price'},
		},
	autosize: false,
	width: 700,
	height: 700,

}
	
Plotly.plot('graph', [{
  type: 'scatter3d',
  mode: 'lines',
  x: x,
  y: y,
  z: z,
  opacity: 1,
  line: {
    width: 3,
    color: c,
    reversescale: true
  }
}], layout);
	
	
});

