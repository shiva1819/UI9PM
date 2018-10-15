var str = "Demo is Demo...Test Demo";
	
	var shiva = "Mrs.indira";


	console.log(str.length);
	console.log(str.indexOf('Demo', 9));
	console.log(str.lastIndexOf('Demo'));
	console.log(str.search('Demo'));

	if(shiva.indexOf('Mr.') != -1)
		console.log(shiva + " is Male");
	else if(shiva.indexOf('Mrs') != -1)
		console.log(shiva + " is Married Women")
	else if(shiva.search('Ms') != -1)
		console.log(shiva + " is Women")

// extract 
	// slice(), substr, substring

	// Test.
	var TestChar = "Test";
						// 18, 21
	// var x = str.slice(str.indexOf('Test'), str.indexOf('Test')+4); // start, end
	// var x = str.substring(str.indexOf('Test'), str.indexOf('Test')+4); // start, end
	var x = str.substr(str.indexOf('Test'), TestChar.length); // start, end

	console.log(x.toLowerCase());
