import yearsAgo from '../yearsAgo.js';
import assert from "assert";

describe('The yearsAgo function', function(){

    it('should takes in a year passed  and return how many years ago that year is from the current year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
    it("should return 28, if the input is from 1995" , function(){
        assert.equal(28, yearsAgo(1995));  
    });
    it("should return 56 , if the input is from 1995" , function(){
        assert.equal(56, yearsAgo(1967));  
    });

    
});