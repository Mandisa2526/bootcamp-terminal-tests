export default function findItemsOver20(itemList) {
    var  results = [];
    for(var i = 0; i < itemList.length; i++) {
      if (itemList[i].qty > 20) {
        results.push(itemList[i]);
      }
    }
    return results;
  }