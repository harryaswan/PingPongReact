const React = require('react');
const UsersBox = require('./UsersBox.jsx');
const GameBox = require('./GameBox.jsx');
const PlayBox = require('./PlayBox.jsx');

var CoreBox = React.createClass({
    getInitialState: function () {
        return {
            currentPage: 'users',
            users: [],
            player1: null,
            player2: null
        }
    },
    setPage: function (newPage) {
        this.setState({currentPage: newPage});
    },
    componentDidMount: function() {
        this.getUsers()
        .then(function(users) {
            this.setState({users: users});
        }.bind(this))
        .catch(function(err) {
            console.error(err);
        });
    },
    getUsers: function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve([
                    {
                        id: 1,
                        username: 'dave',
                        full_name: 'Dave Smith',
                        rank: 2,
                        colour: '#123123'
                    },
                    {
                        id: 2,
                        username: 'chuckles',
                        full_name: 'Frank Jones',
                        rank: 3.4,
                        colour: '#E3A2C5'
                    },
                    {
                        id: 3,
                        username: 'jellyman',
                        full_name: 'Zeus Bolt',
                        rank: 6.7,
                        colour: '#432231'
                    }
                ]);
            }, 2000);
        });
    },
    render: function () {
        var display;
        switch (this.state.currentPage) {
            case 'users':
                display = (<div><UsersBox users={this.state.users}/></div>);
                break;
            case 'game':
                display = (<div><GameBox users={this.state.users}/></div>);
                break;
            case 'play':
                display = (<div><PlayBox users={this.state.users}/></div>);
                break;
        }
        return (
            <div>
                <button onClick={function() {this.setPage('users')}.bind(this) }>Users</button>
                <button onClick={function() {this.setPage('game')}.bind(this) }>Game</button>
                <button onClick={function() {this.setPage('play')}.bind(this) }>Play</button>
                {display}
            </div>
        );
    }
});

module.exports = CoreBox;
