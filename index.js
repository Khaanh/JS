class Employee {
	#firstName;
	#lastName;
	#yearsOfWork;

	constructor(firstName, lastName, yearsOfWork) {
		this.#firstName = firstName;
		this.#lastName = lastName;
		this.#yearsOfWork = yearsOfWork;
	}

	get firstName() {
		return this.#firstName;
	}

	set firstName(firstName) {
		this.#firstName = firstName;
	}

	get lastName() {
		return this.#lastName;
	}

	set lastName(lastName) {
		this.#lastName = lastName;
	}

	get yearsOfWork() {
		return this.#yearsOfWork;
	}

	set yearsOfWork(years) {
		this.#yearsOfWork = years;
	}
}

let alex = new Employee("Alex", "Hugo", 20);
let bob = new Employee("Bob", "Marlin", 4);

let arr = [alex, bob];
console.log(arr);

Employee.prototype.getInfo = function () {
	console.log(
		`${this.firstName}${this.lastName} and working here: ${this.yearsOfWork}`
	);
};

alex.getInfo();
