var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
    render: function(props) {
        return (
            <div className='card'>{this.props.children}</div>
        );
    }
});

var TextInput = function(props) {
    return <input type='text' onChange={props.onAddInputChanged}>{props.text}</input>
};

var List = React.createClass({
    getInitialState: function() {
      return {
          texts: [
              'First Card',
              'Second Card',
              'Third Card'
          ]
      }
    },

    onAddInputChanged: function () {
        console.log('Does this show anything on the console?');
    },

    onAddSubmit: function(event, newText) {
        console.log('Did this add the submit button');
        event.preventDefault();
        var listArray = this.state.texts;
        listArray[i] = newText;
        this.setState({texts: listArray});
    },

    render: function(props) {
        return (
                <div className='list'>{this.props.children}
                    {
                        this.state.texts.map(function (text, i) {
                            return (
                                    <Card key={i}>{text}</Card>
                            )
                        })
                    }
                    <input className='cardInput' defaultValue='Add text here'></input>
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
                'First List',
                'Second List',
                'Third List'
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

