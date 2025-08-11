import React from 'react';

import './App.css';
import Bendera from './api/Bendera';
import Flag from './api/Bendera';
import { useEffect, useState } from "react";
import {AvgAge} from './Calculation/Calc';
import { AvgMembership } from './Calculation/Calc';


function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [ageAvg, setAvgAge] = useState<number>(0);
  const [memberAvg, setAvgMember] = useState<number>(0);
  const resultsCount = 20;

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${resultsCount}`)
      .then(res => res.json())
      .then(json => setUsers(json.results));
  }, [resultsCount]);

  useEffect(() => {
    setAvgAge(AvgAge(users));
  }, [users]);

  useEffect(()=>{
    setAvgMember(AvgMembership(users));
  }, [users]);

    const male = users.filter(u => u.gender === "male").length;
    const female = users.filter(u => u.gender === "female").length;
    const uniqueCountries = new Set(users.map(u => u.location.country));
    const countryCount = uniqueCountries.size;
  return (
    
      <div className="App">
        <div className="card">
          
            <div className="header">
              <h4>Member Dashboard</h4>
              
              
                <div className="row">
                  <div className="col"> 
                  <div className="header-content">
                    <div className="row">
                      <div className="col">
                        <div className="content">
                          <p className="header-col-calc">{countryCount}</p>
                          <p className="info">Different Nationality</p>
                        </div>
                      </div>

                      <div className="col">
                          <div className="content-image" >
                            <img src="icon/flag.png" width={60} alt="" />
                          </div>
                      </div>
                    </div>
                      
                  </div>
                  </div>
                  <div className="col">

                  
                  <div className="header-content">
                    <div className="row">
                      <div className="col">
                        <div className="content">
                          <p className="header-col-calc">{male > female ? "Male" : "Female"}</p>
                          <p className="info">Most Gender</p>
                        </div>
                      </div>

                      <div className="col">
                          <div className="content-image" >
                            {male > female ? (
                              <img src="icon/male.png" width={60} alt="More Male" />
                            ): (
                              <img src="icon/female.png" width={60} alt="More Female" />
                            )}
                          </div>
                      </div>
                    </div>
                    
                      
                  </div>
                  
                  

                  
                  </div>
                </div>
                <div className="row">
                  <div className="col"> 
                  <div className="header-content">
                    <div className="row">
                      <div className="col">
                        <div className="content">
                          <p className="header-col-calc">~{ageAvg}</p>
                          <p className="info">Average Age</p>
                        </div>
                      </div>

                      <div className="col">
                          <div className="content-image" >
                           <img src="icon/walking man black.png" width={60} alt="" />
                          </div>
                      </div>
                    </div>
                      
                  </div>
                  </div>
                  <div className="col">

                  
                  <div className="header-content">
                    <div className="row">
                      <div className="col">
                        <div className="content">
                          <p className="header-col-calc">~{memberAvg} year</p>
                          <p className="info">Average Membership</p>
                        </div>
                      </div>

                      <div className="col">
                          <div className="content-image" >
                            <img src="icon/membership.png"  width={60} alt="" />
                          </div>
                      </div>
                    </div>
                    <div className="row">
                      
                    </div>
                      
                  </div>
                  
                  

                  
                  </div>
                </div>
                
            </div>
            <div className="table">
              <table cellPadding={15}>
                
                  {users.map((user, i) =>
                    <tr  key={i}>
                      <td>
                        <img className="userProfile" src={user.picture.large} alt="" />
                      </td>
                      <td>
                        <div className="nama">
                          <p className="username">{user.name.first} {user.name.last}</p>
                          <p className="email">{user.email}</p>
                        </div>
                      </td>
                      <td>
                        <p className="age">{user.dob.age}</p>
                      </td>
                      <td>
                        <p className={user.gender === "male" ? "male" : "female"}>
                          {user.gender}
                        </p>
                      </td>
                      <td>
                        <Flag code={user.nat} name={user.location.country} />
                      </td>
                      <td>
                        <div className="username">
                          {user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.country}
                        </div>
                      </td>
                    </tr>
                  )}
                
              </table>
            </div>
          </div>
        
      
        
      </div>
      
   
  );
}

export default App;
