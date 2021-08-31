let salaryCalculated = 0;
const calculateTax = function (salary) {
  return 0.1 * salary;
};

const calculateGrossSalary = function (salary) {
  salaryCalculated++;
  console.log(salaryCalculated);
  const tax = calculateTax(salary);
  return tax + salary + 100;
};

export { calculateGrossSalary, calculateTax ,salaryCalculated};
