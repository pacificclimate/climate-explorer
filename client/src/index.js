import React, { Component } from 'react';
var ReactDOM = require("react-dom");

var CanadaMap = require("./components/Map/CanadaMap").CanadaMap;
var PanelOverlay = require("./components/PanelOverlay/PanelOverlay");
var DatasetList = require("./components/CheckboxList/DatasetList");
var TimeSlider = require("./components/Slider/TimeSlider");
var css = require("./styles/base.css")
var GraphOverlay = require("./components/DataGraph/GraphOverlay");
var TableOverlay = require("./components/DataTable/TableOverlay");

import Header from './components/Header';
import Layout from './views/Index'

class App extends Component {

    render() {
        return (
            <div>
            <Header />
            <Layout left=<DatasetList /> right={<div><DatasetList /></div>} content=<CanadaMap /> />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
