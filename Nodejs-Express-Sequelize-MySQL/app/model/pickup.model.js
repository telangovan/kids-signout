'use strict'
module.exports = (sequelize, Sequelize) => {
	const Pickup = sequelize.define('pickup', {
      kid_id: {
			type: Sequelize.INTEGER
	  },
	  pickup_flag: {
			type: Sequelize.BOOLEAN
	  }
	},
{ underscored: true}
);
	
	return Pickup;
}