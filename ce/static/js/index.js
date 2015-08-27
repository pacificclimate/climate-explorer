var React = require("react");
var BCMap = require("./components/Map/BCMap").BCMap;
var CanadaMap = require("./components/Map/CanadaMap").CanadaMap;

React.render(<CanadaMap />, document.body);
// React.render(<BCMap />, document.body);

var DynamicSearch = require("./components/DynamicSearch/DynamicSearch");
var datasets = require("./content/Datasets");

// React.render(
//   <DynamicSearch items={ datasets } />,
//   document.getElementById('search')
// );
