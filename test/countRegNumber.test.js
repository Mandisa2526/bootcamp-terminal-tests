import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('The countRegNumber function', function(){

    it('should take any registration numbers and return the total of reg numbers passed', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });
    it('It should take this kind of a string  "CA 42665, AA 12 RT GP"', function(){
        var regCount = countRegNumber('CA 42665, AA 12 RT GP')
        assert.equal(regCount, 2);
    });
    
});