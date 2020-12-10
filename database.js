var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            title text,
            first_name text,
            last_name text,
            DOB text,
            phone_number text,
            profile_image_large blob,
            profile_image_thumbnail blob
            )`,
            (err) => {
                if (err) {
                    // Table already created
                    console.log('Error creating users table in database.js (likely already created)')
                } else {
                    // Table just created, creating some rows
                    var insert = `INSERT INTO users (
                        title, 
                        first_name, 
                        last_name, 
                        DOB, 
                        phone_number,
                        profile_image_large, 
                        profile_image_thumbnail) 
                        VALUES (?, ?, ?, ?, ?, ?, ?)`
                    console.log(insert)
                    db.run(insert, ['Dr', 'Chad', 'Cossell', '1984-02-09T22:16:56Z', '440-483-7622', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Mr', 'Levy', 'Berzon', '1994-06-06T02:48:01Z', '105-503-7206', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Mrs', 'Zahara', 'Calderhead', '1998-09-02T21:04:36Z', '491-137-8187', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Rev', 'Stinky', 'Bergstrand', '1977-06-28T19:49:14Z', '637-379-9756', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Rev', 'Nady', 'Scorer', '1978-03-19T00:13:23Z', '296-485-5303', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Dr', 'Charleen', 'Votier', '1953-11-20T21:48:39Z', '957-974-0406', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Mr', 'Johnna', 'Clarae', '1983-04-19T15:56:16Z', '277-728-7977', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Mrs', 'Winonah', 'Hanlon', '1980-10-10T20:56:17Z', '219-565-9334', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Mr', 'Kelbee', 'Kiddye', '1995-12-08T13:45:52Z', '742-911-5298', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Mr', 'Euphemia', 'Goode', '1967-04-24T11:09:03Z', '549-388-2577', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Honorable', 'Zenia', 'Bengtsson', '1973-05-14T13:53:05Z', '219-724-7125', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Dr', 'Clair', 'Dacth', '1977-05-21T09:17:08Z', '607-408-2042', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Mrs', 'Devland', 'Astridge', '1969-04-29T03:08:20Z', '501-937-6708', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Rev', 'Bevin', 'Muddiman', '1981-03-08T06:06:03Z', '297-476-0472', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Rev', 'Liana', 'Vina', '1963-04-07T02:32:59Z', '809-222-5673', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Dr', 'Dorene', 'Poland', '1980-12-17T20:08:23Z', '500-734-6807', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Rev', 'Stefan', 'Batteson', '1982-10-28T03:05:08Z', '403-206-8255', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Honorable', 'Meggi', 'Cramer', '1968-08-17T19:18:00Z', '673-335-4297', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Mr', 'Son', 'Rosedale', '1958-11-26T06:22:40Z', '775-494-8003', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Rev', 'Theo', 'Peyro', '1955-07-11T03:00:53Z', '279-837-4648', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Mr', 'Sargent', 'Lindenbaum', '1990-04-09T12:01:17Z', '193-723-5752', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Mrs', 'Rafaelia', 'Gainsbury', '1995-03-07T07:00:49Z', '450-194-0149', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Mr', 'Jami', 'Rubinowitch', '1989-11-28T13:05:38Z', '247-530-7454', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Honorable', 'Udell', 'Jeppe', '1962-02-04T10:20:43Z', '562-266-0400', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Dr', 'Welbie', 'Koppeck', '1987-10-06T11:49:36Z', '299-147-6791', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Mrs', 'Benetta', 'Guidetti', '1969-07-15T00:54:34Z', '365-724-6136', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Mrs', 'Noel', 'Bohike', '1963-03-06T23:57:07Z', '380-636-6611', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Rev', 'Demetris', 'Roake', '1963-07-13T20:16:40Z', '443-173-6842', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Mrs', 'Theodosia', 'Kilpin', '1987-06-12T22:01:15Z', '936-536-5793', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Mr', 'Chariot', 'Gillingham', '1993-05-13T04:21:58Z', '538-422-0758', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Dr', 'Scot', 'Peltzer', '1981-12-11T16:31:18Z', '444-170-0748', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Rev', 'Tommy', 'Blodgett', '1958-09-30T16:13:36Z', '292-106-0848', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Rev', 'Sallie', 'Blessed', '1969-03-19T15:42:04Z', '752-515-2846', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Mrs', 'Brynna', 'Gurnell', '1952-04-08T15:08:36Z', '968-920-0923', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Ms', 'Nikolia', 'Seymer', '1951-10-25T22:43:59Z', '386-698-9112', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Ms', 'Fielding', 'Ronnay', '1958-12-29T22:46:56Z', '122-517-8328', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Dr', 'Shandeigh', 'Pluck', '1992-03-18T14:02:00Z', '762-255-6482', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Rev', 'Redford', 'Mellem', '1984-05-04T10:34:42Z', '497-457-3035', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Honorable', 'Ricardo', 'Studdeard', '1965-02-01T07:03:06Z', '640-426-5455', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Rev', 'Pincas', 'Acum', '1952-02-12T13:25:31Z', '146-880-3329', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Ms', 'Johnette', 'Durdle', '1958-01-06T10:17:35Z', '216-375-5090', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Honorable', 'Brit', 'Antcliffe', '1981-10-05T20:12:52Z', '171-797-9997', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Honorable', 'Donnajean', 'Aphale', '1953-02-18T15:52:00Z', '853-219-5334', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Mrs', 'Farica', 'Finlay', '1971-09-20T14:34:11Z', '417-200-7449', 'http://dummyimage.com/100x100.png/ff4444/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Mrs', 'Penrod', 'Harome', '1992-07-19T07:50:29Z', '598-721-1241', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/5fa2dd/ffffff'])
                    db.run(insert, ['Mrs', 'Sigvard', 'Schroter', '1952-05-27T21:22:47Z', '852-246-5480', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Rev', 'Allina', 'Chipp', '1954-10-05T01:19:21Z', '256-532-3101', 'http://dummyimage.com/100x100.png/cc0000/ffffff', 'http://dummyimage.com/25x25.png/cc0000/ffffff'])
                    db.run(insert, ['Honorable', 'Niccolo', 'Miere', '1970-05-29T08:12:12Z', '352-963-2842', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/dddddd/000000'])
                    db.run(insert, ['Mr', 'Hugh', 'Fanning', '1964-06-07T12:21:37Z', '950-512-4647', 'http://dummyimage.com/100x100.png/5fa2dd/ffffff', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                    db.run(insert, ['Mrs', 'Gladys', 'Prate', '1982-04-10T11:12:04Z', '499-698-4031', 'http://dummyimage.com/100x100.png/dddddd/000000', 'http://dummyimage.com/25x25.png/ff4444/ffffff'])
                }
            });
    }
});


module.exports = db
