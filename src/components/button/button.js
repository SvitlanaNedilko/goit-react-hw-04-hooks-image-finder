import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

export default function Button({ click }) {
  return (
    <button type="button" onClick={click} className="Button">
      Load more
    </button>
  )
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
}
