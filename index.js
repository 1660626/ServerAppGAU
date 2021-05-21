const express = require('express')
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000
const {data} = require('./data');

app.get('/noti', (req, res)=>{
  res.json(data)
})
app.post('/noti', (req, res)=>{
  // res.json({"mess": "Hello Would!"})
  // const user = req.body;
 data.push(JSON.parse(JSON.stringify(req.body)));

   res.json(data);
})

app.get("/noti/:id", async function (req, res) {
  const idd = req.params.id || 0;
  console.log(idd)
  let obj = data.find(o => o.id == idd);
  if(obj){
  res.json(obj);
    
  }
  else{
  res.json(null);
    
  }
});

app.listen(PORT, () => {console.log("Server started on http://localhost:"+PORT)})

module.exports = app;