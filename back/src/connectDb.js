const mongoose = require("mongoose");

//conectando ao banco de dados.
mongoose
  .connect(
    "mongodb+srv://aircnc:aircnc@aircnc-5hpkk.azure.mongodb.net/aircnc?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "aircnc"
    }
  )
  .then(res => {
    console.log("está ok", res);
  })
  .catch(err => {
    console.log("error", err);
  });
