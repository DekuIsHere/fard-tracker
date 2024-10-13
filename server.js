const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static HTML files from the /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Load user data
const loadUsers = () => {
    const data = fs.readFileSync(path.join(__dirname, 'database', 'users.json'));
    return JSON.parse(data);
};

// Save user data
const saveUsers = (users) => {
    fs.writeFileSync(path.join(__dirname, 'database', 'users.json'), JSON.stringify(users, null, 2));
};

// Sign-up route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();

    // Check if username already exists
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).send('User already exists!');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add new user
    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword
    };
    users.push(newUser);
    saveUsers(users);

    // Return a success response
    res.status(200).send('User registered successfully!'); // Ensure success status
});

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();

    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send('User not found!');
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid password!');
    }

    // Return a success response
    res.status(200).send('Logged in successfully!'); // Ensure success status
});

// Fallback route for root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
