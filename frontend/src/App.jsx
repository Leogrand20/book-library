import { useSelector } from 'react-redux'

import { Header } from './layouts/Header'
import { Main } from './layouts/Main'
import { Error } from './components/Error/Error'
import { selectError } from './redux/slices/errorSlice'

import './App.css'

export const App = () => {
  const errorMessage = useSelector(selectError)

  return (
    <div className="app">
      <Header />
      <Main />

      {/* {errorMessage && <Error />} */}
      <Error />
    </div>
  )
}
