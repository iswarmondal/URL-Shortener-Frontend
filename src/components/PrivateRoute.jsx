import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Login from '../pages/Login';

function PrivateRoute() {
    const [userVarified, setUserVarified] = useState(false);

    useEffect(() => {
      axios({
          url: `${process.env.REACT_APP_BASE_URL}/api/user/varify-user`,
          method: 'GET',
          headers: {
              authorization: localStorage.getItem("authToken")
          }
      })
      .then(res=>{
        if(res.data.success){
            setUserVarified(true);
        }
      })
      .catch(err=>{
        setUserVarified(false);
        console.log(err.response);
      })
    }, [])
    
    return (
        <>
            {userVarified ? <Outlet /> : <Login />}
        </>
    )
}

export default PrivateRoute