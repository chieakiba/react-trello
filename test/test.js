var React = require('react');

var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Card = require('../index').Card;
var List = require('../index').List;
var Board = require('../index').Board;

describe('Card component', function() {
  it('show the card or cards properly', function() {
    var text = 'this is a test';

    var renderer = TestUtils.createRenderer();
    renderer.render(<Card card={text}/>);
    var result = renderer.getRenderOutput();
    var card = result.props;
    card.className.should.equal('card');
  });
});

describe('List component', function() {
  it('show the list properly', function() {
    var card = ['first card', 'second card', 'third card'];

    var renderer = TestUtils.createRenderer();
    renderer.render(<List list={card}/>);
    var result = renderer.getRenderOutput();
    var list = result.props.children;

    result.props.className.should.equal('list');
    list[2].props.children.props.className.should.equal('cardInput');
    list[2].props.children.props.placeholder.should.equal('Add text here');
    list[2].props.children.type.should.equal('input');
    list[3].props.children.type.should.equal('button');
    list[3].props.children.props.className.should.equal('button-addCard');
    list[3].props.children.props.children.should.equal('Submit');
  });
});

describe('Board component', function() {
  it('show the board properly', function() {
    var list = ['this is a test'];
    var boardTitle = 'Trello Board';

    var renderer = TestUtils.createRenderer();
    renderer.render(<Board boardTitle={boardTitle} board={list}/>);
    var result = renderer.getRenderOutput();
    var board = result.props.children;

    result.props.className.should.equal('board');
    result.props.children[0].should.equal('Trello Board');
    result.props.children[1].should.be.instanceOf(Array);
  });
});
