export default function countAllPaarl(regNum) {
    var regNumbers = regNum.split(', ');
    var regArr = [];
   
    for (var i = 0;i<regNumbers.length;i++){
      if (regNumbers[i].trim().startsWith("CJ")){
        regArr.push(regNumbers[i].trim());
      }
    
    }
    return regArr.length;
  }