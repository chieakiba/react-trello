var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function(props) {
        return (
            <div className='card'>{this.props.children}</div>
        );
    }
});

var List = React.createClass({
    getInitialState: function () {
        return {
            userInput: "",
            texts: []
        }
    },

    onAddInputChanged: function (event) {
        this.setState({
            userInput: event.currentTarget.value
        })
    },

    onAddSubmit: function(event) {
        event.preventDefault();
        var cardArray = this.state.texts;
        cardArray.push(this.state.userInput);
        this.setState({texts: cardArray});

        // clear the input
        this.refs.userInput.value = '';

    },

    render: function(props) {
        return (
            <div className='list'>{this.props.children}
                  {
                    this.state.texts.map(function(text, i) {
                        return(<Card key={i} index={i}>{text}</Card>)
                    })
                }
                   <div>
                       <input ref='userInput' onChange={this.onAddInputChanged} className='cardInput' placeholder='Add text here'></input>
                   </div>
                    <div>
                        <button onClick={this.onAddSubmit} className='button-addCard'>Submit</button>
                    </div>
                </div>
        );
    }
});

var Board = React.createClass({
    getInitialState: function() {
        return {
            lists: [
                'First List'
            ]
        }
    },

    render: function (props) {
        return (
                <div className='board'>{this.props.boardTitle}
                   {
                        this.state.lists.map(function (list, j) {
                            return (<List key={j}>{list}</List>)
                        })
                    }
                </div>
        );
    }
});

//Need to comment this out when running test
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board boardTitle='Trello Board'/>, document.getElementById('trello'));
});

module.exports.Card = Card;
module.exports.List = List;
module.exports.Board = Board;
