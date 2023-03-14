import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ChallCreate from './ChallCreate';

function Challenge() {
  const [challdata, setChalldata] = useState(null);
  const navigate = useNavigate(); // define useNavigate hook here

  const LoadDetail = (id) => {
    navigate(`/challenge/details/${id}`); // use navigate function here
  };

  const LoadEdit = (id) => {
    navigate(`/challenge/details/${id}`); // use navigate function here
  };

  const Removefunction = (id) => {};

  useEffect(() => {
    fetch('http://localhost:8000/challenge')
      .then((res) => res.json())
      .then((data) => setChalldata(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className='container'>
      <div className='card'>
        <div className='title'>
          <h2>Challenge Listing</h2>
        </div>
        <div className='card-body'>
          <div className='divbtn'>
            <Link className='btn btn-success' to='challenge/create'>
              Add new(+)
            </Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>PHONE</td>
                <td>ACTION</td>
              </tr>
            </thead>
            <tbody>
              {challdata &&
                challdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        className='btn btn-success'
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className='btn btn-danger'
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                      >
                        Remove
                      </button>
                      <button
                        className='btn btn-primary'
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
