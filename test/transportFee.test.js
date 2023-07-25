import assert from "assert";
import transportFee from "../transportFee.js";

describe('The transportFee function', function(){

    it("it should return R20 ,when working the morning shift" , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it("it should return R10 ,when you working the afternoon shift" , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })   

    it("it should return free ,when working the nightshift" , function(){
            assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    }) 
    it("it should return undefined ,when the string passed is empty" , function(){

        assert.equal(transportFee(''), undefined, 'not a work shift');
    }) 
});