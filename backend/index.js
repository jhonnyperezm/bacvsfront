const mongoose = require("mongoose");
const app = require("./server");
const { PORT, MONGO_URI } = require("./config");

console.log(MONGO_URI);
mongoose
  .connect(MONGO_URI, { dbName: "nodejs" })
  
  .then(() => {
    app.listen(PORT, () => {
      console.log("Corriendo en el puerto " + PORT);
    });
    console.log("Connection to the Atlas Cluster is successful!");
  })
  .catch(err => console.error(err));
