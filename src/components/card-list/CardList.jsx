import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CardsThunks } from '../../store/cards/cards-thunks'
import { selectAllCards } from '../../store/cards/cards-slice'
import { CategoryModal } from '../modals/CategoryModal'

import './CardList.css'
import { CardViewModal } from '../modals/CardViewModal'

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

const randomIndex = Math.floor(Math.random() * typesOfCategories.length)
const randomCategoryName = typesOfCategories[randomIndex]

export const CardList = () => {
  const dispatch = useDispatch()

  const [categoryName, setCategoryName] = useState('')
  const [pageNumber, setNumberPage] = useState(1)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const allCards = useSelector(selectAllCards)

  const [selectedCard, setSelectedCard] = useState(null)
  const [showCardView, setShowCardView] = useState(false)

  const justOneCall = useCallback(() => {
    dispatch(
      CardsThunks.paginationPage({
        category: randomCategoryName,
        page: 1,
      })
    )
  }, [dispatch])

  useEffect(() => {
    justOneCall()
  }, [justOneCall])

  const getArtsByPage = (pageNumber) => {
    let currentCategory = ''
    if (!categoryName) {
      currentCategory = randomCategoryName
    } else {
      currentCategory = categoryName
    }

    dispatch(
      CardsThunks.paginationPage({
        category: currentCategory,
        page: pageNumber,
      })
    )
  }

  const fetchByCategory = (data) => {
    setCategoryName(data)
    dispatch(CardsThunks.getAllCards(data))
    setShowCategoryModal(false)
  }

  const onModal = () => {
    setShowCategoryModal(true)
  }

  const onCloseCategory = () => {
    setShowCategoryModal(false)
  }

  const onCloseView = () => {
    setShowCardView(false)
  }

  const nextPage = () => {
    const nextPageNumber = pageNumber + 1
    setNumberPage(nextPageNumber)
    getArtsByPage(nextPageNumber)
  }

  const prevPage = () => {
    const prevPageNumber = pageNumber - 1

    if (pageNumber === 1) return

    setNumberPage(prevPageNumber)
    getArtsByPage(prevPageNumber)
  }

  const onSelectedCardView = (card) => {
    setShowCardView((prev) => !prev)

    setSelectedCard(card)
  }

  return (
    <>
      <div className="card_list_page">
        <div className="card_list_button_box">
          <button onClick={prevPage}>Prev</button>
          <button onClick={onModal}>Choose category</button>
          <button onClick={nextPage}>Next</button>
        </div>

        <div className="cards_container">
          {allCards.map((item) => (
            <img
              key={item.id}
              className="card_box"
              src={item.largeImageURL}
              alt=""
              onClick={() => onSelectedCardView(item)}
            />
          ))}
        </div>
        <span className="category_name">
          #{categoryName ? categoryName : randomCategoryName}
        </span>
      </div>
      {showCardView && (
        <CardViewModal selectedCard={selectedCard} onCloseView={onCloseView} />
      )}

      {showCategoryModal && (
        <CategoryModal
          onCloseCategory={onCloseCategory}
          typesOfCategories={typesOfCategories}
          fetchByCategory={fetchByCategory}
        />
      )}
    </>
  )
}
