import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './imageGallary.scss'
import ImageGalleryItem from '../imageGalleryItem/imageGalleryItem'
import Loader from '../loader/loader'
import Button from '../button/button'
import Modal from '../modal/modal'
import fetchPictures from '../fetchPictures/fetchPictures'

const PER_PAGE = 12
const KEYS = '22042879-adb59bab87f7729a85f6313d3'

export default function ImageGallery({ picturesName }) {
  const [status, setStatus] = useState('idle')
  const [showModal, setShowModal] = useState(false)
  const [pictures, setPictures] = useState([])
  const [currentImage, setCurrentImage] = useState({})
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState('')

  useEffect(() => {
    picturesName && handleFetchPictures(1)
  }, [picturesName])

  
  useEffect(() => {
    status === 'resolved' &&
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }, [status])
  
  const handleFetchPictures = (page) => {
    setStatus('pending')
    fetchPictures({ picturesName: picturesName, KEYS, PER_PAGE, page })
      .then(({ totalHits, hits }) => {
        if (totalHits === 0) {
          return Promise.reject(
            new Error(`нет изображения с именем ${picturesName}`)
          )
        }

        setPictures(() => (page === 1 ? hits : [...pictures, ...hits]))
        setStatus('resolved')
        setTotalPages(Math.ceil(totalHits / PER_PAGE))
        setCurrentPage(page)
      })
      .catch((error) => {
        setError(error)
        setStatus('rejected')
      })
  }
  
  const handlLoadMore = () => {
    handleFetchPictures(currentPage + 1)
  }

  const openModal = (src, alt) => {
    setShowModal(true)
    setCurrentImage({ src, alt })
  }

  const closeModal = () => {
    setShowModal(false)
  }

  if (status === 'idle') {
    return <div>Введите название изображения</div>
  }

  if (status === 'rejected') {
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      <ul className="ImageGallery">
        <ImageGalleryItem pictures={pictures} click={openModal} />
      </ul>
      {status === 'pending' ? (
        <Loader />
      ) : (
        currentPage < totalPages && <Button click={handlLoadMore} />
      )}
      {showModal && <Modal onCloseModal={closeModal} {...currentImage} />}
    </div>
  )
}

ImageGallery.propTypes = {
  picturesName: PropTypes.string,
}
