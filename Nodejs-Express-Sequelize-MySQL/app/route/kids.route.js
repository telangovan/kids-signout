module.exports = function(app) {
 
    const kids = require('../controller/kids.controller.js');
 
    // Create a new Customer
    app.post('/api/kids', kids.create);
 
    // Retrieve all Customer
    app.get('/api/kids', kids.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/kids/:kidId', kids.findById);
 
    // Update a Customer with Id
    app.put('/api/kids', kids.update);
 
    // Delete a Customer with Id
    app.delete('/api/kids/:kidId', kids.delete);
}