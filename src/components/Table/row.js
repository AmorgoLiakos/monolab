import React, {useContext} from "react"
import SelectedContext from "../../context/selectedContext"

const Row = ({ type, name, email, telephone, status }) => {

  const [countSelected, setCountSelected] = useContext(SelectedContext)

  const updateSelected = () => {
    const checkboxes = document.getElementsByClassName("checkbox")
    const checkboxesArray = Array.from(checkboxes)
    let count = 0

    checkboxesArray.forEach(x => {      
      if(x.checked){
        count += 1
      }
    }) 
    
    setCountSelected(count) 
  }

  return (
    <div className="row-container">
      <div className="row">
        <input type="checkbox" className="row-item checkbox-select checkbox" onChange = {updateSelected} />
        <div className={"type row-item " + type.toLowerCase()}>{type}</div>
        <div className="name row-item">{name}</div>
        <div className="email row-item">{email}</div>
        <div className="telephone row-item">{telephone}</div>
        <div className="status row-item">
          {status === false ? (
            <input type="checkbox" />
          ) : (
            <input type="checkbox" defaultChecked />
          )}
        </div>
      </div>
    </div>
  )
}

export default Row
