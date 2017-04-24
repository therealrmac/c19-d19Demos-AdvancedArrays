console.log("hello");
var colors= ["red","blue","green","orange","teal"];

colors.forEach(function(item){
	var newColorString= "I like this color:" + item;
	console.log(newColorString);
});
for (var i=0; i<colors.length; i++){
	var newColor="I like this color too:" + colors[i];
	console.log(newColor);
};
var reversedColors= colors.map(function(color){
	return color.split("").reverse().join("");
});
var backwardsColor= colors.reverse();
console.log("backwardsColor", backwardsColor);
console.log("reversedColors",reversedColors);

var fourLetters= colors.filter(function(color){
	return color.length===4;
});

console.log(fourLetters);
var number= [51,40,4,98,3];

//reduce will require two values (or arguments) to be declared in order to work
var sum= colors.reduce(function(prev,curr){
	console.log(prev, curr);
	return prev + " " + curr;
});
console.log("sum", sum);

var integers= [13,25,4,3,11,2,18,7,21,1,29,20,12,8];

var chainingResult=integers.sort(function(a,b){
	return a-b
}).reverse().filter(function(num){
	return num <= 19
}).map(function(num){
	return (num * 1.5)-1
}).reduce(function(prev,curr){
	return prev + curr;
});
console.log("chainingResult", chainingResult);