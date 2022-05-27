import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";


const AuthenticationInitialize = () =>{

    initializeApp(firebaseConfig);
}

export default AuthenticationInitialize;