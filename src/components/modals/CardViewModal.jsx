import React from 'react'

import './CardViewModal.css'
import reserveAvatar from '../../assets/userAvatar.svg'
import cross from '../../assets/xmark-solid.svg'

export const CardViewModal = ({ selectedCard, onCloseView }) => {
  const {
    tags,
    type,
    likes,
    views,
    downloads,
    collections,
    userImageURL,
    user,
  } = selectedCard

  const tagsSeparate = tags.trim().split(',')

  console.log(selectedCard)

  const onContainerClick = (event) => {
    event.stopPropagation()
  }

  return (
    <div className="card_view_modal_overlay" onClick={onCloseView}>
      <div className="card_view_modal_container" onClick={onContainerClick}>
        <div className="card_view_modal_nav_view">
          <img src={cross} alt="" onClick={onCloseView} />
        </div>
        <div className="card_view_modal_body">
          <div className="left_box">
            <div className="image_container">
              <img src={selectedCard.largeImageURL} alt="" />
            </div>
            <div>
              <div className="tags_box">
                {tagsSeparate.map((tag, index) => (
                  <span className="tag_name" key={index}>
                    #{tag.trim()}{' '}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="user_box">
              {userImageURL.length > 0 ? (
                <img className="user_avatar" src={userImageURL} alt="" />
              ) : (
                <img className="reserve_avatar" src={reserveAvatar} alt="" />
              )}
              <span className="user_name">{user}</span>
            </div>

            <div className="info_box">
              <div>
                <span>Type</span>
                <span>
                  <b>{type}</b>
                </span>
              </div>
              <div>
                <span>Likes</span>
                <span>
                  <b>{likes}</b>
                </span>
              </div>

              <div>
                <span>Views</span>
                <span>
                  <b>{views}</b>
                </span>
              </div>
              <div>
                <span>Downloads</span>
                <span>
                  <b>{downloads}</b>
                </span>
              </div>
              <div>
                <span>Collections</span>
                <span>
                  <b>{collections}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
