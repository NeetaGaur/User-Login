import React from 'react'
import { useState ,useEffect} from 'react';
import { picsum } from 'react-lorem-picsum';
import PicData from './PicData';


const renderData= pagedata=>{
    return(
        <ul>
            {pagedata.map((CurElem,index)=>{
                return <li key={index}>{CurElem.img}</li>
            })}
        </ul>
    );
};

function Test() {
const[pagedata,setPageData]=useState([]);

const[currentpage,setCurrentPage]=useState(1);
const[itemsPerPage,setItemsPerPage]=useState(5);



const handleClick =(e)=>{
    setCurrentPage(Number(e.target.id))
};


const Pages=[];
for(let i=1; i<=Math.ceil(pagedata.length/itemsPerPage);i++)
{Pages.push(i);
}

const indexOfLastItem= currentpage * itemsPerPage;
const indexOfFirstItem= indexOfLastItem - itemsPerPage;
const currentItems = pagedata.slice(indexOfFirstItem , indexOfLastItem);

const renderPageNumber = Pages.map((number)=>{
    return (
        <li key={number} 
            id={number}
            onClick={handleClick}
            className={currentpage==number ? "active" : null}>
            {number}
        </li>
    );
});

useEffect(()=>{
      let url="https://api.unsplash.com/photos";
fetch(url)
   .then((response)=> response.json())
   .then((json) =>setPageData(json))
// .then((json) =>console.log(json))
}, []);

    return (
        <>
           <h1>pagination</h1> 
           <ul className="pagenumbers">{renderPageNumber}</ul>
          <div className="rendData">{renderData(currentItems)}</div> 
        </>
    );
}

export default Test;







// export default Test


// // if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
// //     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
// //      } else {
// //     document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";} return false;
