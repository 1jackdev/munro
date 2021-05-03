const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("handles n=4", () => {
    let result = unroll([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ]);
    expect(result).toEqual([
      1,
      2,
      3,
      4,
      8,
      12,
      16,
      15,
      14,
      13,
      9,
      5,
      6,
      7,
      11,
      10,
    ]);
  });
  it("handles n=3 with letters", () => {
    let result = unroll([
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ]);
    expect(result).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });
});
