import assert from "assert";
import regCheck from "../regCheck.js";

describe('The regCheck function', function(){
    it("it should return true ,when the end of a registration number that ends with GP, L, EC, MP is called with 'GP, L, EC, MP'  " , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('5566 L', 'L'), true);
    });
    it("it should return false ,when the end of a registration number that ends with GP, L, EC, MP is not called with 'GP, L, EC, MP'  " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        assert.equal(regCheck('5566 L', 'M'), false);
    });
    it("it should return false ,when the registration number is not passed" , function(){
        
        assert.equal(regCheck('', 'MP'), false);
    });
   
});