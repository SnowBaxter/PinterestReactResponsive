
import {faBell,faComment} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React ,{ useState, useEffect } from 'react';

const Navbar = (props) => {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
    useEffect(() => {
    const handler = (e) => setMatches( e.matches );
    window.matchMedia("(max-width: 375px)").addEventListener('change', e => setMatches(e.matches));
  }, 
[]);
  return (
    <div className='NavigationBar' style={{ ...stylesNavbar.GBox }}>       
      <FontAwesomeIcon icon={faPinterest} style={{ ...stylesNavbar.Picon }}/>
      <span style={{ ...stylesNavbar.Inicio}}>Inicio</span>
      <span style={{ ...stylesNavbar.Hoy}}>Hoy</span>
      <FontAwesomeIcon icon={faSearch} style={{ ...stylesNavbar.SearchBarICON }}/>
      <input type="text" placeholder="Buscar"style={{ ...stylesNavbar.SearchBar }}/>     
      <FontAwesomeIcon icon={faBell} style={{ ...stylesNavbar.Bell}}/>
      <FontAwesomeIcon icon={faComment} style={{ ...stylesNavbar.CIcon}}/>
      <FontAwesomeIcon icon={faUser} style={{ ...stylesNavbar.AVR}}/>
      <FontAwesomeIcon icon={faSortDown} style={{ ...stylesNavbar.Sdown}}/>

      <div className= 'OtherButtons' style={_StyleBar.BBox}>
          {matches &&( <div className='B1'style={{..._StyleBar.B1}}>Para ti</div>)}
          {matches &&(<div className='B2'style={{..._StyleBar.B2}}>Illustraciones</div>)}
          {matches &&( <div className='B3'style={{..._StyleBar.B3}}>Recetas de</div>)}
          {!matches && (<button className='inicio' style={{..._StyleBar.inicio}}>Inicio</button>)}
        </div>
    </div>
  ); 
};

const _StyleBar={
  BBox:{
  B1:{
    display: 'flex',
    color:'black',
    width: '58px',
    left:'15px',
    padding: '0px 16px ',
    marginTop:'15px',
    fontWeight:'bold',
    fontSize:'16px'
 },

  B2:{
    display: 'flex',
    color:'black',
    width: '58px',
    left:'15px',
    padding: '0px 16px ',
    marginTop:'15px',
    fontWeight:'bold',
    fontSize:'16px'
  
  },
  B3:{
    display: 'flex',
    color:'black',
    width: '58px',
    left:'15px',
    padding: '0px 16px ',
    marginTop:'15px',
    fontWeight:'bold',
    fontSize:'16px'
  }
}
}

const stylesNavbar = {
  padding:'1em',
  GBox: {
    padding:'1em ',
   backgroundColor: 'white',
        
  },
  Picon:{
    margin:'0px 10px ',
    color:'red',
    width: '22px',
    height: '22px',
    cursor: 'pointer',
  },

  Inicio:{
  padding:'0.7em 0.7em',
  color: 'white',
  width: '40px',
  height: '40px',
  borderRadius:'20px 20px',
  backgroundColor: 'black',
  cursor: 'pointer',
  },
 
  Hoy:{
    padding:'0.7em 0.9em 0em',
    borderRadius:'60px',
    cursor: 'pointer',
     Hover:{
      opacity:'0.7',
     }
  },

  SearchBarICON:{   
    position: 'absolute',
    padding:'0.8em 11em 0em',
    color:'black',
    width: '18px',
    height: '18px',
    },

  SearchBar:{
    paddingLeft:'40px',
    backgroundColor: '#eaeaea',
    height:'20px',
    border:'0',
    borderRadius: '20px 20px',
    width: '5000px',
    height:'40px',
    margin:'left(20px)',
   },

 Bell:{
  padding:'0.7em 0.7em 0em',
  width: '23px',
  height: '23px',
  onclick: 'pointer',
  cursor: 'pointer',
  },

 CIcon:{
  padding:'0.7em 0.7em 0em',
  width: '23px',
  height: '23px',
  cursor: 'pointer',
   },
AVR:{
  padding:'0.7em 0.7em 0em',
  width: '23px',
  height: '23px',
  cursor: 'pointer',
  },

Sdown:{
  width: '23px',
  height: '23px',
  cursor: 'pointer',
  }
 
};

export default Navbar;
