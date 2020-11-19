import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from 'react';
import { useEffect } from 'react';



firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = (props) =>{
    const auth = Auth();
return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>

}

export const useAuth = () => useContext(AuthContext);

const getUser = user =>{
        const {displayName, email, photoURL} = user;
        return {name:displayName, email, photo:photoURL};
}


const Auth = () =>{

    const [user, setUser] = useState(null);
    const provider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const signInUser = getUser(res.user);
            setUser(signInUser);
            return res.user;
        })
        .catch(err =>{
            
            setUser(null);
            return err.message;
        })
    }

    const signOut = () =>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            setUser(null);
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
    }

    useEffect(() =>{

        firebase.auth().onAuthStateChanged(function(usr) {
            if (usr) {
              // User is signed in.
              const currUser = getUser(usr);
              setUser(currUser);
              console.log(user);
            } else {
              // No user is signed in.
            }
          });

    }, [])

    return{
        user,
        signInWithGoogle,
        signOut
    }

}

export default Auth;