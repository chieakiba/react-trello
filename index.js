var React = require('react');
var ReactDOM = require('react-dom');
var text = 'This is a card';

var Text = function() {
    return (
        <div className={props.boards}>
            <div className={props.lists}>
                <div className={props.cards}>
                    <Card name='anything'
                        message='Does this show up on the page?'/>
                </div>
            </div>
        </div>
    );
};

var Card = React.createClass({
    getInitialState: function() {
        return {
            fontColor: false
        };
    },
    onClick: function() {
        this.setState({
            fontColor: !this.state.fontColor
        });
    },
    render: function() {
        var changeCard = 'card ' + (this.state.fontColor ? 'fontColor' : '');
        return (
            <div className={changeCard} onClick={this.onClick}>
                    <div className='inCard'>{this.props.text}
                </div>
                <div className='card-text'>hi</div>
            </div>
        );
    }
});

var List = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var changeList = 'list ' + (this.state.highlight ? 'highlight' : '');
        return (
            <div className={changeList} onClick={this.onClick}>
                <div className='list-title'>{this.props.listTitle}</div>
                <div className='card'>{this.props.cards}</div>
            </div>
        );
    }
});

var Board = React.createClass({
    getInitialState: function() {
        return {
            background: false
        };
    },
    onClick: function() {
        this.setState({
            background: !this.state.background
        });
    },
    render: function() {
        var changeBoard = 'board ' + (this.state.background ? 'background' : '');
        return (
            <div className={changeBoard} onClick={this.onClick}>
                <div className='board-title'>{this.props.boardTitle}</div>
                <div className='list'>{this.props.lists}</div>
            </div>
        );
    }
});

//var Card = function(props) {
//
//    return (
//        <div className='card'>
//            <div className='text'>textInCard</div>
//            <div className='inCard'>{props.text}</div>
//        </div>
//    );
//};

//var List = function(props) {
//    return(
//        <div className='list'>
//           <div className='list-title'>{props.listTitle}</div>
//            <div className='inCard'>{props.cards}</div>
//            <Card/>
//            <Card/>
//            <Card/>
//        </div>
//    );
//};

//var Board = function(props) {
//    return (
//        <div className='board'>
//           <div className='board-title'>{props.boardTitle}</div>
//            <div className='list-title'>{props.lists}</div>
//            <List/>
//            <List/>
//            <List/>
//        </div>
//    );
//};

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<List/>, document.getElementById('card'));
});
