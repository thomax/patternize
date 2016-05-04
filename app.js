import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MainPage from './components/MainPage.jsx'

const app = express()

// http://expressjs.com/guide/behind-proxies.html
app.set('trust proxy', true)

// remove x-powered-by
app.use((req, res, next) => {
  res.removeHeader('x-powered-by')
  next()
})

app.use('/ping', (req, res, next) => {
  res.setHeader('content-type', 'text/plain')
  res.status(200).end('patternize me')
})

app.use('/', (req, res, next) => {
  res.status(200).type('html').send(
    '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(
      <MainPage />
    )
  )
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(err.status || 500)
  return res.send(err.message).end()
})

export default app
