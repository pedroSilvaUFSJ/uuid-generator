const index = require("./index");

describe("Generate Uiid", function () {
    test("UuidGenerator", function () {
        console.info = jest.fn();
        const uuid = index.UuidGenerator('Pedro Silva');
        expect(uuid).not.toBeNull();
        expect(console.info).toHaveBeenCalledTimes(1);
    });
});
