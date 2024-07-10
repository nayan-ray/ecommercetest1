import React, { useState } from 'react'
import {users} from "../../components/userDummydata";
import "./filter.css"

const Filter = () => {
 const [query, setQuery] = useState("");


  return (
    <div className="filter">
      {/* <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <ul className="list">
        {users.filter((asd) =>
          asd.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li className="listItem" key={user.id}>
            {user.first_name}
          </li>
        ))}
      </ul> */}
     <div className='filter-wrapper'>
        <input type="text" placeholder='search here' onChange={(e)=>setQuery(e.target.value)}/>
       {console.log(query)}
      <ul className='list-filter'>
        {users.filter((user)=>
         { return user.first_name.toLowerCase().includes(query) 
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
      </ul>
    </div>
    </div>
  )
}

export default Filter
