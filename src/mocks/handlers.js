import { rest } from 'msw'
import Articles from './data'
import credentials from './credentials';

function authenticator(req, resp) {
  const { authorization } = req.headers._headers;
  return (authorization === credentials.token)?resp():res( ctx.status(403),ctx.json({ error: 'User not currently logged in.' }));
}


function login(req, res, ctx) {
  const {username, password, role, token}  = credentials;
  
  if (username === req.body.username && password === req.body.password) {
    return res(ctx.json({
      username,
      role,
      token
    }))
  } else {
    return res( ctx.status(403),ctx.json({ error: 'Incorrect username / password combination.' }));
  }
}

function logout(req, res, ctx) {
  return (authenticator(req), ()=>{
    return res(
      ctx.status(200),
      ctx.json(Articles.getAll())
    )
  })
}


function getAll(req, res, ctx) {
  return (authenticator(req, ()=>{
    return res(
      ctx.status(200),
      ctx.json(Articles.getAll())
    );
  }))
}

function getById(req, res, ctx) {
  return (authenticator(req, ()=>{
    return res(
      ctx.status(200),
      ctx.json(Articles.getById(req.params.id))
    )
  }))
}

function create(req, res, ctx) {
  return (authenticator(req, ()=> {
    return res(
      ctx.status(200),
      ctx.json(Articles.create(req.body))
    )
  }))
}

function edit(req, res, ctx) {
  return (authenticator(req, ()=> {
    return res(
      ctx.status(200),
      ctx.json(Articles.edit(req.params.id, req.body))
    )
  }))
}

function remove(req, res, ctx) {
  return (authenticator(req, ()=> {
    return res(
      ctx.status(200),
      ctx.json(Articles.remove(req.params.id))
    )
  }))
}

export const handlers = [
  rest.post('http://localhost:5000/api/login', login),
  rest.post('http://localhost:5000/api/logout', logout),
  rest.get('http://localhost:5000/api/articles', getAll),
  rest.get('http://localhost:5000/api/articles/:id', getById),
  rest.post('http://localhost:5000/api/articles', create),
  rest.put('http://localhost:5000/api/articles/:id', edit),
  rest.delete('http://localhost:5000/api/articles/:id', remove)
]
