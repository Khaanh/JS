let car = {
	model: "Golf",
	make: "Volkswagen",
	year: 1999,
	color: "black",
};

for (let key in car) {
	console.table(car[key]);
	console.table(key);
}
