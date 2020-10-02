/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react'

import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyle.js'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './Components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={3} />
          </Fragment>
      }

    </div>
  )
}
