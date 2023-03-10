import './App.css'
import Login from './components/login'
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.value)

  return (
    <div className="App">
      Authentication Project with redux toolkit
    <Login/>
    {user.isLogin && <p>Welcome {user.username}</p>  }
    </div>
  )
}

export default App
