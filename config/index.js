/*eslint-disable no-process-env*/

import defaults from 'defaults'

const env = process.env.NODE_ENV || 'development'

const DEFAULTS = {
  port: 3003
}

export default defaults({
  env
}, DEFAULTS)
