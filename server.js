require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const PORT = process.env.PORT;
const app = express();


//middleware -- CORS
app.use(cors());

//middleware -- JSON parsing
app.use(express.json());


app.use((req, res, next) => {
    console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
    // console.log(req.session);
    next();
});

//middleware -- API routes
app.use('/api/v1/companies', routes.companies);
app.use('/api/v1/audits', routes.audits);
app.use('/api/v1/', routes.users);


// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

app.listen(PORT, function() {
    console.log(`Server is live on port ${PORT}`);
});
