//Problem 1, employees json
let employee = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    }
];

console.log(employee);

//Problem 2, company json
let company = [
    {
    companyName: "Tech Stars",
    website:"www.techstars.site",
    employees: employee
    }
]

//Problem 3, Add new empolyee
let anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
};

// Push the data
employee.push(anna);

//Problem 4
let totalSalary = 0;

employee.forEach(employee => {
    totalSalary += employee.salary;
    });

console.log("Total salary for all employees:", totalSalary);

//Problem 5
employee.forEach(employee => {
    if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
    }
});
console.log(employee);

//Problem 6
let workingFromHome = ['Anna', 'Sam'];

employee.forEach(employee => {
    if (employee.firstName === 'Anna' || employee.firstName === 'Sam') {
        employee.wfh = true;
    } else {
        employee.wfh = false;
    }
});

console.log(employee);