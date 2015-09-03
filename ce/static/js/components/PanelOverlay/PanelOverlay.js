var React = require("react/addons");
var m = require("../util.js").merge;

var styles = {
    root: {
        zIndex: 9999,
        float: 'left',
        backgroundColor: 'grey',
    },

    hidden: {
        display: 'none'
    }
};

var PanelOverlay = React.createClass({
    propTypes: {
        width: React.PropTypes.number,
        maxHeight: React.PropTypes.number,
    },

    getDefaultProps: function() {
        return {
            width: 400,
            maxHeight: 300,
        };
    },

    getOpenStyle: function() {
        return {
            width: this.props.width,
            maxHeight: this.props.maxHeight,
        };
    },

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
                this.state.open && this.getOpenStyle)}>
            <h3 onClick={ this.handleClick }>{this.props.title}</h3>
            <div style={m(
                !this.state.open && styles.hidden)}>{this.props.children}</div>
            </div>
            )
    }
});

module.exports = PanelOverlay