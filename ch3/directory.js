var fs = require("fs");

if (fs.existsSync("myapp")) {
	console.log("Directory already created");
} else {

	fs.mkdir("myapp", function(err) {

		if (err) {
			console.log(err);
		} else {
			console.log("Directory Created");
		}

	});

}
