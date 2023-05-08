
import React, { useState } from 'react';
import "./MyShelf.css"
import img1 from '../../Imagens/img/livro-1.jpg'
import img2 from '../../Imagens/img/livro_2.png'
import img3 from '../../Imagens/img/livro_3.png'
import img4 from '../../Imagens/img/livro_4.png'
import img5 from '../../Imagens/img/livro_5.png'
import img6 from '../../Imagens/img/livro_6.png'
import img7 from '../../Imagens/img/livro_7.png'
import img8 from '../../Imagens/img/livro_8.png'
import img9 from '../../Imagens/img/livro_9.png'
import img10 from '../../Imagens/img/livro_10.png'

import {AiFillStar, AiOutlineAim, AiOutlineStar} from "react-icons/ai"


function MyShelf() {
  const [numberStars, setNumberStars] = useState(0)
  const [numberStars_1, setNumberStars_1] = useState(0)
  const [numberStars_2, setNumberStars_2] = useState(0)
  const [numberStars_3, setNumberStars_3] = useState(0)
  const [numberStars_4, setNumberStars_4] = useState(0)
  const [numberStars_5, setNumberStars_5] = useState(0)
  const [numberStars_6, setNumberStars_6] = useState(0)
  const [numberStars_7, setNumberStars_7] = useState(0)

  return (
   
    <div className='mainMyShelf'>
        <div className='title-MyShelf'><h1>Minhas Estante:</h1></div>
    <div className='MyShelf-main'>
       <div className='content-MyShelf'>
        <div className='imgMyShelf'>
          <img src={img1} alt="img" srcset="" />
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
        <div className='imgMyShelf'>
          <img src={img2} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_1 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_1(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_1(index+1)}/>
            ))}
        </div>
        </div>
        <div className='imgMyShelf'>
          <img src={img3} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_2 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_2(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_2(index+1)}/>
            ))}
        </div>
        </div>
        <div className='imgMyShelf'>
          <img src={img4} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_3 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_3(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_3(index+1)}/>
            ))}
        </div>
        </div>
        <div className='imgMyShelf'>
          <img src={img5} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_4 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_4(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_4(index+1)}/>
            ))}
        </div>
        </div>
        <div className='imgMyShelf'>
          <img src={img6} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_5 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_5(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_5(index+1)}/>
            ))}
        </div>
        </div>
        <div className='imgMyShelf'>
          <img src={img7} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_6 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_6(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_6(index+1)}/>
            ))}
        </div>
        </div>
        <div className='imgMyShelf'>
          <img src={img10} alt="img" srcset="" />
          <div className="stars">
            {Array(5).fill().map((_,index) => numberStars_7 >= index + 1 ?(               
                <AiFillStar style={{color: 'orange'}}
                onClick={() => setNumberStars_7(index+1)}/>
            ) : (
                <AiOutlineStar style={{color: 'orange'}}
                onClick={() => setNumberStars_7(index+1)}/>
            ))}
        </div>
        </div>
      </div> 
    </div>

    <div className='rating-book'>
      <div className='rating-content'>

        <div className='content-box-rating'>
          <div className='rating-book-container'> 
          <div>
            <h5 className='titleRating'>Territorio Lovecraft</h5>         
            <img src={img9} alt="" srcset="" />
            <div className="starsRating">
              {Array(5).fill().map((_,index) => (
                <AiFillStar style={{color: 'orange'}}/>
              ))}
            </div>
            </div>  
            <p className='text-rating'>Sua mistura de contos, enquanto faz grandes criticas ao racismo de Lovercraft durante a emacipação racial, o torna memoravel</p>
          </div>
        </div>

        <div className='content-box-rating'>
          
          <div className='rating-book-container'>
            <div>
            <h5 className='titleRating'>O retrato de Dorian Gray</h5>         
            <img src={img8} alt="" srcset="" />
            <div className="starsRating">
              {Array(5).fill().map((_,index) => (
                <AiFillStar style={{color: 'orange'}}/>
              ))}
            </div>           
            </div>  
            <p className='text-rating'>Livro incrivel, Wilde soube escrever uma drama que deixa o leitor pensativo e reflexivel em questões como juventude, ganancia e pecado</p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default MyShelf