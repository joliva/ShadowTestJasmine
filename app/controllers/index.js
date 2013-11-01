// Test out use of Jasmine

var sprintf = require('sprintf').sprintf;

var vars = {};
//var vars = this.myVars = {};

vars.value = 0;

function increment() {
	vars.value++;
	$.count.text = sprintf('%03d', vars.value);
}

function decrement() {
	vars.value--;
	if (vars.value<0) vars.value=0;
	$.count.text = sprintf('%03d', vars.value);
}

$.index.open();
