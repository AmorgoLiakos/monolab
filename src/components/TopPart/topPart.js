import React, { useContext} from "react"
import SelectedContext from "../../context/selectedContext"
import "./topPart.css"

const TopPart = () => {

  const [countSelected] = useContext(SelectedContext)

  return (
    <div className="top-part-container">
      <div className="users-container">
        <img
          src="images/usersPic.png"
          alt="users-icon"
          className="user-image"
        />
        <div className="user-title">Users</div>
      </div>
      <div className="selected-info-container">
        <div className="selected-number">{ countSelected + " selected"} </div>
        <img
          src="images/Questionmark.svg"
          alt="quenstionmark-icon"
          className="quenstionmark"
        />
      </div>
    </div>
  )
}

export default TopPart
