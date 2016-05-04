import app from '../app'
import fs from 'fs'
import config from '../config'

fs.readFile('./package.json', 'utf8', (err, data) => {

  if (err) {
    throw err
  }

  const pkg = JSON.parse(data)

  const server = app.listen(config.port, () => {
    const host = server.address().address
    const port = server.address().port
    console.log('%s listening at http://%s:%s', pkg.name, host, port)  // eslint-disable-line no-console
  })
})
