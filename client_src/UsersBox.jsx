const React = require('react');

var UsersBox = React.createClass({
    getInitialState: function () {
        return {
            users: []
        }
    },
    render: function () {

        var users = "Loading...";

        if (this.props.users.length) {
            users = [];
            for (var user of this.props.users) {
                users.push(
                    <div key={user.id} style={{backgrond: user.colour}}>
                        <strong>{user.username}</strong>|
                        <p>{user.full_name}</p>
                        {user.rank}
                    </div>
                );
            }
        } else {
            users = <p>Loading users</p>;
        }

        return (
            <div>
                <h1>UsersBox</h1>
                <div>{users}</div>
            </div>
        );
    }
});

module.exports = UsersBox;
