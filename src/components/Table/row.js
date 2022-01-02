import React, {useContext} from "react"
import axios from "axios"
import SelectedContext from "../../context/selectedContext"
import UsersContext from "../../context/usersContext"

const Row = ({ type, name, email, telephone, status, id }) => {

  const [countSelected, setCountSelected] = useContext(SelectedContext)
  const [Users, setUsers] = useContext(UsersContext)

  const typeShort = {
    Guest: "GU",
    Stakeholder: "ST",
    Employee: "EM",

  }

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

  const toggleStatus = () => {

    let userToChangeStatus = {...Users.filter(x => x.id == id)}
    let url = "https://ilias.users.challenge.dev.monospacelabs.com/users/" + id
    
    if(userToChangeStatus[0].active){
      axios.put(url, {
        "active": false
      }
      )
    }else{
      axios.put(url, {
        "active": true
      })
    }

  }

  return (
    <div className="row-container">
      <div className="row">
        <input type="checkbox" className="row-item checkbox-select checkbox" onChange = {updateSelected} />
        <div className={"type row-item " + type.toLowerCase()}>{typeShort[type]}</div>
        <div className="name row-item">{name}</div>
        <div className="email row-item">{email}</div>
        <div className="telephone row-item">{telephone}</div>
        <div className="status row-item">
          {status === false ? (
            <input type="checkbox" onChange={toggleStatus} />
          ) : (
            <input type="checkbox" defaultChecked onChange={toggleStatus} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Row
