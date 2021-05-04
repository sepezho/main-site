const fs = require('fs');

const GetInstData = app => {
  app.get("/API/GetInstData", (req, res) => {
    let instagramData = fs.readFileSync('instagramData.json')
    res.send(instagramData)
  });
};

module.exports = GetInstData;