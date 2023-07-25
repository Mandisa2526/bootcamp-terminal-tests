export default function findItemsOver(list,min) {
    var items = [];
    for(var i = 0; i < list.length; i++) {
      if (list[i].qty > min) {
        items.push(list[i]);
      }
    }
    return items;
  }