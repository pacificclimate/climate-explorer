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

module.exports.CheckboxItem = CheckboxItem

CheckboxList = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        onChange: React.PropTypes.func
    },

    renderItem: function (item) {
        var self = this;
        var onChange = function (event) {
            var value = event.target.checked;
            self.props.onChange(event, item.key, value);
        };

        return (
            <CheckboxItem
            label={item.label}
            key={item.key}
            isChecked={item.isChecked}
            onChange={onChange} />
            );
    },

    render: function () {
        var items = this.props.items.map(this.renderItem);
        return (
            <div>
            {items}
            </div>
            );
    }
});

module.exports.CheckboxList = CheckboxList