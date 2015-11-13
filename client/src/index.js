import React, { Component } from 'react';
var ReactDOM = require("react-dom");

var CanadaMap = require("./components/Map/CanadaMap").CanadaMap;
var PanelOverlay = require("./components/PanelOverlay/PanelOverlay");
var DatasetList = require("./components/CheckboxList/DatasetList");
var TimeSlider = require("./components/Slider/TimeSlider");
var css = require("./styles/base.css")
var GraphOverlay = require("./components/DataGraph/GraphOverlay");
var TableOverlay = require("./components/DataTable/TableOverlay");

import IndexPage from './components/IndexPage'

class App extends Component {

    render() {
        return (
            <IndexPage left=<DatasetList /> right={<div><GraphOverlay /><TableOverlay /></div>} content=<CanadaMap /> />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
