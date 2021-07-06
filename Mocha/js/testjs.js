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
describe("OBJ", function(){
	describe("is obj", function () {
		function makeTest() {
			it("object it's realy object", function () {
				assert.isObject(object);
			})
		}
		makeTest()
	})

	describe("include", function(){
		function makeTest() {
			it(`OBJ включает elem1`, function () {
				assert.include(object, {elem1: "el"});
			})
		}

		// let object = {
		// 	elem1: "el"
		// }
		makeTest()
	})

	describe("string", function () {
		function makeTest(argument) {
			it(`convert делает из number string ${argument}`, function () {
				assert.isString(object.convert(argument));
			})
		}

		for (var i = 0; i < 5; i++) {
			makeTest(i);
		}
	})
});
