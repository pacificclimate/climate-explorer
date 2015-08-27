var React = require("react");
var BCMap = require("./components/Map/Map").BCMap;
var CanadaMap = require("./components/Map/Map").CanadaMap;

React.render(<CanadaMap />, document.body);

var DynamicSearch = require("./components/DynamicSearch/DynamicSearch");
var datasets = require("./content/Datasets");

// React.render(
//   <DynamicSearch items={ datasets } />,
//   document.getElementById('search')
// );
