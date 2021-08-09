import React from 'react'
import PropTypes from 'prop-types'
import './imageGalleryItem.scss'

export default function ImageGalleryItem({ pictures, click }) {
  return pictures.map(({ id, tags, webformatURL }) => (
    <li key={id} className="ImageGalleryItem">
      <img
        onClick={() => click(webformatURL, tags)}
        src={webformatURL}
        width="800"
        height="600"
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  ))
}

ImageGalleryItem.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
  click: PropTypes.func.isRequired,
}
