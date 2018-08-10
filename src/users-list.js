import React from 'react'
import {
  ListGroup,
  ListGroupItem,
  Media,
  Col
} from 'reactstrap'

const UserExtLink = ({href, children}) => <a {...{
  href,
  target: `_blank`
}}>
  {children}
</a>

const UserList = ({users}) => users && users.length ? <ListGroup>
  {
    users.map(
      ({url: href, largestImg: src, fullName}, key) => <ListGroupItem {...{key}}>
        <Media className={`col-12`}>
          <Col xs={3}>
            <Media {...{
              left:true
            }}>
              <UserExtLink {...{
                href
              }}>
                <img {...{
                  src,
                  alt: fullName
                }} />
              </UserExtLink>
            </Media>
          </Col>
          <Col xs={9}>
            <Media body>
              <Media {...{heading: true, href}} >
                <UserExtLink {...{href}}>
                  {fullName}
                 </UserExtLink>
              </Media>
            </Media>
          </Col>
        </Media>
      </ListGroupItem>
    )
  }
</ListGroup> : null


export default UserList