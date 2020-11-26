const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

var db = require("./database.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get all herds
app.get("/api/herds", (req, res, next) => {
  var sql = "select * from herds"
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
  });
});

//Get herd name by herd_id
app.get("/api/herd/name/:herd_id", (req, res, next) => {
  console.log("Received call for herd name")
  var sql = "SELECT * FROM herds WHERE id = ?"
  var params = [req.params.herd_id]

  console.log(req.params.herd_id)
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({ "error": "herd not found" })
    }
    res.json({
      "message": "success",
      "data": rows
    })
  });
});

//Get all cows from herd
app.get("/api/herds/:id", (req, res, next) => {
  var sql = `SELECT cow_id, name 
            FROM cowHerds 
            INNER JOIN cows ON cows.id = cowHerds.cow_id 
            WHERE cowHerds.herd_id = ?`
  var params = [req.params.id]
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
    console.log(rows)
  });
});

//Get all cows
app.get("/api/cows", (req, res, next) => {
  var sql = "select * from cows"
  var params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
  });
});

//Delete herd
app.post("/api/herds/:id", (req, res, next) => {
  console.log("Received delete herd request")
  db.run("DELETE FROM herds WHERE id = ?",
    req.params.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.status(200).json({ addded: req.params.id })
    });
});

//Delete cow from herd
app.post("/api/cow/:herd_id/:cow_id", (req, res, next) => {
  db.run("DELETE FROM cowHerds WHERE herd_id = ? AND cow_id = ?",
    req.params.herd_id,
    req.params.cow_id,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      console.log("Deleted " + req.params.cow_id)
      res.status(200).json({ herd: req.params.herd_id, cow: req.params.cow_id })
    });
});

//Add herd
app.post("/api/herd/", (req, res, next) => {
  if (!req.body.name) {
    res.json.status(400).json({ "error": "No herd name in body" })
    return;
  }
  db.run("INSERT INTO herds (name) VALUES (?)",
    req.body.name,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.status(201).json({ added: req.body.name })
    });
});


//Add existing cow to herd
app.post("/api/cowHerd/", (req, res, next) => {
  console.log("Received call for cowHerd")
  console.log(req.body)
  if (!req.body.cow || !req.body.herd) {
    res.status(400).json({ "error": "Missing cow or herd" })
    return;
  }
  db.run("INSERT INTO cowHerds (cow_id, herd_id) VALUES (?,?)",
    req.body.cow,
    req.body.herd,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.status(201).json({ herd: req.body.cow, cow: req.body.herd })
    });
});


//For later use once I get hired :^)
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
