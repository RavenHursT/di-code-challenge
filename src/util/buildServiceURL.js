import isServer from './isServer.util'
import querystring from 'querystring'

const BEHANCE_APIKEY = `vHxD4ly5SN0XJYgby7xLEwwPw9VQ7Oxk`

export default (servicePath, queries) => {
  const apiKeyQuery = isServer ? {
      api_key: BEHANCE_APIKEY
    } : {}
  queries = {
    ...apiKeyQuery,
    ...queries
  }
  const urlRoot = isServer ?
    `http://behance.net/v2/` : `${window.location.origin}/api/`
  const qs = querystring.stringify(queries)
  return `${urlRoot}${servicePath}${Object.keys(queries).length ? `?`: ``}${qs}`
}