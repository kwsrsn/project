import React, {useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Student/Home.js';
import Hometeacher from './page/Hometeacher.js';
import Signup from './Student/Signup.js';
import Login from './Student/Login.js';
import Homework from './page/Homepage/Studentpage/Homework.js';
import Profile from './page/Homepage/Studentpage/Profile.js';
import Setting from './page/Homepage/Studentpage/Setting.js';
import TeacherLogin from './page/TeacherLogin.js';
import './App.css';
import Layout from './components/widgets/Layout';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase.js'; 
import Sidebar from './components/widgets/Sidebar.js';

function App() {
  return (
    <Router>
      <div className="background">
        <section>          
          <div>            
            <Routes >
                <Route 

                  path="/home"
                  element={
                    <Layout>
                      < Home />
                    </Layout>
                  }
                />
                <Route 
                  path="/hometeacher"
                  element={
                    <Layout>
                      < Hometeacher />
                    </Layout>
                  }
                />
                <Route 
                  path="/Homework"
                  element={
                    <Layout>
                      < Homework />
                    </Layout>
                  }
                />
                <Route 
                  path="/Profile"
                  element={
                    <Layout>
                      < Profile />
                    </Layout>
                  }
                />
                <Route 
                  path="/Setting"
                  element={
                    <Layout>
                      < Setting />
                    </Layout>
                  }
                />

              <Route path="/" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/teacher" element={<TeacherLogin/>}/>
              
            </Routes>          
          </div>
        </section>

      </div>
    </Router>
  );
}

export default App;