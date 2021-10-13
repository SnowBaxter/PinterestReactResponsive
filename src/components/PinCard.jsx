import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';



const PinCard = (props) => {
  const [Hover, setHover]=useState(false);
  return (
    <div
      onMouseEnter={()=> setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      {Hover && <div className='app'>
        <button style={{..._stylesPinCard.button1}}>Guardar</button>
        <FontAwesomeIcon icon={faChevronCircleUp} style={{..._stylesPinCard.icon, ..._stylesPinCard[props.long], ..._stylesPinCard.Sicon}}/>
        <FontAwesomeIcon icon={faEllipsisH} style={{..._stylesPinCard.icon, ..._stylesPinCard[props.long], ..._stylesPinCard.EllIcon}}/>
      </div>

      }
     <img className={`${Hover ? "imagenHover":""}`} src={props.image} alt='Fail to load' style={{..._stylesPinCard.pin_card.image, width:'100%', height:'100%', borderRadius:'16px'}}/>
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    cursor: 'crosshair',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },


    small_icons:{
      marginTop:'160px',
    
    },
    medium_icons:{
      marginTop:'230px',
     
    },
    large_icons:{
      marginTop:'340px',  
      
    },

   
    icon:{
      display:'flex',
      height:'30px',
      width:'30px',
      position:'absolute',
      cursor:'pointer',
      color:'white',
      borderRadius:'40px',
       
    },

    Sicon:{  
      display: 'flex',
      position:'absolute',
      margin: 'right',
    },
    EllIcon:{
      display: 'flex',
      position:'absolute',
      margin: 'right',
    },
    
    
    button1:{
      justifyContent:'center',
      margin:'15px 0 0 8em',
      display: 'flex',
      height:'40px',
      padding:'12px 16px 0',
      width:'90px',
      position:'absolute',
      cursor:'pointer',
      color:'white',
      fontSize:'16px',
      fontWeight:'600',
      border:'0',
      borderRadius:'40px',
      overflow:'hidden',
      backgroundColor: 'red',
    },
  
  };

  




export default PinCard;
