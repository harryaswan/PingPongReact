const React = require('react');

var PlayBox = React.createClass({
    getInitialState: function () {
        return {
            test: 'testing',
            player1: null,
            player2: null,
        }
    },
    render: function () {
        var playersAList = []
        var playersBList = []
        for (var u of this.props.users) {
            playersAList.push(<li>{u.username}</li>);
        }
        return (
            <div>
                <h1>PlayBox</h1>
                <div>{this.state.player1 || ' - '} VS {this.state.player2 || ' - '}</div>
                <div>
                    <ul>
                        {playersAList}
                    </ul>
                    |
                    <ul>
                        {playersBList}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = PlayBox;
