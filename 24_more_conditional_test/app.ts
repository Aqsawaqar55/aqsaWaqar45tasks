
//equallity or inequallity test1
console.log("Equallity test with string: ", "Apple"==="Apple");
//equallity or inequallity test2
console.log("Inequallity test with string: ", ("Apple" as string)!="orange");

//test using the lower case function
console.log("Lower Case function test:", "HELLO".toLowerCase()==="hello");

// Numerical tests involving equality ,
console.log("Equallity test with numbers: ",26===26);
// Numerical tests involving  inequality,
console.log("Inequallity test with numbers: ",(26 as number) !=35);

//greater than,
console.log("Greater than test; ",10 > 5);
//less than test.
console.log("less than test; ",5<10);
// greater than or equal to
console.log("Greater than and equal to test; ", 10>=10);
//and less than or equal to
console.log("less than or equal to; ",5<=10);

//Tests using "and" and  operators
console.log("and operator test; ",5===5 && 10>5);
//Tests using "or" operators
console.log("or operator test; ",5===5 || false);
// Test whether an item is in a array
const fruits:string[]=['nashpati','banana','amrood'];
console.log('test "nashpati",in the array: ',fruits.includes("nashpati"));
//Test whether an item is not in a array
console.log('testing" Apple" is not in array: ',!fruits.includes('Apple'));
