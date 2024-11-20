import React from 'react'
import '../src/App.css'
import like from './assets/heart.png'
import data from './assets/data/movies.json'
 function App(props) {
  const data = props
  console.log(data);
  
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
            <div className="like">
              <a href="#"><img src={like} alt="" className="like" /></a>
            </div>
          </div>

          <div className="hero">
           <div>
            {
              data.length > 0 && data.map((element)=>{
                <div className="cards">
                  <div className="img">
                    <img src={element.Images} alt="" />
                  </div>
                  <h4>{element.Title}</h4>
                  <p>{element.Plot}</p>
                  <div className="year">
                    <span> <h4>Yil: <br /> {element.Year}</h4></span>
                    <span> <h4>Reyting: <br /> {element.Rated}</h4></span>
                  </div>
                  <div className="sana">
                    <span> <h4>Chiqarilgan sana: <br /> {element.Released}</h4></span>
                    <span> <h4>Davomiiyligi: <br /> {element.Runtime}</h4></span>
                  </div>
                  <div className="yozuvchi">
                    <span> <h4>Yozuvchi: <br /> {element.Director}</h4></span>
                    <span> <h4>Aktyorlar: <br /> {element.Actors}</h4></span>
                  </div>
                  <div className="til">
                    <span> <h4>Til: <br /> {element.Language}</h4></span>
                    <span> <h4>Mamlakat: <br /> {element.Country}</h4></span>
                  </div>
                  <div className="imd">
                    <span> <h4>Mukofontlar: <br /> {element.Awards}</h4></span>
                    <span> <h4>Mamlakat: <br /> {element.imdbRating}</h4></span>
                  </div>

                  
                </div>
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
