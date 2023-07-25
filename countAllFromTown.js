export default function countAllFromTown(regNumbers, town){
    var regNum = regNumbers.split(',');
    var regArr = [];
    for (var i = 0;i<regNum.length;i++) {
      if (regNum[i].trim().startsWith(town)){
           regArr.push(regNum[i].trim());
          
      }
      
    }
    return regArr.length;
  }