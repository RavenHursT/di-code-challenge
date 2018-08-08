import buildServiceUrl from '../util/buildServiceURL'
import fetch from 'node-fetch'
const find = (q) => fetch(buildServiceUrl(`users`, {q}), {
  headers: {
    Accept: `application/json`
  }
})

export default {
  find
}