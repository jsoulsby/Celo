// REST endpoints tested: /api/users, /api/user, /api/user/update, /api/user/delete

// TODO: CREATE TEST DATA / DATABASE TO WORK WITH

const chai = require("chai");
const chaiHttp = require("chai-http");
const config = require('./config.js');

const expect = chai.expect;
chai.use(chaiHttp);

var request = chai.request(config.baseUrl);

describe('/users', function () {

    // Post to database to create users to test with, would create a separate test database to run this
    // as to not operate off of prod data
    before(done => {
        // Create test database for test data and ensure API is connected to test data
    })

    //Test GET users e.g:
    it('should GET list of users', function (done) {
        request
            .get('/users')
            .set('content-type', 'application/x-www-form-urlencoded')
            .query({ name: "test1" })
            .res(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.data.first_name).to.be.equal("test1")
                done();
            });
    });


    before(done => {
        //Create test user in database with id: idToBeDeleted
    })
    //Test DELETE users e.g:
    it('should DELETE user', function (done) {
        request
            .delete('/user/delete')
            .set('content-type', 'application/x-www-form-urlencoded')
            .query({ id: "idToBeDeleted" })
            .res(function (res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.data.message).to.be.equal("deleted user " + "idToBeDeleted")
                done();
            });
    });

    //Test cleanup 
    after(done => {
        //Drop test database tables/data and close connection
    })
})