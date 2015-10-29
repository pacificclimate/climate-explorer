import React, { PropTypes, Component } from 'react';
var C3 = require("c3/c3");
import parseC3Data from './util';
import styles from './DataGraph.css';

var DataGraph = React.createClass({

    componentDidMount: function() {

        var seriesData = parseC3Data(this.props.data);
        console.log(seriesData);

        var graph = new C3.generate({
            bindto: document.getElementById('graph'),
            size: {width: 300},
            padding: {
                right: 30},
            data: seriesData[0],
            axis: seriesData[1],
            color: {
                pattern: ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
            }
        });

    },

    render: function () {
        // <div id={'y_axis'} className={styles.y_axis}></div>
        return (
            <div>
            <div id={'graph'} className={styles.container}></div>
            </div>
        )
    }
});

export default DataGraph;