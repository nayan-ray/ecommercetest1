import React, { useState } from 'react'
import {users} from "../../components/userDummydata";
import "./filter.css"

const Filter = () => {
 const [query, setQuery] = useState("");
 const keys = ["first_name", "last_name", "email" , "gender"];

  return (
    <div className="filter">
     
     <div className='filter-wrapper'>
        <input type="text" placeholder='search here' onChange={(e)=>setQuery(e.target.value)}/>
        {/* part 1 */}
      {/* <ul className='list-filter'> 
        {users.filter((user)=>
         { return user.first_name.toLowerCase().includes(query) || console.log("hello");
        }).map((e)=>{

              return <li key={e.id}>{e.first_name}</li>
                  // console.log(e.email);
                // return e.first_name;
                 // return {name : e.first_name};
                 //a html element can't render object but array.
                 //note: map make a new array with the value returned by anonymous function
                   //if function does not return any value no new array will be made.
                  //at a result, nothing will be displayed inside the element with the map.

            })}
      </ul> */}


      {/* part2 */}
        <table border={1} style={{borderCollapse : 'collapse'}}>
          <tbody>
             <tr>
                  <th>First Name </th>
                  <th>Last Name </th>
                  <th>Email</th>
                  <th>Gender</th>
             </tr>
             {users.filter((user)=>{
            //  return user.first_name.toLowerCase().includes(query) 
            //  || user.last_name.toLowerCase().includes(query)
            //  || user.email.toLowerCase().includes(query)
            //  || user.gender.toLowerCase().includes(query)

             //part-3

              return   keys.some((key)=> user[key].toLowerCase().includes(query))

            })
            
            .map((user)=>{
                 return <tr key={user.id}>
                             <td> {user.first_name}</td>
                             <td>{user.last_name}</td>
                             <td>{user.email}</td>
                             <td>{user.gender}</td>
                 </tr>
             })}
           </tbody>
        </table>



    </div>
    </div>
  )
}

export default Filter
