const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiSpies = require("chai-spies");
const server = require("../index");
const tbxService = require("../services/tbxService");

chai.should();
chai.use(chaiHttp);
chai.use(chaiSpies);

describe("/GET /files/data", async () => {
  let spytbxService;

  after(async function () {
    server.close();
  });

  afterEach(() => {
    chai.spy.restore(tbxService);
  });

  it("it should get all CSV files", (done) => {
    chai
      .request(server)
      .get("/files/data")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it("it should get only one CSV files", (done) => {
    chai
      .request(server)
      .get("/files/data?fileName=test9.csv")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.should.have.lengthOf(1);
        done();
      });
  });

  it("it should get and empty CSV file", (done) => {
    const fakeCSV = "empty.csv";

    chai
      .request(server)
      .get(`/files/data?fileName=${fakeCSV}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be
          .a("array")
          .to.deep.include({ file: fakeCSV, lines: [] });
        res.body.should.have.lengthOf(1);
        done();
      });
  });

  it("it should fail when TBX Service goes wrong", (done) => {
    spytbxService = chai.spy.on(tbxService, "files", () => {
      return Error("Fake error");
    });
    chai
      .request(server)
      .get("/files/data")
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });
});
