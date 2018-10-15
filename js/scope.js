// var abc = "test"; // global Variables 


// alert(abc); // test

'use strict'

function demo(){
	var abc = 10; // local Scope
	alert(abc); // 10
}

demo();
alert(abc); // test

