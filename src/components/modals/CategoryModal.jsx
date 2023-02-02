import React from 'react'

import './CategoryModal.css'
import cross from '../../assets/xmark-solid.svg'

export const CategoryModal = ({
  onCloseCategory,
  typesOfCategories,
  fetchByCategory,
}) => {
  const onContainerClick = (event) => {
    event.stopPropagation()
  }
  return (
    <div className="modal_overlay" onClick={onCloseCategory}>
      <div className="category_modal_container" onClick={onContainerClick}>
        <div className="category_modal_nav_view">
          <img src={cross} alt="" onClick={onCloseCategory} />
        </div>
        <label style={{ textAlign: 'center', marginBottom: '30px' }}>
          Choose category
        </label>
        <div className="modal_body">
          <div className="category_buttons">
            {typesOfCategories.map((item, index) => (
              <button onClick={() => fetchByCategory(item)} key={index}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
