import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './modal.scss'
import { createPortal } from 'react-dom'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({ onCloseModal }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onCloseModal()
    }
  }

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModal()
    }
  }

  return createPortal(
    <div onClick={handleBackdropClick} className="Overlay">
      <div className="Modal">
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    </div>,
    modalRoot
  )
}

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
}
