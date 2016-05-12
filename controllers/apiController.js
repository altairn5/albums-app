function index(req, res){

	res.json({
		message: "Welcome to Albums API",
		documentation_url: "https://github.com/altairn5/albums-app",
		base_url: "http://albums-app.herokuapp.com",
		endpoints: [
				{method: "GET", path: "/api", description: "Describes available endpoints"}
					]

			});

}

module.exports.index = index;