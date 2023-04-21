// Классы и объекты
// №1,2
// class Employee {

// }
// let user = new Employee;
// console.log(user);
// Свойства объектов в ООП в JavaScript
// №1,2
// class Employee {
    
// }
// let user = new Employee;
// user.name = 'john';
// user.age = '18';
// user.salary = '40000'
// alert (user.name+ ' ' +user.age+ ' ' +user.salary);
// Несколько объектов одного класса в ООП в JavaScript
// №1,2
// class Employee {
    
// }
// let user1 = new Employee;
// let user2 = new Employee;
// user1.name = 'john';
// user1.salary = 45;
// user2.name = 'eric';
// user2.salary = 30;
// console.log(user1.salary + user2.salary);
// Методы классов в ООП в JavaScript
// №1
// class Employee {
// 	show() {
// 		return '+++';
// 	}
// }
// let user = new Employee;
// console.log(user.show());
// Параметры методов в ООП в JavaScript
// №1
// class Employee {
// 	show(name, salary) {
// 		return name+ ' ' +salary;
// 	}
// }
// let user = new Employee;
// console.log(user.show('john', 30));
// Обращение к свойствам внутри классов в ООП в JavaScript
// №1,2,3
// class Employee {
// 	show() {
// 		console.log(this.name+ ' ' +this.salary);
// 	}
// }
// let user = new Employee;
// user.name = 'john';
// user.salary = 40;
// user.show();
// Обращение к методам внутри классов в ООП в JavaScript
// №1,2,3
// class Student {
// 	show() {
// 		return this.cape(this.name)+ ' ' +this.cape(this.surn);
// 	}
	
// 	cape(str) {
// 		return str[0].toUpperCase() + str.slice(1, -5);
// 	}
// }
// let user = new Student;
// user.name = 'john';
// user.surn = 'horhe';
// console.log(user.show());
// Объявление свойств внутри классов в ООП в JavaScript
// №1,2
// class Student {
// 	name = 'john';
//     surn = 'horhe';
	
