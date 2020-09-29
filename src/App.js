import React from 'react'

import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './GlobalStyle'
import { ListOfPhotoCards } from './Components/ListOfPhotoCards'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />

  </div>
)
