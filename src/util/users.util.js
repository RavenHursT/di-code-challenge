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

const STATS_NAMES = [
  `appreciations`,
  `comments`,
  `followers`,
  `following`,
  `views`
]

const STATS_FA_ICON_NAMES = {
  appreciations: `thumbs-up`,
  comments: `comments`,
  followers: `walking`,
  following: `walking`,
  views: `eye`
}

export const getDisplayStats = stats => Object.keys(stats)
.reduce((displayStats, statKey) => {
  STATS_NAMES.includes(statKey) && (displayStats[statKey] = {
    value: stats[statKey],
    iconName: STATS_FA_ICON_NAMES[statKey]
  })
  return displayStats
}, {})