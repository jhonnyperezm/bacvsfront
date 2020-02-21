const app = require('./server');
const {PORT} = require('./config');


app.listen(PORT,()=>{
    console.log("Corriendo en el puerto " + PORT)
});
