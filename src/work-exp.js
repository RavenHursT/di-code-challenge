import React from 'react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'

const WorkExp = ({workExp}) => workExp && workExp.length ? <ListGroup {...{
  flush: true,
  className: `work-exp mt-4`
}} >
  <header>Work Experience</header>
  {
    workExp.map(
      (exp, i) => <ListGroupItem key={i}>
        <header className={`org`}>{exp.organization}</header>
        <footer className="blockquote-footer">{exp.position} - {exp.location}</footer>
      </ListGroupItem>
    )
  }
</ListGroup> : null

export default WorkExp