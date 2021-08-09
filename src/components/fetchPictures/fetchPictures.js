import React from 'react'

export default function fetchPictures({
  picturesName = '',
  page = 1,
  PER_PAGE = 12,
  KEYS = '22042879-adb59bab87f7729a85f6313d3',
} = {}) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${picturesName}&page=${page}&per_page=${PER_PAGE}&key=${KEYS}`
  ).then((response) => {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(new Error(`произошла ошибка`))
  })
}
