/* eslint-disable no-unused-expressions */
const chai = require("chai");
const chaiHttp = require("chai-http");
const xml = require("../fixtures/xml.test");
const config = require("../fixtures/config.test");

chai.should();
chai.use(chaiHttp);

describe("soap", () => {
    it("should return success for valid xml", (done) => {
        chai
            .request(config.wsdl)
            .post("/AtendeCliente")
            .set("Content-Type", "application/xml")
            .send(xml)
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.match(/<bairro>/);
                res.text.should.match(/<cep>/);
                res.text.should.match(/<cidade>/);
                res.text.should.match(/<complemento2>/);
                res.text.should.match(/<end>/);
                res.text.should.match(/<uf>/);
                done();
            });
    });

    it("if request returns 200", (done) => {
        chai
            .request(config.wsdl)
            .post("/AtendeCliente")
            .send(xml)
            .set("Content-Type", "application/xml")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });

    it("if request returns 500", (done) => {
        chai
            .request(config.wsdl)
            .post("/AtendeCliente")
            .send("<xml>")
            .set("Content-Type", "application/xml")
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
});
