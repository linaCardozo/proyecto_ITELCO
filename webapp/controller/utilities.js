sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForItemcreation: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Type": "",
				"Description": "",
				"Comment": "",
				"CreationDate": null,
				"AssignedTo": "",
				"Site": "",
				"Status": "",
				"StatusEntrega": ""
			};
		}
	};
});
