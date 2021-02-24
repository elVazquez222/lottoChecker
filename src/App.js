import React, {useState} from 'react';
import './App.css';

function App() {

  const [lottoziehungInput, setLottoziehungInput] =   useState([])
  const [lottoziehung, setLottoziehung]           =   useState([])
  const a = [ // 6 aus 49
              [1,2,5,11,19,36],
              [5,6,33,39,44,45],
              [23,24,28,34,35,36],
              [3,4,6,11,12,36],
              [10,11,17,34,41,48],
              [20,31,33,37,38,45],
              [10,11,13,19,27,28],
              [10,16,17,18,23,24],
              [6,12,18,23,25,31],
              [2,5,8,16,27,32],
              [23,26,27,34,48,49],
              [15,20,22,23,30,38],
            ]
  

  function handleChangeInput(e){
    	setLottoziehungInput(e.target.value)
  }
  function handleSubmit(event){

    let zahl = Number(event.target[0].value)
    event.preventDefault()

    setLottoziehung(prev => [...prev, zahl])
    setLottoziehungInput("")
  }

  return (

    <div className="App">
      
      <header className="App-header">
        <form onSubmit={event => handleSubmit(event)} >
          <input  type="text" placehoder="?" 
                  value={lottoziehungInput} 
                  onChange={handleChangeInput} 
                  />
        </form>
      </header>
      
      <div className="ziehung">
         {
          lottoziehung.map(zahl =>{

            return(
              <span key={zahl} className="gezogen" >{zahl}</span>
            )
          })
        }
      </div>

      <div className="lottoschein">

        {
          a.map(reihe =>{
            return(
              <div style={{display:"flex", justifyContent: "center"}}> 
              <div className="zahlenreihe">{
              reihe.map(zahl =>{
                let treffer = lottoziehung.includes(zahl)  // true/false
                return(
                  <span key={zahl} className={treffer ? "zahl treffer" : "zahl"} >{zahl}</span>
                )
              })}
              </div><br/></div>
            )
          })
          
          
        }
      </div>

    </div>
  );
}

export default App;
