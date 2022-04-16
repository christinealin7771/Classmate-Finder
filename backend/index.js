const express = require('express')
const app = express()

app.use(express.json());

const db = require('./models')

// Routers
const preferenceRouter = require('./routes/Preferences');
app.use("/preferences", preferenceRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("Server running on port 3001");
    });
});
