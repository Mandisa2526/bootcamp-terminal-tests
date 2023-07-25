import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
    
        assert.equal('Hello, Karen', greet('Karen'));
    });
    it("it should return,an empty string when the parameter passed is an empty string '' " , function(){
        assert.equal(greet(''), 'Hello, ');
    })
});