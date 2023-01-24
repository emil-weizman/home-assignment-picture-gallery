import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CardsThunks } from '../../store/cards/cards-thunks'

import './CategoryModal.css'

export const CategoryModal = ({
  onClose,
  typesOfCategories,
  fetchByCategory,
}) => {
  const dispatch = useDispatch()

  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_container">
        <div className="modal_nav">
          <button onClick={onClose}>x</button>
        </div>
        <div className="modal_body">
          <div className="box_of_buttons">
            {typesOfCategories.map((item, index) => (
              <button onClick={() => fetchByCategory(item)} key={index}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="modal_footer">
          <button
            onClick={() => {
              console.log('cancel')
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  )
}
