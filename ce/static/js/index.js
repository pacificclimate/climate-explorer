var React = require("react");
var CanadaMap = require("./components/Map/CanadaMap").CanadaMap;

React.render(<CanadaMap />, document.getElementById('map'));

var DynamicSearch = require("./components/DynamicSearch/DynamicSearch");
var datasets = require("./content/Datasets");
