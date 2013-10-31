// Test out use of Jasmine

var sprintf = require('sprintf').sprintf;

var self = this.my_variables = {};

self.value = 0;

function increment() {
	self.value++;
	$.count.text = sprintf('%03d', self.value);
}

function decrement() {
	self.value--;
	if (self.value<0) self.value=0;
	$.count.text = sprintf('%03d', self.value);
}

$.index.open();
