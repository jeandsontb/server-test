const paramsController = require('./paramsController');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('params controller', () => {
  it('return all params', () => {
    let res = {
      send: function() {}
    }
    let mock = sinon.mock(res);
    mock.expects('send').once().withArgs('Novo cliente');
    paramsController.createClient({}, res);
  })
})