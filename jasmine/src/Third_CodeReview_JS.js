//start of function
function calculateInsuranceAustria(hp, age){
	var price = hp*100/age+50;
	return price;
}
function calculateInsuranceHungary(hp, age){
	var price = hp*120/age+100;
	return price;
}
function calculateInsuranceGreece(hp, age){
	var sum = Number(age)+3;
	var price = hp*150/sum+50;
	return price;
}






