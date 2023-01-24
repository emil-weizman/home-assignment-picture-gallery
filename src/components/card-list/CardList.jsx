import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CardsThunks } from '../../store/cards/cards-thunks'
import { selectAllCards } from '../../store/cards/cards-slice'

import './CardList.css'
import { CategoryModal } from '../modal/CategoryModal'

export const CardList = () => {
  const [categoryName, setCategoryName] = useState('')
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  const allCards = useSelector(selectAllCards)

  const typesOfCategories = [
    'backgrounds',
    'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
    'sport',
  ]

  const fetchByCategory = (data) => {
    setCategoryName(data)
    dispatch(CardsThunks.getAllCards(data))
  }

  const onModal = () => {
    setShowModal(true)
  }

  const onClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={onModal}>click</button>
      <h2>{categoryName}</h2>
      <div className="container">
        {allCards.map((item) => (
          <img key={item.id} className="box" src={item.largeImageURL} alt="" />
        ))}
      </div>

      {showModal && (
        <CategoryModal
          onClose={onClose}
          typesOfCategories={typesOfCategories}
          fetchByCategory={fetchByCategory}
        />
      )}
    </>
  )
}
