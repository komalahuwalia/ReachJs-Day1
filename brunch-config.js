exports.config = {
	files: {
		javascripts : {
			joinTo: {
				'javascripts/app.js' : /^app/,
				'javascripts/vendor.js' : /^(?!app)/
			}
		},
		stylesheets : {
			joinTo : 'stylesheets/style.css'
		}
	},
	server : {
		port : 5555
	}
}