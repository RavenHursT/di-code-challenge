import React from 'react'
import {
  Button
} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './social-buttons.scss'

const getSocialIcon = socialLink => {
  let iconName = socialLink.url.includes(`facebook`) ?
    `facebook` : socialLink.url.includes(`instagram`) ?
      `instagram` : socialLink.url.includes(`linkedin`) ?
        `linkedin` : socialLink.url.includes(`twitter`) ?
          `twitter` : null
  console.log({iconName})
  return iconName ? <FontAwesomeIcon {...{
    className: `mr-1`,
    icon: [`fab`, iconName]
  }} /> : null
}

export default ({socialLinks}) => <div className={`social-buttons mb-3`}>
  {
    socialLinks.map(
      (socialLink, i) => <a {...{
        className: `social-button`,
        key: i,
        href: socialLink.url,
        target: `_blank`
      }}><Button {...{
        outline: true,
        className: `mr-2`
      }}>
        {getSocialIcon(socialLink)}{socialLink.service_name}
      </Button></a>
    )
  }
</div>