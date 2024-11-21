import React, { useState } from 'react'
import '../src/App.css'
import like from './assets/heart.png'
import movies from './assets/data/movies.json'
function App() {
  const data = movies
  const [couneter , SetCounter] =useState(0)
  
  function hedeleClick(e){
    e.preventDefault();
    SetCounter (couneter + 1)
  }
  return (
    <div>
      <div className="kino">
        <div className="conteiner">
          <div className="header">
            <div className="logo">
              <h3>Kino Ro`yxati</h3>
            </div>
            <div className="nav">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="#">Bosh sahifa</a>
                  <a href="#">Kinolar</a>
                  <a href="#">Yangliklar</a>
                </li>
              </ul>
            </div>
            <div>
              <h2>{couneter} likes</h2>
            </div>
          </div>

          <div>
            <div id='hero'>
              {
                data.length > 0 && data.map((element) => {
                  console.log(element);

                  return (
                    <div className="card-conteiner">
                    <div key={element.id} className="card1">
                      <img src={element.Images} alt="" />
                      <h2 className="title">{element.Title}</h2>
                      <p className="plot">{element.Plot}</p>
                      <div className="info">
                        <div className="column">
                          <h5>Yil: {element.Year}</h5>
                          <h5>Chiqirilgan sana: {element.Released}</h5>
                          <h5>Janr: {element.Genre}</h5>
                          <h5>Yozuvchi: {element.Writer}</h5>
                          <h5>Til: {element.Language}</h5>
                          <h5>Mukofotlar: {element.Awards}</h5>
                        </div>
                        <div className="column">
                          <h5>Reyting: {element.Rated}</h5>
                          <h5>Davomiyligi: {element.Runtime}</h5>
                          <h5>Rejissor: {element.Director}</h5>
                          <h5>Aktyorlar: {element.Actors}</h5>
                          <h5>Mamlakat: {element.Country}</h5>
                          <h5>IMDB reytingi: {element.imdbRating}</h5>
                      <button className='like-button' onClick={hedeleClick}>Like !!!</button>
                        </div>
                      </div>
                    </div>
                    </div>
                  )
                })
              }

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
export default App;
