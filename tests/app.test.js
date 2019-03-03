describe("MainCtrl", function(){
	var scopeMock;
	beforeEach(module('demoApp'));	
	// Inject the $rootScope and $controller
	beforeEach(
        inject(
            function( $rootScope, $compile, $controller, calculator, _helloService_ ){		
				scopeMock = $rootScope.$new();
				compile = $compile;				
				calculatorService = calculator;
				helloService = _helloService_;
                $controller( 'MainCtrl', {$scope: scopeMock} );
            }					
        )
	);
		
	// Test the default message in $scope
	it( "should create model \"names\" with 3 names", function() {		
		expect( scopeMock.message ).toBe("created a Angular Demo App Module");
	});

	// Test the length of the default $scope.names model object
	it( "should create model \"names\" with 3 names", function() {		
		expect( scopeMock.names.length ).toBe( 3 );
	});

	// Test if say-hello directive is defined
	it('should create a custome directive', function() {
		var element = compile("<say-hello name=" + scopeMock.name +"></say-hello>")(scopeMock);
		scopeMock.$digest();
		expect(element).toBeDefined();
	});

	// Test to check calculator service exist
	it('should create a calculator factory', function() {
        expect(calculatorService).toBeTruthy();
	});
	
	// Test to check calculator funciton in calculatorService
	it('should create a calculator factory', function() {
        expect(calculatorService.calculate(2, 2, "+")).toBe(4);
	});
	
	// Test to check calculator service exist
	it('should create a helloService', function() {
        expect(helloService).toBeTruthy();
	});

	// Test to check sayHello funciton in helloService
	it('should create a calculator factory', function() {
        expect(helloService.sayHello()).toBe("Hello from demo service");
	});

});