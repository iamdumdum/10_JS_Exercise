const { expect } = require("chai")
const { func, sum } = require("../index")

describe("Function Returned Value", function() {
    it("addFive should be created", function() {
        expect(func).to.exist
    })
    it("addFive should return the value 8", function() {
        expect(func()).to.equal(8)
    })
    it("Inside the addFive function, you should add 5 to the sum variable", function() {
        var num = sum + 5
        expect(func()).to.equal(num)
    })
})