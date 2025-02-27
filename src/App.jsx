import UserContextProvider from '../src/context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h1>Hello! This is Context API Example.</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
