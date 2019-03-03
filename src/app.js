// Below is how we can create an angular main module
var demoApp = angular.module('demoApp', ['ngRoute']);

// Below is how we can create a controller
demoApp.controller('MainCtrl', function($scope, helloService) {
    // Below is how we can create a scope variable
    $scope.message = 'created a Angular Demo App Module';
    $scope.names = ['Jani','Hege','Kai']
    $scope.helloService = helloService.sayHello();
});

demoApp.controller('studentCtrl', function($scope) {
    $scope.student = {
       firstName: "Prathyusha",
       lastName: "",
       fees:500,
       subjects:[
          {name:'Physics',marks:70},
          {name:'Chemistry',marks:80},
          {name:'Math',marks:65}
       ],
       fullName: function() {
          var studentObject;
          studentObject = $scope.student;
          return studentObject.firstName + " " + studentObject.lastName;
       }
    };
});

demoApp.controller( "CalculatorCtrl", [ '$scope','calculator', function($scope, calculator ) {
      
    $scope.types = [
        {	name : 'Add',	value : '+'	},
        {	name : 'Subtract',	value : '-'	},
        {	name : 'Multiply',	value : '*'	},
        {	name : 'Divide',	value : '/'	},
    ];
    $scope.type = $scope.types[0];
    
    $scope.calculate = function() {
        $scope.result = calculator.calculate( $scope.no1, $scope.no2, $scope.type.value );
    }

}]);

// Below is how we can create a component
demoApp.component("demoComponent",{
    template: 'This is the text coming from demo Component'
});

// Below is how we can create a custom directive
demoApp.directive( "sayHello", function() {
    return {
      restrict: 'EA',
      scope: {
        name: '='
      },
      template: '<p>Hello, {{name}}</p>'
    };
});

// Below is how we can create a factory
demoApp.factory('calculator', function() {
    return new Calculator();
});

var add = function( no1, no2 ) {
    return no1 + no2;
}
var subtract = function( no1, no2 ) {
    return no1 - no2;
}
var multiply = function( no1, no2 ) {
    return no1 * no2;
}
var divide = function( no1, no2 ) {
    return no1 / no2;
}

  
function Calculator() { 
    this.calculate = function( no1, no2, optype ) {
        var result = 0;
        switch( optype ) {
            case '+':
            result = add( no1, no2);
            break;
            case '-':
            result = subtract( no1, no2);
            break;
            case '*':
            result = multiply(  no1, no2);
            break;
            case '/':
            result = divide(  no1, no2);
            break;
            default:
        }
        return result;
    }
    
}

// Below is how we can create Service
demoApp.service('helloService', function() {
    this.sayHello = function() { 
       return "Hello from demo service"; 
    } 
 });
