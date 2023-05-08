import React from 'react'
import LoaderImg from "../../Imagens/loader.gif"
import "./Loader.css"

const Loader = () => {
  return (
    <div className='Loader flex flex-c'>
          <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader