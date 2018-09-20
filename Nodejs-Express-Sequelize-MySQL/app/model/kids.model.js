'use strict'
module.exports = (sequelize, Sequelize) => {
	const Kids = sequelize.define('kids', {
      kids_first_name: {
			type: Sequelize.STRING
	  },
	  kids_last_name: {
			type: Sequelize.STRING
	  },
	  created_by: {
		  type: Sequelize.STRING
		}
	},{ underscored: true});
	
	return Kids;
}