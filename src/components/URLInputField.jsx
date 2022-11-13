import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import authAxios from '../authAxios';

function URLInputField({updateList, setUpdateList}) {
  const navigate = useNavigate();
  const [url, setUrl] = useState(null)

  const submitHandler = (e) => {

    e.preventDefault();

    authAxios({
      url: `/short-that-url`,
      method: "POST",
      headers:{
        "authorization" : `${localStorage.getItem("authToken")}`
      },
      data: {
        "fullURL": url,
      },
    })
      .then((res) => { if(res.data.success){
        updateList ? setUpdateList(false) : setUpdateList(true);
      }else{
        navigate("/login")
      }})

      .catch((err) => {
        console.log(err.response.data);
        if(err.response.data.success === false){
          navigate("/login")
        }
      });

  }
  return (
    <>
      <form action="/short-that-url" method="post" id="url-form">
        <label htmlFor="fullURL" className="hidden">URL</label>
        <input
          type="url"
          name="fullURL"
          id="fullURL"
          placeholder="URL..."
          required
          className="w-[55vw] p-5 rounded-md border-4 border-zinc-700"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" className="m-3 border-4 p-5 rounded-lg border-yellow-400 hover:bg-yellow-400 font-bold" onClick={submitHandler}>~ Shorten ~</button>
      </form>
    </>
  )
}

export default URLInputField