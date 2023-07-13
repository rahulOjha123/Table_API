import { element } from "prop-types";
import React, { useEffect, useState } from "react";
// const API="http://localhost:3003/users"

const Tables = () => {
    const [items,setItems]=useState([]);

    const fetchStat=async ()=>{

        try{
            const res=await fetch(" http://localhost:3003/users");
            const data =await res.json()

            if(data.length>0){
                setItems(data)
            }
            console.log(data)
        } catch (e){
            console.error(e)
          
        }
    }
    

   useEffect(()=>{
        fetchStat();
   },[])

  return (
    <>
    <div className="container">
        <h1>Hello Table</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
            
         {
            items.map((val,index)=>{
                return(
                    <tr key={index}style={{backgroundColor:"pink"}}className="table table-light table-hover">
                    <th scope="row">{val.id}</th>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.hello}</td>
                  </tr>
                )
            })
         }
         
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Tables;
