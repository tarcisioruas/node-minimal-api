const express    = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const config = require('config');

module.exports = () => {
    const app = express();

    const port = config.get('server.port');

    app.set('port', port);

    app.use(bodyParser.json());

    consign({cwd: 'app'})
    .then('controllers')
    .then('models')
    .then('routes')
    .into(app);

    const ret = require('../app/routes/example')(app);   

    return app;
};