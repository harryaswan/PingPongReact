const React = require('react');
const ReactDOM = require('react-dom');
const CoreBox = require('./client_src/CoreBox.jsx');

window.onload = function () {
    ReactDOM.render(
        <CoreBox />,
        document.getElementById('app_container')
    );
}
