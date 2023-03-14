import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

function ChallCreate() {
    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[active,activechange]=useState(true);
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
      //  console.log({id,name,phone,email,active});
      const challdata={id,name,phone,email,active};
      

      fetch("  http://localhost:8000/challenge",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(challdata)
      }).then((res)=>{
        alert("saved successfully");
        navigate('/')

      }).catch((err)=>{
        console.log(err.message)
      })
    }
    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handlesubmit}>
                        <div className='card'>
                            <div className='title'>
                                <h2>Challenge Create</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className='form-control'></input>
                                        </div>

                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input value={name} onChange={e=>namechange(e.target.value)}className='form-control'></input>
                                        </div>

                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>EMAIL</label>
                                            <input className='form-control'
                                            value={email} onChange={e=>emailchange(e.target.value)}></input>
                                        </div>

                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>PHONE</label>
                                            <input className='form-control' value={phone} onChange={e=>phonechange(e.target.value)} ></input>
                                        </div>

                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <label className='form-check-label'type="check" checked={active} onChange={e=>activechange(e.target.checked)}>
                                                Is Active</label>
                                            <input type="checkbox" className='form-check-input'></input>
                                        </div>

                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='btn btn-success' type='submit'>save</button>
                                            <Link to='/'className='btn btn-danger'>Back</Link>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}
export default ChallCreate;
