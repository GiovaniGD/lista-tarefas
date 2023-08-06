const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:fBcEBD4p7nc25Sa@listartarefas.1ngdh9i.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((error) => console.log(err));
};

module.exports = connectToDb;
