var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function(props) {
        return (
            <div className='card'>{this.props.children}</div>
        );
    }
});

var ListContainter = React.createClass({
    getInitialState: function() {
        //text entered into the input

        //card array
    },

    render: function() {
        //render List component
            //pass the card array from the state as props
    }
});

var List = React.createClass({
    getInitialState: function() {
      return {
          texts: [
              'First Card',
              'Second Card',
              'Third Card'
          ],
          adding: false
      }
    },

    onAddInputChanged: function () {
        this.setState({adding: true})
    },

    onAddSubmit: function(event, newText) {
        event.preventDefault();
        var cardArray = this.state.texts;
        cardArray.push(newText);
        this.setState({texts: cardArray});
    },

    render: function(props) {
        return (
                <div className='list'>{this.props.children}
                    {
                        this.state.texts.map(function (text, i) {
                            return (<Card key={i} index={i}>{text}</Card>)
                        })
                    }
                    <input onChange={this.onAddInputChanged} className='cardInput' placeholder='Add text here'></input>
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

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Board boardTitle='Trello Board'/>, document.getElementById('trello'));
});

