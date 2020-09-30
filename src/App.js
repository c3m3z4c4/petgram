import React from 'react'

import { ListOfCategories } from './Components/ListOfCategories'
import { GlobalStyle } from './Styles/GlobalStyle'
import { ListOfPhotoCards } from './Components/ListOfPhotoCards'
import { Logo } from './Components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)
