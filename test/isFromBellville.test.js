import isFromBellville from '../isFromBellville.js';
import assert from "assert";

describe('The isFromBellville function', function(){

    it('should return true if a registration number is for Bellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return false if a registration number is not from Bellville ', function(){
        
        assert.equal(false, isFromBellville('false'));
    });
    it("it should return false,when the string passed is empty" , function(){
        assert.equal(isFromBellville(''), false);
    });
});