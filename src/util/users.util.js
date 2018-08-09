export const getLargestImage = (images) => images[
  Object.keys(images)
  .reduce(
    (largest, key) => {
      key = Number(key)
      largest = Number(largest)
      return key > largest ? key : largest
    }, 0
  )
]

export const getFullName = user => `${user.first_name || ``}
  ${user.first_name && user.last_name ? ` `: ``}
  ${user.last_name ? user.last_name : ``}` ||
  user.username ||
  `No name found`