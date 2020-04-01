var Person = require("./lib/clilib");

var muhammed = new Person("Muhammed Essa");
var ahmed = new Person("Ahmed Osama");

muhammed.on('says', function(said) {
	console.log(`${this.name} -> ${said}`);
});

ahmed.on('says', function(said) {
	console.log(`${this.name}-> ${said}`);
});


muhammed.emit('says', "Hi my name is Muhammed Essa.");
ahmed.emit('says', "Hi my name is Ahmed Osama.");
