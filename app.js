const express = require('express');
const fs = require('fs');
const path = require('path'); // data json file

const app = express();
const PORT = 5000;

// Setting EJS as template engine

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); // allows you to expose a directory so that its files can be directly accessed via HTTP requests.

// Load JSON data
const jsonData = JSON.parse(fs.readFileSync('./data.json')); // CONVERTS TO JS OBJECTS

// Just to check the output in the terminal
console.log(jsonData[0].name);
console.log(jsonData[0].username);
console.log(jsonData[0].email);
console.log(jsonData[0].address.city);
console.log(jsonData[0].address.zipcode);
console.log(jsonData[0].address.street);
console.log(jsonData[0].address.suite);

// Route for the table
app.get('/', (req, res) => {
    res.render('index', { users: jsonData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
