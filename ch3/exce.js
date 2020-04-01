var exec = require("child_process").exec;

exec("node -v", function(err, stdout) {

	if (err) {
		throw err;
	}

	console.log("node Version ");

	console.log(stdout);

});
