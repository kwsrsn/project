import React, {useState} from 'react';
import Text from '../components/elements/Text';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import "./styles.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            alert('Invalid Username or Password')
        });
        
    }

    return(
        <div className="App ">
            <div>
                <br/><img src="logonow.png" alt="Logo" height={90} />
                <h2 className="size-head ">
                    CIRCUITS & ELECTRONICS<br/>
                </h2>                     
            </div>
                            
            <div className='square'><br/>
                <div className='size-head2'>Login<br/><br/></div> 
                    <form className="text-center" >                           
                    
                            <div>
                                <label htmlFor="email-address" className="small-log">
                                Email address&emsp;
                                </label><br/>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                            
                                    className="text-input"
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="small-log ">
                                <br/>Password &nbsp;&nbsp;&nbsp;&emsp;&emsp;
                                </label><br/>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                            
                                    className="text-input"
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                /><br/><br/>
                            </div>
                        <button                                     
                            onClick={onLogin}
                            className="lead boxx"
                            >      
                            Login                                                                  
                        </button>                        
                    </form>

                            
                    <p className="smaller ">
                        No account yet?{' '}
                        <NavLink to="/signup">
                            Sign up
                        </NavLink>
                    </p><br/>
                    <p className="smaller text-bottom ">
                        <br/><br/><br/>Teacher {' '}
                        <NavLink to="/teacher">
                            Login<br/><br/>
                        </NavLink>
                    </p>
                </div>
            </div>
    )
}

export default Login