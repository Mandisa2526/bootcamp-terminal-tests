export default function mostProfitableDepartment(salesData){
var departments = {};
for (var i = 0; i < salesData.length; i++) {
  if (departments[salesData[i].department]) {
    departments[salesData[i].department] += salesData[i].sales;
  } else {
    departments[salesData[i].department] = salesData[i].sales;
  }
}
var department = {department : '', sales : 0};
  for (var i in departments) {
    if (departments[i] >= department.sales) {
      department = {department : i, sales : departments[i]};
    }
  }
  return department.department;
}