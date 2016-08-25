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
    getInitialState: function() {
      return {
          texts: [
              'First Card',
              'Second Card',
              'Third Card'
          ]
      }
    },

    render: function(props) {
        return (
                <div className='list'>{this.props.children}
                    {
                        this.state.texts.map(function (text, i) {
                            return (<Card key={i}>{text}</Card>)
                        })
                    }
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

