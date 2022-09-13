import React, {useState}  from 'react';
import '../scss/slider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
function Slider() {
  const [contatore, setContatore] = useState(0);
  let immaginiSlider= [
    "https://img.redbull.com/images/c_crop,w_1999,h_1333,x_1,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/11/10/9dad23f6-2e82-45d8-a39c-232a7d2e611f/league-of-legends-world-championship-2019-finals-crowd",
    "https://esports.gazzetta.it/wp-content/uploads/2020/05/23/22/lol_worldchampionship.jpg",
    "https://atletanews.sport/wp-content/uploads/2020/10/engineeringesports_1.jpg",
    "https://www.powned.it/wp-content/uploads/2019/12/mondiale-lol.jpg",
    "https://i.ytimg.com/vi/mP3fGkpmVM0/maxresdefault.jpg"
  ];

  const indietro = ()=>{
    if(contatore - 1 < 0){
      setContatore(4);
      console.log(contatore);
    }else{
      setContatore((oldValue) => oldValue - 1);
      console.log(contatore);
    }
   
  }

  const avanti = ()=>{
    if(contatore + 1 > immaginiSlider.length - 1){
      setContatore(0);
      console.log(contatore);
    }else{
      
      setContatore((oldValue) => oldValue + 1);
      console.log(contatore);
    }
 
  }
  
  return (
    <div className='slider'>
      <button className="button-slider">
        <FontAwesomeIcon onClick={indietro} icon={faChevronLeft} />

      </button>
    
      <div className='div-img'>
        <img src={immaginiSlider[contatore]} alt="slider"/>
        <div className="change-image-container">
          {immaginiSlider.map((_,index)=>{
            return <div key={index} onClick={()=>setContatore(index)} className={`${contatore === index ? 'active' : 'no-active'} change-image`}></div>
          })}
        </div>
      </div>
      
      <button className="button-slider">
        <FontAwesomeIcon onClick={avanti} icon={faChevronRight} />

      </button>
      
  

    </div>
  )
}

export default Slider