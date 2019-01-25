function calculateInsurancePerCountry(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var hp = document.getElementById("hp").value;

	if(name == "" || age == "" || hp ==""){
		alert("More information needed");
	}
	else{

		var country = document.getElementById("country").value;
		var output = document.createElement("h1");

		var select = document.querySelector("select");
		var choice = select.value;

		if(choice === "austria"){
			var price = hp*100/age+50;	
		}
		else if(choice === "hungary"){
			var price = hp*120/age+100;	
		}
		else{
			var price = hp*150/age+50;
		}

		var sentence = document.createTextNode (name + ", your insurance price is: €" + price.toFixed(2));
		var replace = document.getElementById("insuranceoutput");

		while(replace.hasChildNodes()){
			replace.removeChild(replace.firstChild);
		}
		output.appendChild(sentence);
		document.getElementById("insuranceoutput").appendChild(output);
	}
}

var n = document.getElementById("btn");
n.addEventListener("click", calculateInsurancePerCountry, false);




