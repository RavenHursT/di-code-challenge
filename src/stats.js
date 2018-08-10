import React from 'react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './stats.scss'

const Stats = ({stats}) => {
  console.log({stats})
  return <ListGroup {...{
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
          <span className={`float-right`}>{stats[statName].value}</span>
        </ListGroupItem>
      ) : null
    }
  </ListGroup>
}

export default Stats