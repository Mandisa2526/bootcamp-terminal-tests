export default function (number){
if (number.startsWith("CY")) {
   return  "Bellville";
}

else if (number.startsWith("CJ")) {
   return "Paarl";
}

else if (number.startsWith("CA")) {
  return "Cape Town";
} else {
  return "Some other place!";


  
}
}