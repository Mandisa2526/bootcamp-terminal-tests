import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('The fromWhere function', function(){

    it('should take reg number starts with CY and return Bellville', function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });
    it('should take reg number starts with CJ and return Paarl', function(){
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        
    });
    it('should take reg number starts with CA and return Cape Town', function(){
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        
    });
    it('should take reg number starts with any reg and return "Some other place!"', function(){
        
        assert.equal(fromWhere('ZN 568593'), 'Some other place!'); 
    });
});