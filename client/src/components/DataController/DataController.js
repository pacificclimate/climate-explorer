import React, { PropTypes, Component } from 'react';
import urljoin from 'url-join';

import DataGraph from '../DataGraph/DataGraph';
import DataTable from '../DataTable/DataTable';



var DataController = React.createClass({

  propTypes: {
    unique_id: React.PropTypes.string,
    model_id: React.PropTypes.string,
    variable_id: React.PropTypes.string,
    experiment: React.PropTypes.string,
    area: React.PropTypes.string
  },

  getData: function(){
    var my_data_promise = $.ajax({
      url: urljoin(CE_BACKEND_URL, 'data'),
      crossDomain: true,
      data: {
        model: this.props.model_id,
        variable: this.props.variable_id,
        emission: this.props.experiment,
        area: this.props.area,
        time: 17
      }
    }).bind(this);
  
    var my_stats_promise = $.ajax({
      url: urljoin(CE_BACKEND_URL, 'stats'),
      crossDomain: true,
      data: {
        id_: this.props.model_id,
        variable: this.props.variable_id,
        area: this.props.area,
        time: 17
      }
    }).bind(this);
  },


  componentDidMount: function() {

  },

  
  render: function() {
    return(
      <div>
        <DataGraph />
        <DataTable />
      </div>
  )}
})

export default DataController
