import React, {useState, useEffect} from "react"
import axios from "axios"
import "./style.css"

import TopPart from "./components/TopPart/topPart"
import Table from "./components/Table/table"

import SelectedContext from "./context/selectedContext"
import UsersContext from "./context/usersContext"

const App = () => {

  const [countSelected, setCountSelected] = useState(0)

  const [Users, setUsers] = useState([])

  useEffect(()=>{
      axios.get("https://ilias.users.challenge.dev.monospacelabs.com/users")
    .then(res => {
      const users = res.data
      setUsers(users)    
    })
  }, [])

  return (
  <SelectedContext.Provider value={[countSelected, setCountSelected]}>
    <UsersContext.Provider value={[Users, setUsers]}>
      <div className="main-container">
        <TopPart />
        <Table />
      </div>
    </UsersContext.Provider>
  </SelectedContext.Provider>
  )
}
 export default App