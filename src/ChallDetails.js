import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ChallDetails() {
  const{challid}=useParams();
  const[challdata,setChalldata]=useState({})
  useEffect(()=>{
    fetch('http://localhost:8000/challenge/'+challid)
      .then((res) => res.json())
      .then((data) => setChalldata(data))
      .catch((err) => console.log(err.message));

  },[])
  return (
    <div>
      { challdata &&
      <h1> the challenge name is: {challdata.name} ({challdata.challid})</h1>
    }
    </div>
  )
}
export default ChallDetails;
