const express = require('express')
const Articles = require('./data')
const cors = require('cors')
const credentials = require('./credentials');

const api = express()

api.use(express.json())

api.use(cors())

const authenticator = (req, res, next) => {
  const { authorization } = req.headers;
  const { token } = credentials;

  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User not currently logged in.' });
  }
}

//Get All Articles Endpoint
api.post('/api/login', (req, res) => {
  const {username, password, role, token}  = credentials;

  if (username === req.body.username && password === req.body.password) {
    res.json({
      username,
      role,
      token
    });
  } else {
    res.status(403).json({ error: 'Incorrect username / password combination.' });
  }
  
})

api.post('/api/logout', authenticator, (req, res) => {
  const {username, role, token}  = credentials;
  res.json({
    username,
    role,
    token
  })
})

api.get('/api/articles', authenticator, (req, res) => {
  res.json(Articles.getAll())
})

//Get Post Endpoint
api.get('/api/articles/:id', authenticator, (req, res) => {
  res.json(Articles.getById(req.params.id))
})

//Create Post Endpoint
api.post('/api/articles', authenticator, (req, res) => {
  res.json(Articles.create(req.body))
})

//Edit Post Endpoint
api.put('/api/articles/:id', authenticator, (req, res) => {
  res.json(Articles.edit(req.params.id, req.body))
})

//Delete Post Endpoint
api.delete('/api/articles/:id', authenticator, (req, res) => {
  res.json(Articles.remove(req.params.id))
})

api.listen(5000, () => {
  console.log('listening on 5000')
})
