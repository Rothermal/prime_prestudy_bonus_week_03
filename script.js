var one = function (x){
	return x*x;
};
var two = function (x){
	return x*x;
};
var three = function (x){
	return x*x;
};


console.log(one(two(three(2))));

function one (x){
	return x*x;
}
function two (x){
	return x*x;
}
function three (x){
	return x*x;
}
console.log(one(two(three(3))));

function A(x){
if ( x == true ){
	alert("ARGH. I need a sandwich.");

} else {
	console.log("Okay, maybe not perfect, but it only took me a few hours....days.");
}

}
function B(x){
if ( x == true ){
	alert("I hate syntax errors.");
	return x = true;
} else {
	console.log("My syntax was perfect!");
}

}
function C(x){
if ( x == true ){
	alert("Syntax is so frustrating.");
	return x = true;

} else {
	console.log("I dont Have any errors");
	
}

}
function G(){
if (confirm("Did this assignment take forever due to syntax errors?")){
	return x = true;
}
}


A(B(C(G())));




function D (x){
	x = x + (" gravy!");
	return x;
}

function E (x){
	x = x + ("biscuits and");
	return x;
}

function F (){
	x = ("I like ");
	return x;
}
console.log(D(E(F())));