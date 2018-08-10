import React from 'react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './stats.scss'

const StatValue = ({stats, statName, match}) => {
  return [`followers`, `following`].includes(statName) ? <Link {...{
      to: `${ match.url[match.url.length - 1] === `/` ? match.url : `${match.url}/` }${statName}`,
      className: `float-right`
    }}>
      {stats[statName].value}
    </Link> : <span className={`float-right`}>{stats[statName].value}</span>
}

const Stats = ({stats, match}) => <ListGroup {...{
  flush: true,
  className: `stats`
}}>
  {
    stats ? Object.keys(stats).map(
      (statName, i) => <ListGroupItem {...{
        key: i,
        className: `stat ${statName}`
      }}>
        <FontAwesomeIcon {...{
          icon:stats[statName].iconName,
          className:`mr-2 fa-fw`
        }}/>
        <span className={`text-capitalize`}>{statName}</span>
        <StatValue {...{stats, statName, match}} />
      </ListGroupItem>
    ) : null
  }
  </ListGroup>


export default Stats