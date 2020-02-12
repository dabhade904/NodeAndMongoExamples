const assert = require('chai').assert;
var app = require('../app');
//var addition = require('../app').addition;
//import app from '../app';

sayHelloResult=app.sayHello();
additionResult=app.addition(5,5);
describe('App', function () {
    describe('sayHello()',function(){
        it('sayHello should return hello', function () {
            // var x = app.app()
            //assert.equal(app.sayHello(),'hello');
            assert.equal(sayHelloResult,'hello')
        });
        
        it('sayHello should return type string',function(){
            // var result = app.sayHello();
            //assert.typeOf(result,'string')
           assert.typeOf(sayHelloResult,'string')
        });
    });
  
    describe('addition()',function(){
        it('addtion should return addtion of two number',function(){
            // var result=app.addition(5,5);
             //assert.isAbove(result,9)
             assert.isAbove(additionResult,9)
         });

         it('addition should return type number',function(){
           //  var number=app.addition(5,5,)
            // assert.typeOf(number,'number')
            assert.typeOf(additionResult,'number')
         });
    });
});