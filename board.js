var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list').List;

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

module.exports.Board = Board;
