var date = new Date();

console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
var month =  date.getMonth() + 1;
console.log(date.getDate() + "/" + month + "/" + date.getFullYear());


var str = " This is Demo One    and    One      ";
	console.log(str.replace(/One/g, "Two").trim());