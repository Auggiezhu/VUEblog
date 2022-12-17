function test2(a, b, c) {
	console.log(arguments.callee);
	console.log(arguments);
	console.log(arguments.callee.caller);
}

if (true) {
	test2();
}
function outer() {
	test2();
}

outer();

let arrow2 = () => {
	console.log(11);
};
arrow2();
