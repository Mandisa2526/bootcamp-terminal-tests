export default function totalPhoneBill(input){
var phones = input.split(', ')
var bill = 0;
for (let i = 0; i < phones.length; i++) {
let phone = phones[i];
if (phone === 'call') {
   bill += 2.75;
}
if (phone === 'sms') {
   bill += 0.65;
 }
}   
return 'R' + bill.toFixed(2);
}