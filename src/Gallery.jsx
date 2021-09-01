import React from 'react';
import PicData from './PicData';
import Card from './Card';
import Pagination from '@material-ui/lab/Pagination';

import { Grid } from '@material-ui/core';
 

const Gallery = () => {
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };
 

    return (
    <>
   {/* <Grid className="paginate" > <Pagination count={10}
    page={page} 
    onChange={handleChange}
   alignItems= 'center' justify= 'center' /></Grid> */}

   <div>
   <h1 className="heading_style">Welcome to Gallery</h1>
   </div>
     <div className="gallery-item">
       <div className="item">
       
         <img src='https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://s3.favim.com/orig/39/cool-random-text-Favim.com-318794.jpg'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="item">
         <img src='https://50-best.com/wp-content/uploads/2018/12/swimming_tiger.jpg'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="item">
         <img src='https://picsum.photos/seed/picsum/200/300'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="item">
         <img src='https://picsum.photos/id/237/200/300'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="item">
         <img src='https://picsum.photos/id/0/200/300'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="item">
         <img src='https://picsum.photos/seed/picsum/200/300'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="item">
         <img src='https://images.unsplash.com/photo-1558386619-20f2c53c3ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1558393385-c2019c6a125c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1600716051809-e997e11a5d52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=733&q=80'
          alt="gallery" width="300" height="300"/>
       </div>


       <div className="item">
         <img src='https://images.unsplash.com/photo-1558389186-438424b00a32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>


       <div className="item">
         <img src='https://images.unsplash.com/photo-1531361171768-37170e369163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1620231191312-c036d7674c8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>


       <div className="item">
         <img src='https://images.unsplash.com/photo-1598350740675-8ba58f6113d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1558384697-f549edf52646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1613467663837-e4a6be2014b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=792&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1558389158-ae3484c63aa8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>

       <div className="item">
         <img src='https://images.unsplash.com/photo-1558389186-438424b00a32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt="gallery" width="300" height="300"/>
       </div>
       <div className="pagination">
        <div className="prev">Previous</div>

        <div className="page">Page<span className="page"></span></div>
        
        <div className="next">Next</div>
      </div>
 
     </div>
      



        {/* <div>
         <h1 className="heading_style">Welcome to Gallery</h1>
         
         {PicData.map(function ImgData(CurVal){
            return(<Card
               imgsrc={CurVal.imgsrc}
               picname={CurVal.picname}
               title={CurVal.title}
               link={CurVal.link} />
               
                );
                
         })}
         
        </div> */}
       {/* <div className="paginate">
           <ul> 
               <li className='numb'><span>1</span></li>
               <li className='numb'><span>2</span></li>
               <li className='numb'><span>3</span></li>
               <li className='numb'><span>4</span></li>
               <li className='numb'><span>5</span></li>

           </ul>
       </div>
        */}
  </>
    );
};

export default Gallery



// function ImgData(CurVal){
//     return(<Gallery
//      imgsrc={CurVal.imgsrc}
//      picname={CurVal.picname}
//      title={CurVal.title}
//      link={CurVal.link} 
//      />
//     );
   
//    }
{/* <div>
         <h1 className="heading_style">Welcome to Gallery</h1>
         
         {PicData.map(function ImgData(CurVal){
            return(<Card
               imgsrc={CurVal.imgsrc}
               picname={CurVal.picname}
               title={CurVal.title}
               link={CurVal.link} />
               
                );
                
         })}
         
        </div> */}