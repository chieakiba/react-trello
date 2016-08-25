var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function() {
        return (
            <div className='card'></div>
        );
    }
});


var List = React.createClass({
    render: function() {
        return (
            <div className='list'>
                <Card/>
            </div>
        );
    }
});

var Board = React.createClass({
    getInitialState: function() {
        return {
            cards: [
                'First card',
                'Second card',
                'Third card'
            ],

            lists: [
                'First list',
                'Second list',
                'Third list'
            ]
        }
    },

    render: function (props) {
        return (
            <div className='board'>{this.props.boardTitle}
                {
                    this.state.lists.map(function(listTitle, i) {
                        return (
                            <List key={i}>{listTitle}
                                {
                                    this.state.cards.map(function(text, j) {
                                        return (
                                            <Card key={i}>{text}</Card>
                                        )
                                    })
                                }
                            </List>
                        )
                    })
                }
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(

            <Board boardTitle='Board for example trello'>
                <List>
                    <Card/>
                </List>
            </Board>

        , document.getElementById('trello'));
});
