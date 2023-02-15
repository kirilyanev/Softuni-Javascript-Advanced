class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        this._validateParameters(name);
        this._validateParameters(salary);
        this._validateParameters(position);
        this._validateParameters(department);

        if (salary < 0) throw new Error("Invalid input!");

        const worker = {
            name: name,
            salary: salary,
            position: position
        }
        if(!this.departments[department]) {
            this.departments[department] = [];
        };
        this.departments[department].push(worker);


        return `New employee is hired. Name: ${name}. Position: ${position}`
    };

    bestDepartment() {
        const allDepartments = [];
        for(let department in this.departments) {
            let averageSalary = 0;
            for (let worker of this.departments[department]) {
                averageSalary += worker.salary;
            }
            averageSalary = averageSalary / this.departments[department].length;
            allDepartments.push({
                department:department,
                salary:averageSalary,
            })

        }
        const sortedDepartments = allDepartments.sort((a,b)=> b.salary - a.salary);
        const result = [`Best Department is: ${sortedDepartments[0].department}`,`Average salary: ${sortedDepartments[0].salary.toFixed(2)}`];
        const workers = this.departments[sortedDepartments[0].department];
        const sortedWorkers = workers.sort((a,b)=> a.salary == b.salary ? a.name.localeCompare(b.name) : b.salary - a.salary);
        sortedWorkers.forEach(w => {
            const workerData = `${w.name} ${w.salary} ${w.position}`;
            result.push(workerData);
        });

        return result.join('\n');
    };

    _validateParameters(value) {
        if (value == '' || value == undefined || value == null) throw new Error("Invalid input!");
    };
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
// OUTPUT
// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer