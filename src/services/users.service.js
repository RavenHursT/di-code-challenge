import buildServiceUrl from '../util/buildServiceURL'
import fetch from 'node-fetch'
const find = async (q) => {
  const res = await fetch(buildServiceUrl(`users`, {q}), {
    headers: {
      Accept: `application/json`
    }
  })
  // TODO: Mutate resp.body to hold read JSON and pass along all of res object.
  return await res.json()
}

export default {
  find
}