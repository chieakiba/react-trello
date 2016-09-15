var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card').Card;

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
        var cardArray = this.state.texts; // you made copy
        cardArray.push(this.state.userInput);
        // to change something
        this.setState({texts: cardArray});

        // this.state.texts.push()

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

module.exports.List = List;
