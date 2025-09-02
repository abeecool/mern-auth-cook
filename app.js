const express = require("express");
const app = express();
app.use(express.json());

app.listen(4000, ()=> {
  console.log("Server Started Abee");
});

app.post("/post", async(req, res)=> {
  console.log(req.body);
  const {data} = req.body;

  try {
    if(data == "cool"){
      res.send({status: "Abee Cool"});
    } else {
      res.send({status: "User not found"});
    }
  } catch (error) {
    res.send({status: "Error"});
  }

});