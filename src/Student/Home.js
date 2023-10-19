import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import "./styles.css";

function Home() {
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          const userName = user.displayName;
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
      
     
}, [])

  
  return (
    <main >        
        <section>
          <div className="size-headHome"> 
            <br/>01236254 CIRCUITS AND ELECTRONICS<br/><br/>
          </div>
        </section>
    </main>
  );
}

export default Home;


