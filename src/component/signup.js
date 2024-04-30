import bodyParser from 'body-parser';
import fs from 'fs';
import express from 'express';

const app = express();
const PORT = 3020;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please fill out all fields' });
  }

  const userData = {
    email,
    password,
  };

  fs.readFile('details.json', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    let users = [];
    if (data.length !== 0) {
      users = JSON.parse(data);
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    users.push(userData);

    fs.writeFile('details.json', JSON.stringify(users), err => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.status(200).json({ message: 'Sign up successful' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
