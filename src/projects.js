import React from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Col,
  Row
} from 'reactstrap'
import {getLargestImage} from './util/users.util'

const ProjectLink = ({project, children}) => <a {...{
  href: project.url,
  target: `_blank`
}}>{children}</a>

export default ({projects}) => <Container><Row>
  {
    projects && projects.length ? projects.map(
      (project, i) => <Col {...{
        key: i,
        xs: 3,
        className: `mb-3`
      }}><Card>
        <ProjectLink {...{project}}>
          <CardImg {...{
            top: true,
            width: `100%`,
            src: getLargestImage(project.covers),
            alt: "Project",
            href: project.url
          }} />
        </ProjectLink>
        <CardBody>
          <CardTitle className={`mb-3`}><a {...{
            href: project.url,
            target: `_blank`
          }}>{project.name}</a></CardTitle>
          {
            project.fields && project.fields.length ?
              <CardSubtitle>{
                project.fields.join(`, `)
              }</CardSubtitle> : null
          }
        </CardBody>
      </Card></Col>
    ) : null
  }
</Row></Container>