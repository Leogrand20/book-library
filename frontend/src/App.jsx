import { Header } from './layouts/Header'
import { Main } from './layouts/Main'
import { Error } from './components/Error/Error'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Error />
    </div>
  )
}
