var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function(props) {
        return (
            <div className='card'>{this.props.text}</div>
        );
    }
});

var List = React.createClass({
    render: function(props) {
        return (
            <div className='list'>{this.props.listTitle}
                <Card/>
            </div>
        );
    }
});

var Board = React.createClass({
    render: function (props) {
        return (
            <div className='board'>{this.props.boardTitle}
                <List/>
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
            <Board boardTitle='Board for example trello'>

            </Board>
        , document.getElementById('trello'));
    ReactDOM.render (<List listTitle='Title for the list'>

        </List>, document.getElementById('trello'));
    ReactDOM.render (<Card text='First card'/>, document.getElementById('trello'));
});

