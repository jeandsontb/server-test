const indexController = require('./indexController');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('params controller', () => {
  it('list', () => {
    let res = {
      render: function() {}
    }
    let data = {
      time: 10,
      li: [
        'Jeandson',
        'Tenorio',
        'Braz'
      ],
      animals: [
        { name: 'koster' },
        { name: 'Lion' },
        { name: 'Cebola' },
        { name: 'Dragon' }
      ]
    }
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('home', data);
    indexController.list({}, res);
  })
  it('handle withou num1 and num2', () => {
    let res = {
      render: function() {}
    }
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('error');
    indexController.calc({ query : '' }, res);
  })
  it('handle withou num1', () => {
    let res = {
      render: function() {}
    }
    let req = {
      query: {
        num2: '10' 
      }
    }
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('error');
    indexController.calc(req, res);
  })
  it('handle withou num2', () => {
    let res = {
      render: function() {}
    }
    let req = {
      query: {
        num1: '10' 
      }
    }
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('error');
    indexController.calc(req, res);
  })
  it('calc', () => {
    let res = {
      render: function() {}
    }
    let req = {
      query: {
        num1: '10',
        num2: '20'
      }
    }
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('calc', { sum: 30 });
    indexController.calc(req, res);
  })
})