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