import React from 'react'
import NavBar from '../NavBar/NavBar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css"

const Header = () => {
    return(
        <div className="holder">
            <header className="header">
                    <NavBar/>
                    <div className="header-content flex flex-x text-center text-white">
                    <h2 className="header-title text-capitalize">Encontre o livro que procura!</h2><br />
                    <p className="header-text fs-18 fw-3">
                        Pensou, pesquisou, achou! Confira nossos catalogos</p>     
                    <SearchForm/>         
                    </div>   
             
            </header>
        </div>
    )
}


export default Header