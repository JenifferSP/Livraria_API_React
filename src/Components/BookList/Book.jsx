import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AiFillStar, AiOutlineAim, AiOutlineStar} from "react-icons/ai"
import "./BookList.css";


const Book = (book) => {
    const [numberStars, setNumberStars] = useState(0)
    const [numberRead, setnumberRead] = useState(1);
    const [numberFav, setnumberFav] = useState(1);
    const changeNumber = () =>{
    setnumberRead((prevNumberRead) => prevNumberRead + 1);
}
    const changeNumberFav = () =>{
    setnumberFav((prevNumberFav) => prevNumberFav + 1);
}

  return (


    <div className="main"> 
   
    <div className='book-item flex flex-column flex-sb'>    
      <div className='book-item-img'>

      <button onClick={changeNumber} className='btn-BookRead' >Lido</button>
      <button onClick={changeNumberFav} className='btn-favoriteBook'>Favoritar</button>

        <img src = {book.cover_img} alt = "cover" />
        <div className="stars">
            {Array(5).fill().map((_,index) => numberStars >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars(index+1)}/>
            ))}
        </div>
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Book