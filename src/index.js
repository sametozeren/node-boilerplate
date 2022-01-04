const express = require('express');
const helmet = require('helmet');
const configs = require('./configs/index');
const loaders = require('./loaders/index');
const app = express();
const {
    UserRoutes,
} = require('./routes/index');

configs();
loaders();

app.use(express.json());
app.use(helmet());

app.use('/user', UserRoutes);

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('Server is running...');
});