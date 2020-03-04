const {app} = require("./app");
const {PORT = 8081} = process.env;


app.listen(PORT, ()=>{ console.log(`I'm listening on ${PORT}`)})