var React = require("react");
var m = require("../util").m;

var CheckboxItem = React.createClass({
    propTypes: {
        label: React.PropTypes.string.isRequired,
        isChecked: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },

    getDefaultProps: function () {
        return {
            isChecked: false
        };
    },

    // onChange(){
    //     console.log('CheckboxItem::onChange() called');
    // },

    render: function () {
        return (
            <div>
                <label>
                    <input
                    ref="checkbox"
                    type="checkbox"
                    defaultChecked={this.props.isChecked}
                    onChange={this.props.onChange} />
                    {this.props.label}
                </label>
            </div>
        );
    }
});

module.exports = CheckboxItem