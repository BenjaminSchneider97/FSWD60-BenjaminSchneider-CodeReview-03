//code descirpiton
	describe("calculateInsuranceAustria", function(){
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceAustria(200, 10)).toEqual(2050);
		});
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceAustria(180, 5)).toEqual(3650);
		});
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceAustria(110, 8)).toEqual(1425);
		});
	});
//code descirpiton
	describe("calculateInsuranceHungary", function(){
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceHungary(200, 10)).toEqual(2500);
		});
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceHungary(180, 5)).toEqual(4420);
		});
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceHungary(110, 8)).toEqual(1750);
		});
	});
//code descirpiton
	describe("calculateInsuranceGreece", function(){
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceGreece(200, 12)).toEqual(2050);
		});
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceGreece(180, 5)).toEqual(3425);
		});
		//what it should do
		it("should return the right price", function(){
			//expect the right price
			expect(calculateInsuranceGreece(110, 8)).toEqual(1550);
		});
	});

