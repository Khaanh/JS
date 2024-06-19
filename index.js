let myWork = [];

for (let i = 0; i <= 10; i++) {
	let obj = {
		lesson: i,
		stat: i % 2 == 0 ? true : false,
	};
	myWork.push(obj);
}
console.log(myWork);
