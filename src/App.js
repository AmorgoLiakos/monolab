import React, {useState} from "react"
import "./style.css"

import TopPart from "./components/TopPart/topPart"
import Table from "./components/Table/table"

import SelectedContext from "./context/selectedContext"

const App = () => {

  const [countSelected, setCountSelected] = useState(0)

  return (
  <SelectedContext.Provider value={[countSelected, setCountSelected]}>
    <div className="main-container">
      <TopPart />
      <Table />
    </div>
  </SelectedContext.Provider>
  )
}
 export default App