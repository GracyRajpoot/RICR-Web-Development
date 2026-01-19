 import React, { useEffect,useState } from 'react';  // write imr for import this line
import { useState} from 'react';

 const AuthContext = React.createContext();

 const AuthProvider = (props)=>{

    const [user,setUser] = useState({});
    const [isLogin, setIsLogin] = useState(!!user);

    useEffect (()=> {
        setIsLogin(!!user);
   }, [user]);{

 };




