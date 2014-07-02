describe("About Functions", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("should know internal variables override outer variables", function () {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }

    function crazyScope(){
      message = 'crazy';
      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
    crazyScope();
    expect(message).toBe(FILL_ME_IN);
  });

  it("should have lexical scoping", function () {
    var variable = "top-level";
    function parentfunction() {
      var variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue)
    {
      var newFunction = function doMysteriousThing(param)
      {
        return makerValue + param;
      };
      return newFunction;
    }

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);
  });

  //End of Koans Day 1. 
});
