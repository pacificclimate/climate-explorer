import React, { PropTypes, Component } from 'react';

import PanelOverlay from '../PanelOverlay/PanelOverlay';
import DataGraph from './DataGraph';

import styles from './GraphOverlay.css';

const testData = {
    "model_id1": {
        "units": "degC",
        "2050": 21.0,
        "2080": 35.0,
        "2020": 11.0
    },
    "model_id2": {
        "units": "degC",
        "2050": 22.0,
        "2080": 36.0,
        "2020": 12.0  
    },
    "model_id3": {
        "units": "degC",
        "2050": 23.0,
        "2080": 37.0,
        "2020": 13.0  
    },
    "model_id4": {
        "units": "degC",
        "2050": 24.0,
        "2080": 39.0,
        "2020": 14.0  
    }
};

class GraphOverlay extends Component {

    // getDefaultProps () {
    //     return {
    //         maxHeight: 600,
    //         maxWidth: 1000,
    //         align: 'right',
    //     };
    // }

    render () {
        return (        
        <PanelOverlay title={'Data Plot'} maxHeight={500} maxWidth={500} align={'right'}>
        <DataGraph data={testData} />
        </PanelOverlay>
        )
    }
};

module.exports = GraphOverlay;