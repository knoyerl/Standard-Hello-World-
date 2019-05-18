var assert = require("assert");

describe("String", function() {
	describe("replace", function() {
		it("Should replace the first 'h' with 'b'", function() {
			assert.equal("hello world".replace("h", "b"), "bello world");
		})

		it("Should remove all spaces", function() {
			assert.equal(" hello world ".replace(/\s/g, ""), "helloworld");
		})
	})
})