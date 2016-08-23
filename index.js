var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    var textInCard = 'This is a card';
    return (
        <div className='card'>{textInCard}</div>
    );
};

var List = function() {
    return(
        <div className='list'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};

var Board = function() {
    return (
        <div className='board'>
            <List/>
            <List/>
            <List/>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board/>, document.getElementById('card'));
});
