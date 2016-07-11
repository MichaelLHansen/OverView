/* eslint-env mocha */
'use strict';

let chai = require('chai');
let expect = chai.expect;
let chaiHttp = require('chai-http');
// let server = require('../../app.js');

let tv4 = require('tv4');
let projListSchema = require('../../schema/projectList');

chai.use(chaiHttp);

let sampleProjList = [
  {'id': 1337, 'name': 'Hank'},
  {'id': 456, 'name': 'John'},
  {'id': 673, 'name': 'Frank'}
];

describe('Schema Validation for project.js', function () {
  it('JSON schema object is valid', function (done) {
    let valid = tv4.validate(sampleProjList, projListSchema);
    expect(valid).to.be.true();
    done();
  });

  /* it('JSON from rest api data structure is valid', function (done) {
    chai.request(server)
      .get('/projects')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
      });
  });*/
});
