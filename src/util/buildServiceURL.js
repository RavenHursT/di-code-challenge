import isServer from './isServer.util'
import querystring from 'querystring'

const BEHANCE_APIKEY = `vHxD4ly5SN0XJYgby7xLEwwPw9VQ7Oxk`

export default (servicePath, queries) => {
  queries = {
    ...{
      api_key: BEHANCE_APIKEY
    },
    ...queries
  }
  const urlRoot = isServer ?
    `http://behance.net/v2/` : `${window.location.origin}/api/`
  const qs = querystring.stringify(queries)
  return `${urlRoot}${servicePath}?${qs}`
}