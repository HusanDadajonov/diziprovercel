import { AuthProvider, ProtectRoute } from '../layout/auth'
import '../styles/main.scss'
 import React, { useEffect, useState } from 'react'
import {darkTheme,lightTheme,GlobalStyles} from "../styles/Theme"
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '../Store/store'
import ThemeProviderWrapper from '../styles/ThemeProvider'
import styled from 'styled-components'

const StyledApp = styled.div`
`

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeProviderWrapper >
          <ProtectRoute>
            <StyledApp>
              <Component {...pageProps}></Component>
            </StyledApp>
          </ProtectRoute>
        </ThemeProviderWrapper>
      </AuthProvider>
    </Provider>
  )
}
export default MyApp  