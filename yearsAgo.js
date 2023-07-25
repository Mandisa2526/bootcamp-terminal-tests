export default function yearsAgo(year){
    var currentTime = new Date();
    return currentTime.getFullYear() - year;
  }