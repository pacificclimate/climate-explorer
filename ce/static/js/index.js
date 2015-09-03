var React = require("react");
var CanadaMap = require("./components/Map/CanadaMap").CanadaMap;


var PanelOverlay = require("./components/PanelOverlay/PanelOverlay");
var DatasetList = require("./components/CheckboxList/DatasetList");


var App = React.createClass({


    render: function() {
        return (
            <div>
                <PanelOverlay title={'TITLE'} width={200} maxHeight={200}>
                    <DatasetList />
                </PanelOverlay>
            </div>
        )
    }

    // render: function() {
    //     return (
    //         <div>
    //                 <DatasetList />
    //         </div>
    //     )
    // }
});


React.render(<App />, document.getElementById('wrapper'));
