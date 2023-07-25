import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('The totaPhoneBill function', function(){

    it("it should calculate ,total bill for 2 calls and 3 sms" , function(){
        
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it("it should calculate ,total bill for  1 calls and 1 sms" , function(){
        
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
    it("it should calculate ,total bill for  2 sms" , function(){
        
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
    it("it should calculate , and return R0.00 if the total bill is an empty string" , function(){
        
        assert.equal('R0.00', totalPhoneBill(''));
    });
});