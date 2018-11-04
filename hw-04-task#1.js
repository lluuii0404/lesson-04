var handbag = {
	content: ["money", "lipstick", "nailfile", "keys", "phone"],

	addContent: function (prop) {
		this.content.push(prop)
	},

	deleteContent: function (prop) {
		var message = ""

		for (var i = 0; i < this["content"].length; i++){
			if ( this["content"][i] === prop) { 
				this["content"].splice(i, 1)
				return
            } else {
				message = "такого в сумочке нет"
			}
        }
		return message
	} 
}


// handbag.deleteContent("keys")
// handbag
// handbag.deleteContent ("вода")
// handbag
// handbag.addContent("колготки")
// handbag