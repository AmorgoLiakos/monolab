import React, {useContext} from "react"
import Row from "./row"
import "./table.css"

import SelectedContext from "../../context/selectedContext"

const Users = [
  {
    id: "1",
    type: "CO",
    name: "Jean Richarson",
    email: "jblack@plambee.mil",
    telephone: "2-(373)278-1237",
    active: true
  },
  {
    id: 2,
    type: "CR",
    name: "Brian Lucas",
    email: "jrose@thoughtstorm.mil",
    telephone: "4-(844)505-5484",
    active: false
  },
  {
    id: 3,
    type: "SU",
    name: "Janet Flower",
    email: "marnold@edgeclub.mil",
    telephone: "5-(729)277-3698",
    active: true
  }
]

const Table = () => {

  const [countSelected, setCountSelected] = useContext(SelectedContext)

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
          telephone={x.telephone}
          status={x.active}
        />
      })}
    </div>
  )
}

export default Table
