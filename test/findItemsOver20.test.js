import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('The findItemsOver20 function', function(){
    it("it should return ,all the products that have a quantity higher than 20 in the itemlist" , function(){
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];

        assert.deepEqual(results, findItemsOver20(itemList));
        
    })
        it("it should return ,all the products that have a quantity below 20 in itemlist3" , function(){
            var itemList3 = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 4},
                {name : 'bananas', qty : 8},
                {name : 'apples', qty : 16}
            ];
            
            var results3 = [];
            assert.deepEqual(results3, findItemsOver20(itemList3));
        })
        it("it should return an empty string, if the empty string is passed in itemList3" , function(){
            var results3 = [];
            var itemList3 = [
                {name : '', qty : ''},
                {name : '', qty : ''}
            ];
            
            assert.deepEqual(results3, findItemsOver20(itemList3, 20));
        });
        



});