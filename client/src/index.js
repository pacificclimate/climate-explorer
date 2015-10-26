var React = require("react");
var CanadaMap = require("./components/Map/CanadaMap").CanadaMap;


var PanelOverlay = require("./components/PanelOverlay/PanelOverlay");
var DatasetList = require("./components/CheckboxList/DatasetList");
var TimeSlider = require("./components/Slider/TimeSlider");
var GraphOverlay = require("./components/DataGraph/GraphOverlay");

var App = React.createClass({


    render: function() {
        return (
            <div>
                <CanadaMap></CanadaMap>
                <PanelOverlay title={'Dataset Selection'} maxHeight={200}>
                    <DatasetList />
                </PanelOverlay>
                <PanelOverlay title={'Ensemble Selection'} maxHeight={200}>
                    <DatasetList />
                </PanelOverlay>
                <GraphOverlay />
                <TimeSlider />
            </div>
        )
    }

});

React.render(<App />, document.getElementById('wrapper'));
