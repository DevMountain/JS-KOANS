describe("About variables and If Statments", function() {
  it("should create a variable called myFirstVariable and set it equal to 1", function() {
    //code goes here.
    expect(myFirstVariable).toBe(1);
  });

  it("should understand if statements", function () {
    var message = 'my first if statement';
    var answer;

    if(message === 'my frist if statement'){
      answer = 'A';
    } else if (message === 'my first if statment'){
      answer = 'B';
    } else if(message === 'my first if statement'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe(FILL_ME_IN);
  });

  it("should understand equality operators", function () {
    var answer;
    var favoriteNumber = '33';
    
    if(favoriteNumber === 33){
      answer = 'A';
    } else if(favoriteNumber == 33){
      answer = 'B';
    } else if(favoriteNumber === '33'){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe(FILL_ME_IN);

    //explain your answer here.
  });

  it("should understand equality operators, again", function () {
    var answer;
    var favoriteNumber = 50;
    
    if(favoriteNumber === '50'){
      answer = 'A';
    } else if(favoriteNumber === 40){
      answer = 'B';
    } else if(favoriteNumber = 12){
      answer = 'C';
    } else {
      answer = 'D';
    }

    expect(answer).toBe(FILL_ME_IN);

    //explain your answer here.
  });

  it('should understand adding strings', function(){
    var num = '3';
    expect(num + 8).toBe(FILL_ME_IN);

    //explain your answer here.
  });

  it('should understand adding strings, again', function(){
    var num = '3';
    expect(num + FILL_ME_IN).toBe('38');

    //explain your answer here.
  });
});



