const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

var db = require("./database.js")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get a list of users
app.get("/api/users", (req, res, next) => {
  var sql = "SELECT * FROM users WHERE first_name = ? COLLATE NOCASE OR last_name = ? COLLATE NOCASE LIMIT ? "
  var params = [req.query.name, req.query.name, req.query.limit]
  if (!req.query.limit) {
    sql = "SELECT * FROM users WHERE first_name = ? OR last_name = ?"
    params = [req.query.name, req.query.name]
  }
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({ "error": "user not found" })
      return;
    }
    res.status(200).json({
      "message": "success",
      "data": rows
    })
  });
});

// Get a single user
app.get("/api/user", (req, res, next) => {
  var sql = "SELECT * FROM users WHERE id = ? LIMIT 1"
  var params = [req.query.id]
  console.log(req.query)
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({ "error": "user not found" })
      return;
    }
    res.status(200).json({
      "message": "success",
      "data": rows
    })
  });
});

// Update a user 
app.put("/api/user/update", (req, res, next) => {
  var sql = `UPDATE users SET 
              title = ?,
              first_name = ?, 
              last_name = ?, 
              DOB = ?, 
              phone_number = ?,
              profile_image_large = ?, 
              profile_image_thumbnail = ?
             WHERE 
              id = ?`
  var params = [req.body.title, req.body.first_name, req.body.last_name, req.body.DOB,
  req.body.phone_number, req.body.profile_image_large, req.body.profile_image_thumbnail, req.body.id]
  db.run(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.status(200).json({
      "message": "updated user " + req.body.id + " successfully",
      "data": rows
    })
  });
});

// Delete user
app.delete("/api/user/delete", (req, res, next) => {
  db.run("DELETE FROM users WHERE id = ?",
    req.body.id,
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        return;
      }
      res.status(200).json({
        "message": "deleted user " + req.body.id
      })
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
