describe("pow", function() {
	describe("3", function(){
		function makeTest(x) {
    	let expected = x * x * x;
    	it(`${x} в степени 3 будет ${expected}`, function() {
      	assert.equal(pow(x, 3), expected);
    	});
  		}

  		for (let x = 1; x <= 5; x++) {
    	makeTest(x);
  		}
	});

	describe("isNAN", function(){
		function makeTest(x){
			it(`для отрицательной степени ${x} - NaN`, function(){
			assert.isNaN(pow(2, x));
		})
		}
		for (let i = -1; i > -4; i--) {
			makeTest(i);
		}
	})
// it("2 в степени 3 будет 8", function() {
//     assert.equal(pow(2, 3), 8);
//   });

//  it("3 в степени 4 будет 81", function() {
//    assert.equal(pow(3, 4), 81);
//   });
});
