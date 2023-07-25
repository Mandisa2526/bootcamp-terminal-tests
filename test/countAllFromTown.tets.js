import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('The countAllFromTown function', function(){

    it("it should return , number of registration numbers in the string that is from Kuilsriver 'CF'" , function(){
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(fromKuilsriver, 1)

    });
    it("it should return , number of registration numbers in the string that is from Stellies 'CL'" , function(){

        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

        assert.equal(fromStellies, 3)
    });
    it("it should return , number of registration numbers in the string that is from Bellville 'CY'" , function(){
        
        var fromBellville = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CY');

        assert.equal(fromBellville, 1)
    });
    it("it should return false, if the string parameter passed is empty" , function(){
        
        var fromBellville = countAllFromTown('','');

        assert.equal(false, '')
    }); 
    

});