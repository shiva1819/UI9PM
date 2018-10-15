var arr = new Array();


// arr[0] = 'One';
// arr[2] = "Three";
// arr[1] = "two";

// console.log(arr);


// .push, pop, shift, unshift, splice;

arr.push('Three');
arr.push('One');
arr.push('Two');

// pop

arr.pop();


arr.unshift('Zero');
arr.unshift('minus');


arr.shift();

console.log(arr);

arr.splice(2,1);

console.log(arr.join('-'));



var personInfo = "Name*userName*Contact*address*Pincode";

console.log(personInfo.split('*'));




