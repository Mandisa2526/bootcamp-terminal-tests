import isWeekday from '../isWeekday.js';
import assert from "assert";

describe('The isWeekday function', function(){

    it('should return true if the parameter passed in is a day of the week ', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('should return false if the parameter passed in is not a day of the week ', function(){
        
        assert.equal(false, isWeekday('Sunday'));
    });
    it("it should output false , if the parameter passed is an empty string" , function(){
        assert.equal(isWeekday(''), false);
    });
});