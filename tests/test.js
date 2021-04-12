let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

describe('Insert a client: ', () => {
  it('should insert a client', (done) => {
    chai.request(url)
      .post('/clients')
      .send({ names: 'Dan Serquen' })
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(201);
        done();
      });
  });
});

describe('Insert a client with error: ', () => {
  it('should receive an error', (done) => {
    chai.request(url)
      .post('/clients')
      .send({ name: 'Dan Serquen' })
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(400);
        done();
      });
  });
});

describe('get all clients: ', () => {
  it('should get all clients', (done) => {
    chai.request(url)
      .get('/clients')
      .end(function (err, res) {
        console.log(res.body)
        expect(res).to.have.status(200);
        done();
      });
  });
});
