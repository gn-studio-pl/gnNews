import { Provider } from 'react-redux'
import { store } from 'store/store'
import HomePage from 'pages/HomePage'

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}

export default App
