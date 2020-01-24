module.exports = app => {
    
    const controller = require('../controllers/example')();
  
    app.route('/')
      .get(controller.list);
  }