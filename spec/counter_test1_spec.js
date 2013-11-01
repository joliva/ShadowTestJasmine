// ShadowTestJasmine test suite
describe("Counter Test Suite", function() {

	// We need to require alloy so we can access the controllers.
	var alloy = require("Alloy");
	
	// Instantiate the main 'index' controller used by the app.
	var shadowController = alloy.createController('index');
	
	// Reference to count label through controllers __views object
	var count = shadowController.__views.count;
	
	// References to buttons
	var incButton = shadowController.__views.increment;
	var decButton = shadowController.__views.decrement;
   
	beforeEach(function() {

	});
       
	// Note that 'describe' directives can be hierarchical.
	
	// The variables contained within the controller are not accessible
	// directly, but we can interact with the view directly.
	
	describe("increment tests", function() {		
		it("should start at 0", function() {
			expect(count.text).toEqual("000");
		});
		
		it("should equal 1 after incrementing once", function() {
			// increment by 'clicking' on the increment button			
			incButton.fireEvent('click');
			waits(200);
			runs(function() {
				expect(count.text).toEqual("001");
			});
		});
		
		it("should equal 999 after incrementing 998 more times", function() {
			// increment by 'clicking' on the increment button
			var val;
			
			for (var i=0; i<998; i++) {
				val = count.text;	// current value
				
				incButton.fireEvent('click');
				
				// wait until value changes or timeout
				waitsFor(function() {
					return count.text !== val;
				}, "count didn't increment", 500);
			}
			
			runs(function() {
				expect(count.text).toEqual("999");
			});
		});
	});

	describe("decrement tests", function() {		
		it("should start at 999", function() {
			expect(count.text).toEqual("999");
		});
		
		it("should equal 998 after decrementing once", function() {
			// decrement by 'clicking' on the decrement button			
			decButton.fireEvent('click');
			waits(200);
			runs(function() {
				expect(count.text).toEqual("998");
			});
		});
		
		it("should equal 1 after decrementing 997 more times", function() {
			// decrement by 'clicking' on the decrement button
			var val;
			
			for (var i=0; i<997; i++) {
				val = count.text;	// current value
				
				decButton.fireEvent('click');
				
				// wait until value changes or timeout
				waitsFor(function() {
					return count.text !== val;
				}, "count didn't decrement", 500);
			}
			
			runs(function() {
				expect(count.text).toEqual("001");
			});
		});
		
		it("should equal 0 after decrementing once", function() {
			// decrement by 'clicking' on the decrement button			
			decButton.fireEvent('click');
			waits(200);
			runs(function() {
				expect(count.text).toEqual("000");
			});
		});
		
		it("should remain clamped at 0 after decrementing from 0", function() {
			// decrement by 'clicking' on the decrement button			
			decButton.fireEvent('click');
			waits(200);
			runs(function() {
				expect(count.text).toEqual("000");
			});
		});
	});
		
});
