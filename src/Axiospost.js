import axios from 'axios'
import React, { useState } from 'react'

function Axiospost() {
 const [my_title , setTitle] = useState('');
 const [my_body , setBody] = useState('');
 
 const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post  ("https://jsonplaceholder.typicode.com/posts",{
        title:my_title,
        body:my_body
    })
    .then((response)=>{
   console.log(response);
    }).catch((error)=>{
        console.log(error) 
    })
 }

 return (
<>
<form onSubmit={handleSubmit}>
    <label> Enter  Title : </label>
    <input type='text' name='title' value={my_title} onChange={(e)=>setTitle(e.target.value)}/>
    <br/><br/>
    <label> Enter  Body : </label>
    <input type='text' name='Body' value={my_body} onChange={(e)=>setBody(e.target.value)}/>
    <br/><br/>
    <button>Post</button>
</form>
</>
  )
}

export default Axiospost