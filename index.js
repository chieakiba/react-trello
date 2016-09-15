var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./board').Board;

//Need to comment this out when running test
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board boardTitle='Trello Board'/>, document.getElementById('trello'));
});
