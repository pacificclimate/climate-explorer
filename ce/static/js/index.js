var React = require("react");
var Map = require("./components/Map/Map");

// React.render(<Map />,document.getElementById('map'));
React.render(<Map />, document.body);

var DynamicSearch = require("./components/DynamicSearch/DynamicSearch");
var datasets = require("./content/Datasets");

// React.render(
//   <DynamicSearch items={ datasets } />,
//   document.getElementById('search')
// ); 