// 	show() {
// 		return this.name+ ' ' +this.surn;
// 	}
// }
// let user = new Student;
// console.log(user.show());
// Конструктор в ООП в JavaScript
// №1
// class Employee {
// 	constructor() {
// 		console.log('+++');
// 	}
// }
// new Employee;
// №1,2,3,4
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	show() {
// 		return this.name + ' ' + Number(this.salary/100 * 10 + this.salary) ;
// 	}
// }
// let employee = new Employee('john', 50000);
// console.log(employee.show());
// 13.1,2,3
// class Employee  {
// 	#name;
// 	#salary;
//  #age;

// 	constructor(name, salary, age) {
// 		this.#name = name;
//         this.#salary = salary;
//         this.#age = age;
// 	}
	
// 	show() {
// 		return this.#name + ' ' + this.#salary + ' ' + this.#age;

// 	}
// }
// let employee = new Employee('john', 50000, 18);
// console.log(employee.show());
// 14.1
// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}
	
// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}
	
// 	#addSign(num) {
// 		return num + '$';
// 	}
// }
// 16.1,2,3
// class Employee  {
// 	#name;
// 	#salary;
// 	#age;
// 	constructor(name, salary, age) {
// 		this.#name = name;
// 		this.#salary = salary;
//         this.#age = age;

// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSalary() {
// 		return this.#salary;
// 	}
//     getAge() {
// 		return this.#age;
// 	}
// }
// let employee = new Employee('john', 50000, 18);
// console.log(employee.getName());
// console.log(employee.getSalary());
// console.log(employee.getAge());
// 17.1
// class Employee  {
// 	#name;
// 	#salary;
// 	#age;
// 	setName(name) {
// 		this.#name = name;
// 	}
// 	setSalary(salary) {
// 		this.#salary = salary;
// 	}
//     setAge(age){
//         this.#age = age;
//     }
// 	getName() {
// 		return this.#name;
// 	}
	
// 	getSalary() {
// 		return this.#salary;
// 	}
//     getAge() {
// 		return this.#age;
// 	}
// }
// let employee = new Employee;
// employee.setName('john');
// employee.setSalary(50000);
// employee.setAge(18);
// console.log(employee.getName());
// console.log(employee.getSalary());
// console.log(employee.getAge());
// 18.1,2
// class Employee  {
// 	#age;
// 	#salary;
	
// 	setAge(age) {
// 		if (age <= 120) {
// 			this.#age = age;
// 		} else {
// 			throw new Error('age is incorrect');
// 		}
// 	}
//     setSalary(salary) {
// 		this.#salary = salary;
// 	}
// 	getAge() {
// 		return this.#age;
// 	}
// 	getSalary() {
// 		return this.#salary + '$';
// 	}
// }
// let employee = new Employee;
// employee.setAge(120);
// employee.setSalary(50000);
// console.log(employee.getAge());
// console.log(employee.getSalary());
// 19.1
// class Employee  {
// 	#name;
// 	#surn;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 		return this;
// 	}
	
// 	getName() {
// 		return this.#name;
// 	}
// 	getSurn() {
// 		return this.#surn;
// 	}
// }
// let employee = new Employee ;
// employee.setName('john').setSurn('smit');
// console.log(employee .getName());
// console.log(employee.getSurn());
// 21.2
// class Student {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];
// for (let user of users) {
//     if(user instanceof Employee){
//         console.log(user.name)
//     }
// }
// 22.1.2.3.4
// class Validator {
// 	show(cor){
// 		if(typeof(cor) == "string"){
// 			console.log('все ок')
// 		}
// 		else{
// 			console.log(' это int ')
// 		}                                                                                                                                                                                                                                                                                                                                                                
// 	}
	
// }
// let validarot = new Validator;
// console.log(validarot.show(123))
// class isEmail {
// 	show(cor){
		
// 		let a = 'kmb@.com'  
// 		if(a == cor){
			
// 			console.log('Email написан  корректно')
// 		}
// 		else{
// 			console.log('Email написан некорректно')
// 		}                                                                                                                                                                                                                                                                                                                                                                  
// 	}
	
// }
// let email = new isEmail;

// console.log(email.show('kmb@.com'))


// class isDomain {
// 	show(cor){
		
// 		let a = 'code.ru'  
// 		if(a == cor){
			
// 			console.log('Домен написан правильно')
// 		}
// 		else{
// 			console.log('Домен написан неправильно')
// 		}                                                                                                                                                                                                                                                                                                                                                                  
// 	}
	
// }
// let domain = new isDomain;

// console.log(domain.show('code.ru'))



// class isNumber {
// 		show(cor){
			
// 			let a = 'abc123'
			 
// 			if(a == cor){
// 				console.log('В строке есть цифры')
// 			}
// 			else{
// 				console.log('В строке нету цифр')
// 			}                                                                                                                                                                                                                                                                                                                                                                  
// 		}
		
// 	}
// 	let number = new isNumber;
	
// 	console.log(number.show())
// 23.1.2.3
// class City {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name, position, department) {
        
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// }

// let department = new City('Police');
// let position = new City('boss');
// let employee = new Employee('john', position, department);
// console.log(employee.name);
// console.log(employee.department.name);
// console.log(employee.position.name);
// 24.1.2
// class Employee{
// 	#name;

// 	constructor(name) {
// 		this.#name = name;
// 	}
// 	getName() {
// 		return this.#name;
// 	}
// }
// let users = [
// 	new Employee('john'),
// 	new Employee('23000'),
// 	new Employee('eric'),
// 	new Employee('30000'),
// 	new Employee('kyle'),
// 	new Employee('12000'),
// ];
// for (let user of users) {
// 	console.log(user.getName());
// };
// 25.1.2.3.4.5
class User {
	#name;
	#salary;
	
	constructor(name,salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary() {
		return this.#salary;
	}
}
class EmployeesCollection {
	#users;
	#salaries;
	
	constructor() {
		this.#users = [];
	}
	constructor(){
		this.#salaries = [];
	}
	add(user,sal) {
		this.#users.push(user)
		this.#salaries.push(sal);
	}
	// addd(sal) {
	// 	this.#salaries.push(sal);
	// }
	show() {
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
	shows() {
		let a = 0
		for (let sal of this.#salaries) {
			
			a += sal
			console.log(sal.getSalary());
		}
	}
}
let uc = new EmployeesCollection;
uc.add(new User('john',1000));
uc.add(new User('eric',2000));
uc.add(new User('kyle',3000));
uc.shows();
uc.show();