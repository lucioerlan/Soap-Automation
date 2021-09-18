/* eslint-disable no-unused-expressions */
const { expect } = require("chai");
const knex = require("../../src/infra/database/connection");

describe("knex", () => {
    
    it("should return a schema builder", () => {
        return knex.schema.hasTable("andress").then((result) => {
            expect(result).to.be.true;
        });
    });

    it("should execute a raw query", () => {
        return knex.raw("select * from andress").then((result) => {
            expect(result).to.be.an("Object");
        });
    });
});
