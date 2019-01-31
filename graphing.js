
var layout = {
 datarevision: 0,
  scene: {
    xaxis:{title: 'Quantity'},
    yaxis:{title: 'Date'},
    zaxis:{title: 'Cost Basis'},
    },
  autosize: false,
  width: 700,
  height: 700,
}

var xSet = [1,2]; // qty.
var ySet = ['2015-01-30', '2015-01-31']; // date
var zSet = [1,2]; // price
var colorSet = [0,10];
var day = 0;

Plotly.plot('graph', [{
  type: 'scatter3d',
  mode: 'lines',
  x: xSet,
  y: ySet,
  z: zSet,
  opacity: 1,
  line: {
   width: 6,
   color: colorSet,
   reversescale: false,
  colorscale: 'Viridis'
  }
}], layout);

var interval = setInterval(function() {
  xSet.push(floor(rand()*20));
  ySet.push('2015-02-' + (++day));
  zSet.push(floor(rand()*20));
  colorSet.push(floor(rand()*10));
  layout.datarevision += 1;

  Plotly.react('graph', [{
    type: 'scatter3d',
    mode: 'lines',
    x: xSet,
    y: ySet,
    z: zSet,
    opacity: 1,
    line: {
      width: 6,
      color: colorSet,
      colorscale: 'Viridis'
    }
  }], layout);
  if(day === 28) clearInterval(interval);
}, 500);

function rand() { 
  return Math.random();
}

function floor(x) {
  return Math.floor(x);
}
