import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  , updateProfile} from 'firebase/auth';
import { auth,db } from '../firebase';
import { getAuth } from "firebase/auth";
import { collection, addDoc,doc,document } from "firebase/firestore";


import "./styles.css";

const Signup = () => {

    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [error,setError]=useState();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const auth = getAuth();
    const user = auth.currentUser;

    const onSubmit = async (e) => {
      e.preventDefault()   
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {displayName : Username})
            updateProfile(auth.currentUser, { photoURL: 'https://f.ptcdn.info/698/056/000/p5vy2s7tu0Xjg7IM2Tc-o.jpg' });
            navigate("/")
            // ...
            try {
                const docRef = await addDoc(collection(db, "/users"), {
                    firstName: firstName, 
                    lastName: lastName,
                    displayName: Username,
                    email: email,
                    password: password
    
                });
                console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                console.error("Error adding document: ", e);
                }
        })
       
        .catch((error) => {
            if (error.code == "auth/email-already-in-use") {
                setError("The email address is already in use");
                // alert();
            
              } else if (error.code == "auth/invalid-email") {
                setError("The email address is not valid.");
                 
              } else if (error.code == "auth/operation-not-allowed") {
                setError("Operation not allowed.");
              } else if (error.code == "auth/weak-password") {
                setError("The password is too weak.");
              }
            
        });
        
           
        
    }
    
    
  
  

  return (
    <main >        
        <section>

            <div className="App">
                    <div>
                        <br/><img src="logonow.png" alt="Logo" height={90} />
                        <h2 className="size-head">
                            CIRCUITS & ELECTRONICS<br />
                        </h2>                 
                    </div>

                <div className='square'><br/>
                    <div className='size-head2'>Sign up<br/></div> 
                    <form onSubmit={onSubmit} className="text-center" >                    
                        <div className=" text-center ">
                            <div>
                                <label htmlFor="email-address" className="small-log">
                                First name &nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    label="First name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}                                    
                                    name="firstname"
                                    type="text"                                    
                                    required                                
                                    className="text-input "
                                    placeholder="First name"                                   
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="small-log">
                                    Last name &nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    label="Last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}                                    
                                    required
                                    type="text"
                                    name="lastname"                                                                       
                                    className="text-input"
                                    placeholder="Last name"                                    
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email-address" className="small-log">
                                Email address&nbsp;&nbsp;&nbsp;&nbsp; 
                                </label><br />
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}                                    
                                    required
                                    className="text-input"
                                    placeholder="6601xxxx@kmitl.ac.th"                                
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="small-log">
                                    Username &nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    label="text"
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}                                    
                                    required
                                    type="text"
                                    name="Username"                                                                       
                                    className="text-input"
                                    placeholder="Username"                                    
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="small-log">
                                    Password &nbsp;&nbsp;&emsp;&emsp;
                                </label><br />
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}                                    
                                    required
                                    className="text-input "
                                    placeholder="Password"                                
                                />
                            </div>
                            
                        </div>                        
                                             
                    </form>
                    <p className="error">{error}</p>

                    <form onSubmit={onSubmit} className="text-center" >

                    <div>
                            <button
                                type="submit"                                                               
                                className="lead boxx"
                            >   
                                Sign up                                                             
                            </button>
                        </div>

                    </form>
                   

                    <p className="smaller"> 
                        Already have an account?{' '} 
                        <NavLink to="/login" className="underline text-tertiary">
                            Login<br/><br/><br/>
                        </NavLink>
                    </p>
                    
                </div>
            </div>
        </section>
    </main>
  )
}

export default Signup