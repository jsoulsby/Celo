var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE herds (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            name text UNIQUE 
            )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.log('error creating herds table (likely already created)')
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO herds (name) VALUES (?)'
                    db.run(insert, ["herd 001"])
                    db.run(insert, ["herd 002"])
                    db.run(insert, ["herd 003"])
                    db.run(insert, ["herd 004"])
                    db.run(insert, ["herd 005"])
                }
            });
        db.run(`CREATE TABLE cows (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name text UNIQUE
                )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.log('error creating cows table (likely already created)')
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO cows (id, name) VALUES (?,?)'
                    db.run(insert, ["1", "Cow 0233"])
                    db.run(insert, ["2", "Cow 0074"])
                    db.run(insert, ["3", "Cow 0093"])
                    db.run(insert, ["4", "Cow 0524"])
                    db.run(insert, ["5", "Cow 0431"])
                    db.run(insert, ["6", "James"])
                    db.run(insert, ["7", "John"])
                    db.run(insert, ["8", "Charlie"])
                    db.run(insert, ["9", "Rebecca"])
                    db.run(insert, ["10", "Leanne"])
                    db.run(insert, ["11", "Michael"])
                    db.run(insert, ["12", "Sarah"])
                }
            });
        db.run(`CREATE TABLE cowHerds (
                cow_id INTEGER NOT NULL,
                herd_id INTEGER NOT NULL,
                FOREIGN KEY(cow_id) REFERENCES cows(id),
                FOREIGN KEY(herd_id) REFERENCES herds(id),
                primary key (cow_id,herd_id)
                )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.log('error creating cowHerds table (likely already created)')
                } else {
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO cowHerds (cow_id, herd_id) VALUES (?,?)'
                    db.run(insert, ["1", "1"])
                    db.run(insert, ["2", "1"])
                    db.run(insert, ["3", "1"])
                    db.run(insert, ["4", "1"])
                    db.run(insert, ["5", "1"])
                    db.run(insert, ["6", "2"])
                    db.run(insert, ["7", "2"])
                    db.run(insert, ["8", "2"])
                    db.run(insert, ["9", "2"])
                    db.run(insert, ["10", "2"])
                    db.run(insert, ["11", "2"])
                    db.run(insert, ["12", "2"])
                }
            });
    }
});


module.exports = db
