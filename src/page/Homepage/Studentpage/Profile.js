import React, { useState,useEffect } from "react";
import { getAuth } from "firebase/auth";
import { updateProfile} from 'firebase/auth';
import { collection, doc, getFirestore } from 'firebase/firestore';
import "./Profile.css";

const Profile = props => {
    const auth = getAuth();
    const user = auth.currentUser;

    const db = getFirestore();
    const myCollection = collection(db, "/users").where("uId", "==", user.uid);
    const uid = myCollection.DocumentSnapshot
    const myDoc = doc(myCollection, 'uid');
    console.log("Document data:", myDoc)
    console.log("Document data:",uid)


    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const Username = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      console.log("Email",email)
      console.log("Username",Username)
    }
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        updateProfile(user, { photoURL: file })
    }
 

    return (
      <div>
        <div className="shape" style={{display: "flex"}}>

                <div>
                  <br/>
                  &emsp;<img alt='Profile' src={user.photoURL} /><br/>
                </div>
                <div >
                  <br/>
                  &emsp;&emsp;Username : {user.displayName}<br/>
                  &emsp;&emsp;Email : {user.email}
                </div>

        </div> 
        <div>
          <br/>
          <input type="file" onChange={handleChange} />
        </div>
      </div>
    );

};
export default Profile