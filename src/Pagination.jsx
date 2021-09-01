import React from 'react'
import { useState, useEffect } from 'react';

import PicData from './PicData';



function Pagination() {
const[pagedata,setPageData]=useState([
{   
    key:1,
    imgsrc:"https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg",
    picname:"Apple",
    title:"fruit name",
    link:"https://www.tompetty.com",
},
{  
     key:2,
    picname:"Hand",
    imgsrc:"https://s3.favim.com/orig/39/cool-random-text-Favim.com-318794.jpg",
    title:"fruit name",
    link:"https://www.tompetty.com",
},
{  
     key:3,
    picname:"Tiger",
    imgsrc:"https://50-best.com/wp-content/uploads/2018/12/swimming_tiger.jpg",
    title:"fruit name",
    link:"https://www.tompetty.com",
},
{   
    key:4,
    picname:"Dog",
    imgsrc:"https://cdn.ebaumsworld.com/2015/08/24/015139/84708898/nAPU8TV.png",
    title:"fruit name",
    link:"https://www.tompetty.com",
},
{   
    key:5,
    picname:"Apple",
    imgsrc:"https://www.tompetty.com/sites/g/files/g2000007521/f/Sample-image10-highres.jpg",
    title:"fruit name",
    link:"https://www.tompetty.com",
},
{   
    key:6,
    picname:"Hand",
    imgsrc:"https://s3.favim.com/orig/39/cool-random-text-Favim.com-318794.jpg",
    title:"fruit name",
    link:"https://www.tompetty.com",

},
{
    key:7,
    picname:"Nature",
    imgsrc:"https://picsum.photos/seed/picsum/200/300",
    title:"fruit name",
    link:"https://www.tompetty.com",
},
{
    key:8,
    picname:"Dog",
    imgsrc:"https://picsum.photos/id/237/200/300",
    title:"random",
    link:"https://www.tompetty.com",
},
{
    key:9,
    picname:"Laptop",
    imgsrc:"https://picsum.photos/id/0/200/300",
    title:"random",
    link:"https://www.tompetty.com",
},
 
{
    key:10,
    picname:"Blur",
    imgsrc:"https://picsum.photos/seed/picsum/200/300",
    title:"aa",
    link : "https://picsum.photos/",
}
]);

const[currentpage,setCurrentPage]=useState(1);
const[itemsPerPage,setItemsPerPage]=useState(5);



const handleClick =(e)=>{
    setCurrentPage(Number(e.target.id))
};


useEffect(() => {
   console.log("happnd");
},[JSON.stringify(pagedata)]);

return (
        <>
           <div>
   <h1 className="heading_style">Welcome to Gallery</h1>
   </div>
     <div className="gallery-item">
       <div className="item"> 
       {pagedata.map((CurElem)=>(
           <h4>CurElem</h4>
       )

            )}
       </div>
     </div>
           
        </>
    );
}

export default Pagination;


