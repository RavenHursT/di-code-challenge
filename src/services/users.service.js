import buildServiceUrl from '../util/buildServiceURL'
import fetch from 'node-fetch'
import isServer from '../util/isServer.util'

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
const getByUsername = async username => await fetchResource(`users/${username}`)
const getUsersProjects = async username => await fetchResource(`users/${username}/projects`)
const getUsersFollowers = async username => await fetchResource(`users/${username}/followers`)
const getUsersFollowing = async username => await fetchResource(`users/${username}/following`)
const getUserWorkExperience = async username => await fetchResource(`users/${username}/${isServer ? `work_experience` : `work-experience`}`)

export default {
  find,
  getByUsername,
  getUsersProjects,
  getUserWorkExperience,
  getUsersFollowers,
  getUsersFollowing
}