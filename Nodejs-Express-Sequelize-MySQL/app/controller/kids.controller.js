const db = require('../config/db.config.js');
const Kid = db.kids;
const Pickup = db.pickups

// Post a Customer
exports.create = (req, res) => {	
	// Save to MySQL database
	let pickup = req.body;
	Pickup.create(pickup).then(result => {		
		// Send created customer to client
		res.json(result);
	});
};
 
// Fetch all Customers
exports.findAll = (req, res) => {
	Kid.findAll().then(kids => {
	  // Send all customers to Client
	  res.json(kids);
	});
};

// Find a Customer by Id
exports.findById = (req, res) => {	
	Kid.findById(req.params.kidId).then(kid => {
		res.json(kid);
	})
};
 
// Update a Customer
exports.update = (req, res) => {
	let customer = req.body;
	let id = req.body.id;
	Customer.update(customer, 
					 { where: {id: id} }
				   ).then(() => {
						 res.status(200).json({msg:"updated successfully a customer with id = " + id});
				   });	
};
 
// Delete a Customer by Id
exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).json({msg:'deleted successfully a customer with id = ' + id});
	});
};