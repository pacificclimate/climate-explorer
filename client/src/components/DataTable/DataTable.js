import React, { PropTypes, Component } from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import parseBootstrapTableData from './util';

var DataTable = React.createClass({

    render: function () {

        var tableData = parseBootstrapTableData(this.props.data);

        return (
            <div id={'table'}>
                <BootstrapTable data={tableData} striped={true} hover={true} >
                    <TableHeaderColumn dataField="model_id" isKey={true} dataAlign="center" dataSort={true}>Model</TableHeaderColumn>
                    <TableHeaderColumn dataField="min" dataAlign="center" dataSort={true}>Min</TableHeaderColumn>
                    <TableHeaderColumn dataField="max" dataAlign="center" dataSort={true}>Max</TableHeaderColumn>
                    <TableHeaderColumn dataField="mean" dataAlign="center" dataSort={true}>W.Mean</TableHeaderColumn>
                    <TableHeaderColumn dataField="median" dataAlign="center" dataSort={true}>Median</TableHeaderColumn>
                    <TableHeaderColumn dataField="stdev" dataAlign="center" dataSort={true}>W.Std.Dev</TableHeaderColumn>
                    <TableHeaderColumn dataField="units" dataAlign="center" dataSort={true}>Units</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
});

export default DataTable;