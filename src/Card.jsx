import React from 'react';
import PicData from './PicData';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';



function Card(props){
    return(
      <>
      
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card-img"></img>
           <div className="card_info">
             <span className="card_category">{props.picname}</span>
             {/* <h3 className="card_title">{props.title}</h3> */}
             {/* <a href={props.link} target="_blank"> */}
              {/* <button>Watch Now</button></a> */}
           </div>
            
        </div>
    
      </div>
     
      </>
  
   )
  }
export default Card
