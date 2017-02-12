const React = require('react');

var GameBox = React.createClass({
    getInitialState: function () {
        return {
            test: 'testing'
        }
    },
    render: function () {
        return (
            <div>
                <h1>GameBox</h1>
            </div>
        );
    }
});

module.exports = GameBox;
