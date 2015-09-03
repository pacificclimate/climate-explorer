var React = require("react");
var m = require("../util.js").merge;

var styles = {
    root: {
        zIndex: 9999,
        float: 'left',
        backgroundColor: 'grey',
    },

    open: {
        width: 300,
        height: 300,
    },

    hidden: {
        display: 'none'
    }
};

var PanelOverlay = React.createClass({

    getInitialState: function() {
        return { open: false };
    },

    handleClick: function(event) {
        this.setState({open: !this.state.open});
    },
    
    render: function() {
        return (
            <div style={m(
                styles.root,
                this.state.open && styles.open)}>
            <h3 onClick={ this.handleClick }>{this.props.title}</h3>
            <div style={m(
                !this.state.open && styles.hidden)}>{this.props.children}</div>
            </div>
            )
    }
});

module.exports = PanelOverlay