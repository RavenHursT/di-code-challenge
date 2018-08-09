import buildServiceUrl from '../util/buildServiceURL'
import fetch from 'node-fetch'

const fetchResource = async (resourcePath, params) => {
  const res = await fetch(buildServiceUrl(resourcePath, params), {
    headers: {
      Accept: `application/json`
    }
  })

  // TODO: Mutate resp.body to hold read JSON and pass along all of res object.
  return await res.json()
}

const find = async (q) => await fetchResource(`users`, {q})
const getByUsername = async (username) => await fetchResource(`users/${username}`)
const getUsersProjects = async (username) => await fetchResource(`users/${username}/projects`)

export default {
  find,
  getByUsername,
  getUsersProjects
}