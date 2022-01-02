import React, {useContext} from "react"
import Row from "./row"
import "./table.css"

import SelectedContext from "../../context/selectedContext"
import UsersContext from "../../context/usersContext"

const Table = () => {

  const [countSelected, setCountSelected] = useContext(SelectedContext)
  const [Users, setUsers] = useContext(UsersContext)

  const toggleMainCheckbox = (e) => {
    const checkboxes = document.getElementsByClassName("checkbox")
    const checkboxesArray = Array.from(checkboxes)
    let totalSelected;
 
    if(e.target.checked){
      checkboxesArray.forEach(x => {      
        x.checked = true
      })

      totalSelected = checkboxesArray.length
  
    }else{
      checkboxesArray.forEach(x => {      
        x.checked = false
      })

      totalSelected = 0
    }

    setCountSelected(totalSelected)
  }

  return (
    <div className="table-container">
      <div className="main-row-container">
        <div className="main-row row">
          <input type="checkbox" className="main-row-item checkbox-select" onChange={toggleMainCheckbox} />
          <div className="type main-row-item">TYPE</div>
          <div className="name main-row-item">NAME</div>
          <div className="email main-row-item">EMAIL</div>
          <div className="telephone main-row-item">TELEPHONE</div>
          <div className="status main-row-item">STATUS</div>
        </div>
      </div>
      {Users.map(x => {
         return <Row
          key = {x.id}
          type={x.type}
          name={x.name}
          email={x.email}
          telephone={x.phone}
          status={x.active}
          id={x.id}
        />
      })}
    </div>
  )
}

export default Table
