import React, { useState } from 'react'
import axios from 'axios';

function URLInputField({setUpdateList}) {
  const [url, setUrl] = useState(null)

  const submitHandler = (e) => {

    e.preventDefault();

    axios({
      url: "http://localhost:4000/short-that-url",
      method: "POST",
      headers: {
        // authorization: "your token comes here",
      },
      data: {
        "fullURL": url
      },
    })
      .then((res) => { if(res.data.success){
        setUpdateList(true)
      } })

      .catch((err) => { console.log(err); });

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