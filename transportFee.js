export default function(time){ 
    if(time == 'morning'){
    return 'R20';
 }
  else if(time == 'afternoon'){
    return 'R10';
  }
  
  else if (time =='nightshift'){
   return 'free'; 
  }
  
}